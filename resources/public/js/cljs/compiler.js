// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__40582 = s;
var map__40582__$1 = ((((!((map__40582 == null)))?((((map__40582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40582):map__40582);
var name = cljs.core.get.call(null,map__40582__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__40582__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__40585 = info;
var map__40586 = G__40585;
var map__40586__$1 = ((((!((map__40586 == null)))?((((map__40586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40586):map__40586);
var shadow = cljs.core.get.call(null,map__40586__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__40585__$1 = G__40585;
while(true){
var d__$2 = d__$1;
var map__40588 = G__40585__$1;
var map__40588__$1 = ((((!((map__40588 == null)))?((((map__40588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40588):map__40588);
var shadow__$1 = cljs.core.get.call(null,map__40588__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__40590 = (d__$2 + (1));
var G__40591 = shadow__$1;
d__$1 = G__40590;
G__40585__$1 = G__40591;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__40592){
var map__40593 = p__40592;
var map__40593__$1 = ((((!((map__40593 == null)))?((((map__40593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40593):map__40593);
var name_var = map__40593__$1;
var name = cljs.core.get.call(null,map__40593__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__40593__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__40595 = info;
var map__40595__$1 = ((((!((map__40595 == null)))?((((map__40595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40595):map__40595);
var ns = cljs.core.get.call(null,map__40595__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__40595__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__40598 = arguments.length;
switch (G__40598) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__40600 = cp;
switch (G__40600) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__40602_40606 = cljs.core.seq.call(null,s);
var chunk__40603_40607 = null;
var count__40604_40608 = (0);
var i__40605_40609 = (0);
while(true){
if((i__40605_40609 < count__40604_40608)){
var c_40610 = cljs.core._nth.call(null,chunk__40603_40607,i__40605_40609);
sb.append(cljs.compiler.escape_char.call(null,c_40610));

var G__40611 = seq__40602_40606;
var G__40612 = chunk__40603_40607;
var G__40613 = count__40604_40608;
var G__40614 = (i__40605_40609 + (1));
seq__40602_40606 = G__40611;
chunk__40603_40607 = G__40612;
count__40604_40608 = G__40613;
i__40605_40609 = G__40614;
continue;
} else {
var temp__4657__auto___40615 = cljs.core.seq.call(null,seq__40602_40606);
if(temp__4657__auto___40615){
var seq__40602_40616__$1 = temp__4657__auto___40615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40602_40616__$1)){
var c__28775__auto___40617 = cljs.core.chunk_first.call(null,seq__40602_40616__$1);
var G__40618 = cljs.core.chunk_rest.call(null,seq__40602_40616__$1);
var G__40619 = c__28775__auto___40617;
var G__40620 = cljs.core.count.call(null,c__28775__auto___40617);
var G__40621 = (0);
seq__40602_40606 = G__40618;
chunk__40603_40607 = G__40619;
count__40604_40608 = G__40620;
i__40605_40609 = G__40621;
continue;
} else {
var c_40622 = cljs.core.first.call(null,seq__40602_40616__$1);
sb.append(cljs.compiler.escape_char.call(null,c_40622));

var G__40623 = cljs.core.next.call(null,seq__40602_40616__$1);
var G__40624 = null;
var G__40625 = (0);
var G__40626 = (0);
seq__40602_40606 = G__40623;
chunk__40603_40607 = G__40624;
count__40604_40608 = G__40625;
i__40605_40609 = G__40626;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__28891__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28892__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28893__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28894__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28895__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28895__auto__,method_table__28891__auto__,prefer_table__28892__auto__,method_cache__28893__auto__,cached_hierarchy__28894__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__38979__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__38979__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__40627_40632 = ast;
var map__40627_40633__$1 = ((((!((map__40627_40632 == null)))?((((map__40627_40632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40627_40632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40627_40632):map__40627_40632);
var env_40634 = cljs.core.get.call(null,map__40627_40633__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_40634))){
var map__40629_40635 = env_40634;
var map__40629_40636__$1 = ((((!((map__40629_40635 == null)))?((((map__40629_40635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40629_40635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40629_40635):map__40629_40635);
var line_40637 = cljs.core.get.call(null,map__40629_40636__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40638 = cljs.core.get.call(null,map__40629_40636__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__40629_40635,map__40629_40636__$1,line_40637,column_40638,map__40627_40632,map__40627_40633__$1,env_40634,val__38979__auto__){
return (function (m){
var minfo = (function (){var G__40631 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__40631,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__40631;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_40637 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__40629_40635,map__40629_40636__$1,line_40637,column_40638,map__40627_40632,map__40627_40633__$1,env_40634,val__38979__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_40638)?(column_40638 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__40629_40635,map__40629_40636__$1,line_40637,column_40638,map__40627_40632,map__40627_40633__$1,env_40634,val__38979__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__40629_40635,map__40629_40636__$1,line_40637,column_40638,map__40627_40632,map__40627_40633__$1,env_40634,val__38979__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__40629_40635,map__40629_40636__$1,line_40637,column_40638,map__40627_40632,map__40627_40633__$1,env_40634,val__38979__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__40629_40635,map__40629_40636__$1,line_40637,column_40638,map__40627_40632,map__40627_40633__$1,env_40634,val__38979__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__38979__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__29112__auto__ = [];
var len__29105__auto___40645 = arguments.length;
var i__29106__auto___40646 = (0);
while(true){
if((i__29106__auto___40646 < len__29105__auto___40645)){
args__29112__auto__.push((arguments[i__29106__auto___40646]));

var G__40647 = (i__29106__auto___40646 + (1));
i__29106__auto___40646 = G__40647;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__40641_40648 = cljs.core.seq.call(null,xs);
var chunk__40642_40649 = null;
var count__40643_40650 = (0);
var i__40644_40651 = (0);
while(true){
if((i__40644_40651 < count__40643_40650)){
var x_40652 = cljs.core._nth.call(null,chunk__40642_40649,i__40644_40651);
if((x_40652 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_40652)){
cljs.compiler.emit.call(null,x_40652);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_40652)){
cljs.core.apply.call(null,cljs.compiler.emits,x_40652);
} else {
if(goog.isFunction(x_40652)){
x_40652.call(null);
} else {
var s_40653 = cljs.core.print_str.call(null,x_40652);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__40641_40648,chunk__40642_40649,count__40643_40650,i__40644_40651,s_40653,x_40652){
return (function (p1__40639_SHARP_){
return (p1__40639_SHARP_ + cljs.core.count.call(null,s_40653));
});})(seq__40641_40648,chunk__40642_40649,count__40643_40650,i__40644_40651,s_40653,x_40652))
);
}

cljs.core.print.call(null,s_40653);

}
}
}
}

var G__40654 = seq__40641_40648;
var G__40655 = chunk__40642_40649;
var G__40656 = count__40643_40650;
var G__40657 = (i__40644_40651 + (1));
seq__40641_40648 = G__40654;
chunk__40642_40649 = G__40655;
count__40643_40650 = G__40656;
i__40644_40651 = G__40657;
continue;
} else {
var temp__4657__auto___40658 = cljs.core.seq.call(null,seq__40641_40648);
if(temp__4657__auto___40658){
var seq__40641_40659__$1 = temp__4657__auto___40658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40641_40659__$1)){
var c__28775__auto___40660 = cljs.core.chunk_first.call(null,seq__40641_40659__$1);
var G__40661 = cljs.core.chunk_rest.call(null,seq__40641_40659__$1);
var G__40662 = c__28775__auto___40660;
var G__40663 = cljs.core.count.call(null,c__28775__auto___40660);
var G__40664 = (0);
seq__40641_40648 = G__40661;
chunk__40642_40649 = G__40662;
count__40643_40650 = G__40663;
i__40644_40651 = G__40664;
continue;
} else {
var x_40665 = cljs.core.first.call(null,seq__40641_40659__$1);
if((x_40665 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_40665)){
cljs.compiler.emit.call(null,x_40665);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_40665)){
cljs.core.apply.call(null,cljs.compiler.emits,x_40665);
} else {
if(goog.isFunction(x_40665)){
x_40665.call(null);
} else {
var s_40666 = cljs.core.print_str.call(null,x_40665);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__40641_40648,chunk__40642_40649,count__40643_40650,i__40644_40651,s_40666,x_40665,seq__40641_40659__$1,temp__4657__auto___40658){
return (function (p1__40639_SHARP_){
return (p1__40639_SHARP_ + cljs.core.count.call(null,s_40666));
});})(seq__40641_40648,chunk__40642_40649,count__40643_40650,i__40644_40651,s_40666,x_40665,seq__40641_40659__$1,temp__4657__auto___40658))
);
}

cljs.core.print.call(null,s_40666);

}
}
}
}

var G__40667 = cljs.core.next.call(null,seq__40641_40659__$1);
var G__40668 = null;
var G__40669 = (0);
var G__40670 = (0);
seq__40641_40648 = G__40667;
chunk__40642_40649 = G__40668;
count__40643_40650 = G__40669;
i__40644_40651 = G__40670;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq40640){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40640));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__29112__auto__ = [];
var len__29105__auto___40676 = arguments.length;
var i__29106__auto___40677 = (0);
while(true){
if((i__29106__auto___40677 < len__29105__auto___40676)){
args__29112__auto__.push((arguments[i__29106__auto___40677]));

var G__40678 = (i__29106__auto___40677 + (1));
i__29106__auto___40677 = G__40678;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_40672_40679 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_40672_40679;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__40673){
var map__40674 = p__40673;
var map__40674__$1 = ((((!((map__40674 == null)))?((((map__40674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40674):map__40674);
var m = map__40674__$1;
var gen_line = cljs.core.get.call(null,map__40674__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq40671){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40671));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__28963__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40680_40682 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40681_40683 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40680_40682,_STAR_print_fn_STAR_40681_40683,sb__28963__auto__){
return (function (x__28964__auto__){
return sb__28963__auto__.append(x__28964__auto__);
});})(_STAR_print_newline_STAR_40680_40682,_STAR_print_fn_STAR_40681_40683,sb__28963__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40681_40683;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40680_40682;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28963__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__28891__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28892__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28893__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28894__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28895__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28895__auto__,method_table__28891__auto__,prefer_table__28892__auto__,method_cache__28893__auto__,cached_hierarchy__28894__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__40684 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__40684,(0),null);
var flags = cljs.core.nth.call(null,vec__40684,(1),null);
var pattern = cljs.core.nth.call(null,vec__40684,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
var temp__4655__auto__ = (function (){var and__27924__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__27924__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__27924__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var temp__4655__auto__ = (function (){var and__27924__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__27924__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__27924__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__40688){
var map__40689 = p__40688;
var map__40689__$1 = ((((!((map__40689 == null)))?((((map__40689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40689):map__40689);
var ast = map__40689__$1;
var info = cljs.core.get.call(null,map__40689__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__40689__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__40689__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__4655__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__4655__auto__)){
var const_expr = temp__4655__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__40691 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__40691__$1 = ((((!((map__40691 == null)))?((((map__40691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40691):map__40691);
var cenv = map__40691__$1;
var options = cljs.core.get.call(null,map__40691__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__27936__auto__ = js_module_name;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__40693 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__27924__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__27924__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__27924__auto__;
}
})())){
return clojure.set.difference.call(null,G__40693,cljs.analyzer.es5_allowed);
} else {
return G__40693;
}
})();
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__40694 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__40694,reserved);
} else {
return G__40694;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__40695){
var map__40696 = p__40695;
var map__40696__$1 = ((((!((map__40696 == null)))?((((map__40696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40696):map__40696);
var arg = map__40696__$1;
var env = cljs.core.get.call(null,map__40696__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__40696__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__40696__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__40696__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__40698 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__40698__$1 = ((((!((map__40698 == null)))?((((map__40698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40698):map__40698);
var name = cljs.core.get.call(null,map__40698__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__40700){
var map__40701 = p__40700;
var map__40701__$1 = ((((!((map__40701 == null)))?((((map__40701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40701):map__40701);
var expr = cljs.core.get.call(null,map__40701__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__40701__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__40701__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__40703_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__40703_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__40704){
var map__40705 = p__40704;
var map__40705__$1 = ((((!((map__40705 == null)))?((((map__40705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40705):map__40705);
var env = cljs.core.get.call(null,map__40705__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__40705__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__40705__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__40707){
var map__40708 = p__40707;
var map__40708__$1 = ((((!((map__40708 == null)))?((((map__40708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40708):map__40708);
var items = cljs.core.get.call(null,map__40708__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__40708__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__40710){
var map__40711 = p__40710;
var map__40711__$1 = ((((!((map__40711 == null)))?((((map__40711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40711):map__40711);
var items = cljs.core.get.call(null,map__40711__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__40711__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_40713 = cljs.core.count.call(null,items);
if((cnt_40713 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_40713,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__40714_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__40714_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__40715){
var map__40716 = p__40715;
var map__40716__$1 = ((((!((map__40716 == null)))?((((map__40716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40716):map__40716);
var items = cljs.core.get.call(null,map__40716__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__40716__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__40718){
var map__40719 = p__40718;
var map__40719__$1 = ((((!((map__40719 == null)))?((((map__40719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40719):map__40719);
var items = cljs.core.get.call(null,map__40719__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__40719__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__40719__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___40737 = cljs.core.seq.call(null,items);
if(temp__4657__auto___40737){
var items_40738__$1 = temp__4657__auto___40737;
var vec__40721_40739 = items_40738__$1;
var seq__40722_40740 = cljs.core.seq.call(null,vec__40721_40739);
var first__40723_40741 = cljs.core.first.call(null,seq__40722_40740);
var seq__40722_40742__$1 = cljs.core.next.call(null,seq__40722_40740);
var vec__40724_40743 = first__40723_40741;
var k_40744 = cljs.core.nth.call(null,vec__40724_40743,(0),null);
var v_40745 = cljs.core.nth.call(null,vec__40724_40743,(1),null);
var r_40746 = seq__40722_40742__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_40744),"\": ",v_40745);

var seq__40727_40747 = cljs.core.seq.call(null,r_40746);
var chunk__40728_40748 = null;
var count__40729_40749 = (0);
var i__40730_40750 = (0);
while(true){
if((i__40730_40750 < count__40729_40749)){
var vec__40731_40751 = cljs.core._nth.call(null,chunk__40728_40748,i__40730_40750);
var k_40752__$1 = cljs.core.nth.call(null,vec__40731_40751,(0),null);
var v_40753__$1 = cljs.core.nth.call(null,vec__40731_40751,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_40752__$1),"\": ",v_40753__$1);

var G__40754 = seq__40727_40747;
var G__40755 = chunk__40728_40748;
var G__40756 = count__40729_40749;
var G__40757 = (i__40730_40750 + (1));
seq__40727_40747 = G__40754;
chunk__40728_40748 = G__40755;
count__40729_40749 = G__40756;
i__40730_40750 = G__40757;
continue;
} else {
var temp__4657__auto___40758__$1 = cljs.core.seq.call(null,seq__40727_40747);
if(temp__4657__auto___40758__$1){
var seq__40727_40759__$1 = temp__4657__auto___40758__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40727_40759__$1)){
var c__28775__auto___40760 = cljs.core.chunk_first.call(null,seq__40727_40759__$1);
var G__40761 = cljs.core.chunk_rest.call(null,seq__40727_40759__$1);
var G__40762 = c__28775__auto___40760;
var G__40763 = cljs.core.count.call(null,c__28775__auto___40760);
var G__40764 = (0);
seq__40727_40747 = G__40761;
chunk__40728_40748 = G__40762;
count__40729_40749 = G__40763;
i__40730_40750 = G__40764;
continue;
} else {
var vec__40734_40765 = cljs.core.first.call(null,seq__40727_40759__$1);
var k_40766__$1 = cljs.core.nth.call(null,vec__40734_40765,(0),null);
var v_40767__$1 = cljs.core.nth.call(null,vec__40734_40765,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_40766__$1),"\": ",v_40767__$1);

var G__40768 = cljs.core.next.call(null,seq__40727_40759__$1);
var G__40769 = null;
var G__40770 = (0);
var G__40771 = (0);
seq__40727_40747 = G__40768;
chunk__40728_40748 = G__40769;
count__40729_40749 = G__40770;
i__40730_40750 = G__40771;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__40772){
var map__40773 = p__40772;
var map__40773__$1 = ((((!((map__40773 == null)))?((((map__40773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40773):map__40773);
var items = cljs.core.get.call(null,map__40773__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__40773__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__40773__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__40773__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__40775){
var map__40776 = p__40775;
var map__40776__$1 = ((((!((map__40776 == null)))?((((map__40776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40776):map__40776);
var form = cljs.core.get.call(null,map__40776__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__40776__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__40778){
var map__40779 = p__40778;
var map__40779__$1 = ((((!((map__40779 == null)))?((((map__40779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40779):map__40779);
var op = cljs.core.get.call(null,map__40779__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__40779__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__40779__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__27936__auto__ = (function (){var and__27924__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__27924__auto__){
var and__27924__auto____$1 = form;
if(cljs.core.truth_(and__27924__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__27924__auto____$1;
}
} else {
return and__27924__auto__;
}
})();
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
var and__27924__auto__ = !((const_expr == null));
if(and__27924__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__27924__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__40781){
var map__40782 = p__40781;
var map__40782__$1 = ((((!((map__40782 == null)))?((((map__40782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40782):map__40782);
var op = cljs.core.get.call(null,map__40782__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__40782__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__40782__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__27936__auto__ = (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
if(or__27936__auto__){
return or__27936__auto__;
} else {
var and__27924__auto__ = !((const_expr == null));
if(and__27924__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__27924__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__27936__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__40784){
var map__40785 = p__40784;
var map__40785__$1 = ((((!((map__40785 == null)))?((((map__40785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40785):map__40785);
var test = cljs.core.get.call(null,map__40785__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__40785__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__40785__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__40785__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__40785__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__27936__auto__ = unchecked;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__40787){
var map__40788 = p__40787;
var map__40788__$1 = ((((!((map__40788 == null)))?((((map__40788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40788):map__40788);
var v = cljs.core.get.call(null,map__40788__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__40788__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__40788__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__40788__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__40788__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__40790_40808 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__40791_40809 = null;
var count__40792_40810 = (0);
var i__40793_40811 = (0);
while(true){
if((i__40793_40811 < count__40792_40810)){
var vec__40794_40812 = cljs.core._nth.call(null,chunk__40791_40809,i__40793_40811);
var ts_40813 = cljs.core.nth.call(null,vec__40794_40812,(0),null);
var then_40814 = cljs.core.nth.call(null,vec__40794_40812,(1),null);
var seq__40797_40815 = cljs.core.seq.call(null,ts_40813);
var chunk__40798_40816 = null;
var count__40799_40817 = (0);
var i__40800_40818 = (0);
while(true){
if((i__40800_40818 < count__40799_40817)){
var test_40819 = cljs.core._nth.call(null,chunk__40798_40816,i__40800_40818);
cljs.compiler.emitln.call(null,"case ",test_40819,":");

var G__40820 = seq__40797_40815;
var G__40821 = chunk__40798_40816;
var G__40822 = count__40799_40817;
var G__40823 = (i__40800_40818 + (1));
seq__40797_40815 = G__40820;
chunk__40798_40816 = G__40821;
count__40799_40817 = G__40822;
i__40800_40818 = G__40823;
continue;
} else {
var temp__4657__auto___40824 = cljs.core.seq.call(null,seq__40797_40815);
if(temp__4657__auto___40824){
var seq__40797_40825__$1 = temp__4657__auto___40824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40797_40825__$1)){
var c__28775__auto___40826 = cljs.core.chunk_first.call(null,seq__40797_40825__$1);
var G__40827 = cljs.core.chunk_rest.call(null,seq__40797_40825__$1);
var G__40828 = c__28775__auto___40826;
var G__40829 = cljs.core.count.call(null,c__28775__auto___40826);
var G__40830 = (0);
seq__40797_40815 = G__40827;
chunk__40798_40816 = G__40828;
count__40799_40817 = G__40829;
i__40800_40818 = G__40830;
continue;
} else {
var test_40831 = cljs.core.first.call(null,seq__40797_40825__$1);
cljs.compiler.emitln.call(null,"case ",test_40831,":");

var G__40832 = cljs.core.next.call(null,seq__40797_40825__$1);
var G__40833 = null;
var G__40834 = (0);
var G__40835 = (0);
seq__40797_40815 = G__40832;
chunk__40798_40816 = G__40833;
count__40799_40817 = G__40834;
i__40800_40818 = G__40835;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_40814);
} else {
cljs.compiler.emitln.call(null,then_40814);
}

cljs.compiler.emitln.call(null,"break;");

var G__40836 = seq__40790_40808;
var G__40837 = chunk__40791_40809;
var G__40838 = count__40792_40810;
var G__40839 = (i__40793_40811 + (1));
seq__40790_40808 = G__40836;
chunk__40791_40809 = G__40837;
count__40792_40810 = G__40838;
i__40793_40811 = G__40839;
continue;
} else {
var temp__4657__auto___40840 = cljs.core.seq.call(null,seq__40790_40808);
if(temp__4657__auto___40840){
var seq__40790_40841__$1 = temp__4657__auto___40840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40790_40841__$1)){
var c__28775__auto___40842 = cljs.core.chunk_first.call(null,seq__40790_40841__$1);
var G__40843 = cljs.core.chunk_rest.call(null,seq__40790_40841__$1);
var G__40844 = c__28775__auto___40842;
var G__40845 = cljs.core.count.call(null,c__28775__auto___40842);
var G__40846 = (0);
seq__40790_40808 = G__40843;
chunk__40791_40809 = G__40844;
count__40792_40810 = G__40845;
i__40793_40811 = G__40846;
continue;
} else {
var vec__40801_40847 = cljs.core.first.call(null,seq__40790_40841__$1);
var ts_40848 = cljs.core.nth.call(null,vec__40801_40847,(0),null);
var then_40849 = cljs.core.nth.call(null,vec__40801_40847,(1),null);
var seq__40804_40850 = cljs.core.seq.call(null,ts_40848);
var chunk__40805_40851 = null;
var count__40806_40852 = (0);
var i__40807_40853 = (0);
while(true){
if((i__40807_40853 < count__40806_40852)){
var test_40854 = cljs.core._nth.call(null,chunk__40805_40851,i__40807_40853);
cljs.compiler.emitln.call(null,"case ",test_40854,":");

var G__40855 = seq__40804_40850;
var G__40856 = chunk__40805_40851;
var G__40857 = count__40806_40852;
var G__40858 = (i__40807_40853 + (1));
seq__40804_40850 = G__40855;
chunk__40805_40851 = G__40856;
count__40806_40852 = G__40857;
i__40807_40853 = G__40858;
continue;
} else {
var temp__4657__auto___40859__$1 = cljs.core.seq.call(null,seq__40804_40850);
if(temp__4657__auto___40859__$1){
var seq__40804_40860__$1 = temp__4657__auto___40859__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40804_40860__$1)){
var c__28775__auto___40861 = cljs.core.chunk_first.call(null,seq__40804_40860__$1);
var G__40862 = cljs.core.chunk_rest.call(null,seq__40804_40860__$1);
var G__40863 = c__28775__auto___40861;
var G__40864 = cljs.core.count.call(null,c__28775__auto___40861);
var G__40865 = (0);
seq__40804_40850 = G__40862;
chunk__40805_40851 = G__40863;
count__40806_40852 = G__40864;
i__40807_40853 = G__40865;
continue;
} else {
var test_40866 = cljs.core.first.call(null,seq__40804_40860__$1);
cljs.compiler.emitln.call(null,"case ",test_40866,":");

var G__40867 = cljs.core.next.call(null,seq__40804_40860__$1);
var G__40868 = null;
var G__40869 = (0);
var G__40870 = (0);
seq__40804_40850 = G__40867;
chunk__40805_40851 = G__40868;
count__40806_40852 = G__40869;
i__40807_40853 = G__40870;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_40849);
} else {
cljs.compiler.emitln.call(null,then_40849);
}

cljs.compiler.emitln.call(null,"break;");

var G__40871 = cljs.core.next.call(null,seq__40790_40841__$1);
var G__40872 = null;
var G__40873 = (0);
var G__40874 = (0);
seq__40790_40808 = G__40871;
chunk__40791_40809 = G__40872;
count__40792_40810 = G__40873;
i__40793_40811 = G__40874;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__40875){
var map__40876 = p__40875;
var map__40876__$1 = ((((!((map__40876 == null)))?((((map__40876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40876):map__40876);
var throw$ = cljs.core.get.call(null,map__40876__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__40876__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__40879 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__40879,(0),null);
var rstr = cljs.core.nth.call(null,vec__40879,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__40879,fstr,rstr,ret_t,axstr){
return (function (p1__40878_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__40878_SHARP_);
});})(idx,vec__40879,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__40882 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40882),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__40882;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__40883_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__40883_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__40884 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__40885 = cljs.core.seq.call(null,vec__40884);
var first__40886 = cljs.core.first.call(null,seq__40885);
var seq__40885__$1 = cljs.core.next.call(null,seq__40885);
var p = first__40886;
var first__40886__$1 = cljs.core.first.call(null,seq__40885__$1);
var seq__40885__$2 = cljs.core.next.call(null,seq__40885__$1);
var ts = first__40886__$1;
var first__40886__$2 = cljs.core.first.call(null,seq__40885__$2);
var seq__40885__$3 = cljs.core.next.call(null,seq__40885__$2);
var n = first__40886__$2;
var xs = seq__40885__$3;
if(cljs.core.truth_((function (){var and__27924__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__27924__auto__){
var and__27924__auto____$1 = ts;
if(cljs.core.truth_(and__27924__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__27924__auto____$1;
}
} else {
return and__27924__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__40887 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__40888 = cljs.core.seq.call(null,vec__40887);
var first__40889 = cljs.core.first.call(null,seq__40888);
var seq__40888__$1 = cljs.core.next.call(null,seq__40888);
var p = first__40889;
var first__40889__$1 = cljs.core.first.call(null,seq__40888__$1);
var seq__40888__$2 = cljs.core.next.call(null,seq__40888__$1);
var ts = first__40889__$1;
var xs = seq__40888__$2;
if(cljs.core.truth_((function (){var and__27924__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__27924__auto__){
var and__27924__auto____$1 = ts;
if(cljs.core.truth_(and__27924__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__27924__auto____$1;
}
} else {
return and__27924__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__40892 = arguments.length;
switch (G__40892) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__40900 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__40890_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__40890_SHARP_);
} else {
return p1__40890_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__40901 = cljs.core.seq.call(null,vec__40900);
var first__40902 = cljs.core.first.call(null,seq__40901);
var seq__40901__$1 = cljs.core.next.call(null,seq__40901);
var x = first__40902;
var ys = seq__40901__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__40903 = cljs.core.seq.call(null,ys);
var chunk__40904 = null;
var count__40905 = (0);
var i__40906 = (0);
while(true){
if((i__40906 < count__40905)){
var next_line = cljs.core._nth.call(null,chunk__40904,i__40906);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__40912 = seq__40903;
var G__40913 = chunk__40904;
var G__40914 = count__40905;
var G__40915 = (i__40906 + (1));
seq__40903 = G__40912;
chunk__40904 = G__40913;
count__40905 = G__40914;
i__40906 = G__40915;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40903);
if(temp__4657__auto__){
var seq__40903__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40903__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__40903__$1);
var G__40916 = cljs.core.chunk_rest.call(null,seq__40903__$1);
var G__40917 = c__28775__auto__;
var G__40918 = cljs.core.count.call(null,c__28775__auto__);
var G__40919 = (0);
seq__40903 = G__40916;
chunk__40904 = G__40917;
count__40905 = G__40918;
i__40906 = G__40919;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__40903__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__40920 = cljs.core.next.call(null,seq__40903__$1);
var G__40921 = null;
var G__40922 = (0);
var G__40923 = (0);
seq__40903 = G__40920;
chunk__40904 = G__40921;
count__40905 = G__40922;
i__40906 = G__40923;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__40907_40924 = cljs.core.seq.call(null,docs__$2);
var chunk__40908_40925 = null;
var count__40909_40926 = (0);
var i__40910_40927 = (0);
while(true){
if((i__40910_40927 < count__40909_40926)){
var e_40928 = cljs.core._nth.call(null,chunk__40908_40925,i__40910_40927);
if(cljs.core.truth_(e_40928)){
print_comment_lines.call(null,e_40928);
} else {
}

var G__40929 = seq__40907_40924;
var G__40930 = chunk__40908_40925;
var G__40931 = count__40909_40926;
var G__40932 = (i__40910_40927 + (1));
seq__40907_40924 = G__40929;
chunk__40908_40925 = G__40930;
count__40909_40926 = G__40931;
i__40910_40927 = G__40932;
continue;
} else {
var temp__4657__auto___40933 = cljs.core.seq.call(null,seq__40907_40924);
if(temp__4657__auto___40933){
var seq__40907_40934__$1 = temp__4657__auto___40933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40907_40934__$1)){
var c__28775__auto___40935 = cljs.core.chunk_first.call(null,seq__40907_40934__$1);
var G__40936 = cljs.core.chunk_rest.call(null,seq__40907_40934__$1);
var G__40937 = c__28775__auto___40935;
var G__40938 = cljs.core.count.call(null,c__28775__auto___40935);
var G__40939 = (0);
seq__40907_40924 = G__40936;
chunk__40908_40925 = G__40937;
count__40909_40926 = G__40938;
i__40910_40927 = G__40939;
continue;
} else {
var e_40940 = cljs.core.first.call(null,seq__40907_40934__$1);
if(cljs.core.truth_(e_40940)){
print_comment_lines.call(null,e_40940);
} else {
}

var G__40941 = cljs.core.next.call(null,seq__40907_40934__$1);
var G__40942 = null;
var G__40943 = (0);
var G__40944 = (0);
seq__40907_40924 = G__40941;
chunk__40908_40925 = G__40942;
count__40909_40926 = G__40943;
i__40910_40927 = G__40944;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__27924__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__40946_SHARP_){
return goog.string.startsWith(p1__40946_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__27924__auto__)){
var and__27924__auto____$1 = opts;
if(cljs.core.truth_(and__27924__auto____$1)){
var and__27924__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__27924__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__27924__auto____$2;
}
} else {
return and__27924__auto____$1;
}
} else {
return and__27924__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__40947){
var map__40948 = p__40947;
var map__40948__$1 = ((((!((map__40948 == null)))?((((map__40948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40948):map__40948);
var name = cljs.core.get.call(null,map__40948__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__40948__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__40948__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__40948__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__40948__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__40948__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__40948__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__40948__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__40948__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__27936__auto__ = init;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__27924__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__27924__auto__){
return test;
} else {
return and__27924__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__40950){
var map__40951 = p__40950;
var map__40951__$1 = ((((!((map__40951 == null)))?((((map__40951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40951):map__40951);
var name = cljs.core.get.call(null,map__40951__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__40951__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__40951__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__40953_40971 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__40954_40972 = null;
var count__40955_40973 = (0);
var i__40956_40974 = (0);
while(true){
if((i__40956_40974 < count__40955_40973)){
var vec__40957_40975 = cljs.core._nth.call(null,chunk__40954_40972,i__40956_40974);
var i_40976 = cljs.core.nth.call(null,vec__40957_40975,(0),null);
var param_40977 = cljs.core.nth.call(null,vec__40957_40975,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_40977);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__40978 = seq__40953_40971;
var G__40979 = chunk__40954_40972;
var G__40980 = count__40955_40973;
var G__40981 = (i__40956_40974 + (1));
seq__40953_40971 = G__40978;
chunk__40954_40972 = G__40979;
count__40955_40973 = G__40980;
i__40956_40974 = G__40981;
continue;
} else {
var temp__4657__auto___40982 = cljs.core.seq.call(null,seq__40953_40971);
if(temp__4657__auto___40982){
var seq__40953_40983__$1 = temp__4657__auto___40982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40953_40983__$1)){
var c__28775__auto___40984 = cljs.core.chunk_first.call(null,seq__40953_40983__$1);
var G__40985 = cljs.core.chunk_rest.call(null,seq__40953_40983__$1);
var G__40986 = c__28775__auto___40984;
var G__40987 = cljs.core.count.call(null,c__28775__auto___40984);
var G__40988 = (0);
seq__40953_40971 = G__40985;
chunk__40954_40972 = G__40986;
count__40955_40973 = G__40987;
i__40956_40974 = G__40988;
continue;
} else {
var vec__40960_40989 = cljs.core.first.call(null,seq__40953_40983__$1);
var i_40990 = cljs.core.nth.call(null,vec__40960_40989,(0),null);
var param_40991 = cljs.core.nth.call(null,vec__40960_40989,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_40991);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__40992 = cljs.core.next.call(null,seq__40953_40983__$1);
var G__40993 = null;
var G__40994 = (0);
var G__40995 = (0);
seq__40953_40971 = G__40992;
chunk__40954_40972 = G__40993;
count__40955_40973 = G__40994;
i__40956_40974 = G__40995;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__40963_40996 = cljs.core.seq.call(null,params);
var chunk__40964_40997 = null;
var count__40965_40998 = (0);
var i__40966_40999 = (0);
while(true){
if((i__40966_40999 < count__40965_40998)){
var param_41000 = cljs.core._nth.call(null,chunk__40964_40997,i__40966_40999);
cljs.compiler.emit.call(null,param_41000);

if(cljs.core._EQ_.call(null,param_41000,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__41001 = seq__40963_40996;
var G__41002 = chunk__40964_40997;
var G__41003 = count__40965_40998;
var G__41004 = (i__40966_40999 + (1));
seq__40963_40996 = G__41001;
chunk__40964_40997 = G__41002;
count__40965_40998 = G__41003;
i__40966_40999 = G__41004;
continue;
} else {
var temp__4657__auto___41005 = cljs.core.seq.call(null,seq__40963_40996);
if(temp__4657__auto___41005){
var seq__40963_41006__$1 = temp__4657__auto___41005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40963_41006__$1)){
var c__28775__auto___41007 = cljs.core.chunk_first.call(null,seq__40963_41006__$1);
var G__41008 = cljs.core.chunk_rest.call(null,seq__40963_41006__$1);
var G__41009 = c__28775__auto___41007;
var G__41010 = cljs.core.count.call(null,c__28775__auto___41007);
var G__41011 = (0);
seq__40963_40996 = G__41008;
chunk__40964_40997 = G__41009;
count__40965_40998 = G__41010;
i__40966_40999 = G__41011;
continue;
} else {
var param_41012 = cljs.core.first.call(null,seq__40963_41006__$1);
cljs.compiler.emit.call(null,param_41012);

if(cljs.core._EQ_.call(null,param_41012,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__41013 = cljs.core.next.call(null,seq__40963_41006__$1);
var G__41014 = null;
var G__41015 = (0);
var G__41016 = (0);
seq__40963_40996 = G__41013;
chunk__40964_40997 = G__41014;
count__40965_40998 = G__41015;
i__40966_40999 = G__41016;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__40967_41017 = cljs.core.seq.call(null,params);
var chunk__40968_41018 = null;
var count__40969_41019 = (0);
var i__40970_41020 = (0);
while(true){
if((i__40970_41020 < count__40969_41019)){
var param_41021 = cljs.core._nth.call(null,chunk__40968_41018,i__40970_41020);
cljs.compiler.emit.call(null,param_41021);

if(cljs.core._EQ_.call(null,param_41021,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__41022 = seq__40967_41017;
var G__41023 = chunk__40968_41018;
var G__41024 = count__40969_41019;
var G__41025 = (i__40970_41020 + (1));
seq__40967_41017 = G__41022;
chunk__40968_41018 = G__41023;
count__40969_41019 = G__41024;
i__40970_41020 = G__41025;
continue;
} else {
var temp__4657__auto___41026 = cljs.core.seq.call(null,seq__40967_41017);
if(temp__4657__auto___41026){
var seq__40967_41027__$1 = temp__4657__auto___41026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40967_41027__$1)){
var c__28775__auto___41028 = cljs.core.chunk_first.call(null,seq__40967_41027__$1);
var G__41029 = cljs.core.chunk_rest.call(null,seq__40967_41027__$1);
var G__41030 = c__28775__auto___41028;
var G__41031 = cljs.core.count.call(null,c__28775__auto___41028);
var G__41032 = (0);
seq__40967_41017 = G__41029;
chunk__40968_41018 = G__41030;
count__40969_41019 = G__41031;
i__40970_41020 = G__41032;
continue;
} else {
var param_41033 = cljs.core.first.call(null,seq__40967_41027__$1);
cljs.compiler.emit.call(null,param_41033);

if(cljs.core._EQ_.call(null,param_41033,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__41034 = cljs.core.next.call(null,seq__40967_41027__$1);
var G__41035 = null;
var G__41036 = (0);
var G__41037 = (0);
seq__40967_41017 = G__41034;
chunk__40968_41018 = G__41035;
count__40969_41019 = G__41036;
i__40970_41020 = G__41037;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__41038 = cljs.core.seq.call(null,params);
var chunk__41039 = null;
var count__41040 = (0);
var i__41041 = (0);
while(true){
if((i__41041 < count__41040)){
var param = cljs.core._nth.call(null,chunk__41039,i__41041);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__41042 = seq__41038;
var G__41043 = chunk__41039;
var G__41044 = count__41040;
var G__41045 = (i__41041 + (1));
seq__41038 = G__41042;
chunk__41039 = G__41043;
count__41040 = G__41044;
i__41041 = G__41045;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41038);
if(temp__4657__auto__){
var seq__41038__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41038__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__41038__$1);
var G__41046 = cljs.core.chunk_rest.call(null,seq__41038__$1);
var G__41047 = c__28775__auto__;
var G__41048 = cljs.core.count.call(null,c__28775__auto__);
var G__41049 = (0);
seq__41038 = G__41046;
chunk__41039 = G__41047;
count__41040 = G__41048;
i__41041 = G__41049;
continue;
} else {
var param = cljs.core.first.call(null,seq__41038__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__41050 = cljs.core.next.call(null,seq__41038__$1);
var G__41051 = null;
var G__41052 = (0);
var G__41053 = (0);
seq__41038 = G__41050;
chunk__41039 = G__41051;
count__41040 = G__41052;
i__41041 = G__41053;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__41054){
var map__41055 = p__41054;
var map__41055__$1 = ((((!((map__41055 == null)))?((((map__41055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41055):map__41055);
var type = cljs.core.get.call(null,map__41055__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__41055__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__41055__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__41055__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__41055__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__41055__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__41055__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__41055__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__41057){
var map__41058 = p__41057;
var map__41058__$1 = ((((!((map__41058 == null)))?((((map__41058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41058):map__41058);
var f = map__41058__$1;
var type = cljs.core.get.call(null,map__41058__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__41058__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__41058__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__41058__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__41058__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__41058__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__41058__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__41058__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_41068__$1 = (function (){var or__27936__auto__ = name;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_41069 = cljs.compiler.munge.call(null,name_41068__$1);
var delegate_name_41070 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_41069),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_41070," = function (");

var seq__41060_41071 = cljs.core.seq.call(null,params);
var chunk__41061_41072 = null;
var count__41062_41073 = (0);
var i__41063_41074 = (0);
while(true){
if((i__41063_41074 < count__41062_41073)){
var param_41075 = cljs.core._nth.call(null,chunk__41061_41072,i__41063_41074);
cljs.compiler.emit.call(null,param_41075);

if(cljs.core._EQ_.call(null,param_41075,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__41076 = seq__41060_41071;
var G__41077 = chunk__41061_41072;
var G__41078 = count__41062_41073;
var G__41079 = (i__41063_41074 + (1));
seq__41060_41071 = G__41076;
chunk__41061_41072 = G__41077;
count__41062_41073 = G__41078;
i__41063_41074 = G__41079;
continue;
} else {
var temp__4657__auto___41080 = cljs.core.seq.call(null,seq__41060_41071);
if(temp__4657__auto___41080){
var seq__41060_41081__$1 = temp__4657__auto___41080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41060_41081__$1)){
var c__28775__auto___41082 = cljs.core.chunk_first.call(null,seq__41060_41081__$1);
var G__41083 = cljs.core.chunk_rest.call(null,seq__41060_41081__$1);
var G__41084 = c__28775__auto___41082;
var G__41085 = cljs.core.count.call(null,c__28775__auto___41082);
var G__41086 = (0);
seq__41060_41071 = G__41083;
chunk__41061_41072 = G__41084;
count__41062_41073 = G__41085;
i__41063_41074 = G__41086;
continue;
} else {
var param_41087 = cljs.core.first.call(null,seq__41060_41081__$1);
cljs.compiler.emit.call(null,param_41087);

if(cljs.core._EQ_.call(null,param_41087,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__41088 = cljs.core.next.call(null,seq__41060_41081__$1);
var G__41089 = null;
var G__41090 = (0);
var G__41091 = (0);
seq__41060_41071 = G__41088;
chunk__41061_41072 = G__41089;
count__41062_41073 = G__41090;
i__41063_41074 = G__41091;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_41069," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_41092 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_41092,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_41070,".call(this,");

var seq__41064_41093 = cljs.core.seq.call(null,params);
var chunk__41065_41094 = null;
var count__41066_41095 = (0);
var i__41067_41096 = (0);
while(true){
if((i__41067_41096 < count__41066_41095)){
var param_41097 = cljs.core._nth.call(null,chunk__41065_41094,i__41067_41096);
cljs.compiler.emit.call(null,param_41097);

if(cljs.core._EQ_.call(null,param_41097,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__41098 = seq__41064_41093;
var G__41099 = chunk__41065_41094;
var G__41100 = count__41066_41095;
var G__41101 = (i__41067_41096 + (1));
seq__41064_41093 = G__41098;
chunk__41065_41094 = G__41099;
count__41066_41095 = G__41100;
i__41067_41096 = G__41101;
continue;
} else {
var temp__4657__auto___41102 = cljs.core.seq.call(null,seq__41064_41093);
if(temp__4657__auto___41102){
var seq__41064_41103__$1 = temp__4657__auto___41102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41064_41103__$1)){
var c__28775__auto___41104 = cljs.core.chunk_first.call(null,seq__41064_41103__$1);
var G__41105 = cljs.core.chunk_rest.call(null,seq__41064_41103__$1);
var G__41106 = c__28775__auto___41104;
var G__41107 = cljs.core.count.call(null,c__28775__auto___41104);
var G__41108 = (0);
seq__41064_41093 = G__41105;
chunk__41065_41094 = G__41106;
count__41066_41095 = G__41107;
i__41067_41096 = G__41108;
continue;
} else {
var param_41109 = cljs.core.first.call(null,seq__41064_41103__$1);
cljs.compiler.emit.call(null,param_41109);

if(cljs.core._EQ_.call(null,param_41109,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__41110 = cljs.core.next.call(null,seq__41064_41103__$1);
var G__41111 = null;
var G__41112 = (0);
var G__41113 = (0);
seq__41064_41093 = G__41110;
chunk__41065_41094 = G__41111;
count__41066_41095 = G__41112;
i__41067_41096 = G__41113;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_41069,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_41069,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_41068__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_41069,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_41070,";");

cljs.compiler.emitln.call(null,"return ",mname_41069,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__41117){
var map__41118 = p__41117;
var map__41118__$1 = ((((!((map__41118 == null)))?((((map__41118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41118):map__41118);
var name = cljs.core.get.call(null,map__41118__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__41118__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__41118__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__41118__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__41118__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__41118__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__41118__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__41118,map__41118__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__41114_SHARP_){
var and__27924__auto__ = p1__41114_SHARP_;
if(cljs.core.truth_(and__27924__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__41114_SHARP_));
} else {
return and__27924__auto__;
}
});})(map__41118,map__41118__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_41153__$1 = (function (){var or__27936__auto__ = name;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_41154 = cljs.compiler.munge.call(null,name_41153__$1);
var maxparams_41155 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_41156 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_41153__$1,mname_41154,maxparams_41155,loop_locals,map__41118,map__41118__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_41154),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_41153__$1,mname_41154,maxparams_41155,loop_locals,map__41118,map__41118__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_41157 = cljs.core.sort_by.call(null,((function (name_41153__$1,mname_41154,maxparams_41155,mmap_41156,loop_locals,map__41118,map__41118__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__41115_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__41115_SHARP_)));
});})(name_41153__$1,mname_41154,maxparams_41155,mmap_41156,loop_locals,map__41118,map__41118__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_41156));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_41154," = null;");

var seq__41120_41158 = cljs.core.seq.call(null,ms_41157);
var chunk__41121_41159 = null;
var count__41122_41160 = (0);
var i__41123_41161 = (0);
while(true){
if((i__41123_41161 < count__41122_41160)){
var vec__41124_41162 = cljs.core._nth.call(null,chunk__41121_41159,i__41123_41161);
var n_41163 = cljs.core.nth.call(null,vec__41124_41162,(0),null);
var meth_41164 = cljs.core.nth.call(null,vec__41124_41162,(1),null);
cljs.compiler.emits.call(null,"var ",n_41163," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_41164))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_41164);
} else {
cljs.compiler.emit_fn_method.call(null,meth_41164);
}

cljs.compiler.emitln.call(null,";");

var G__41165 = seq__41120_41158;
var G__41166 = chunk__41121_41159;
var G__41167 = count__41122_41160;
var G__41168 = (i__41123_41161 + (1));
seq__41120_41158 = G__41165;
chunk__41121_41159 = G__41166;
count__41122_41160 = G__41167;
i__41123_41161 = G__41168;
continue;
} else {
var temp__4657__auto___41169 = cljs.core.seq.call(null,seq__41120_41158);
if(temp__4657__auto___41169){
var seq__41120_41170__$1 = temp__4657__auto___41169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41120_41170__$1)){
var c__28775__auto___41171 = cljs.core.chunk_first.call(null,seq__41120_41170__$1);
var G__41172 = cljs.core.chunk_rest.call(null,seq__41120_41170__$1);
var G__41173 = c__28775__auto___41171;
var G__41174 = cljs.core.count.call(null,c__28775__auto___41171);
var G__41175 = (0);
seq__41120_41158 = G__41172;
chunk__41121_41159 = G__41173;
count__41122_41160 = G__41174;
i__41123_41161 = G__41175;
continue;
} else {
var vec__41127_41176 = cljs.core.first.call(null,seq__41120_41170__$1);
var n_41177 = cljs.core.nth.call(null,vec__41127_41176,(0),null);
var meth_41178 = cljs.core.nth.call(null,vec__41127_41176,(1),null);
cljs.compiler.emits.call(null,"var ",n_41177," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_41178))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_41178);
} else {
cljs.compiler.emit_fn_method.call(null,meth_41178);
}

cljs.compiler.emitln.call(null,";");

var G__41179 = cljs.core.next.call(null,seq__41120_41170__$1);
var G__41180 = null;
var G__41181 = (0);
var G__41182 = (0);
seq__41120_41158 = G__41179;
chunk__41121_41159 = G__41180;
count__41122_41160 = G__41181;
i__41123_41161 = G__41182;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_41154," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_41155),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_41155)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_41155));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__41130_41183 = cljs.core.seq.call(null,ms_41157);
var chunk__41131_41184 = null;
var count__41132_41185 = (0);
var i__41133_41186 = (0);
while(true){
if((i__41133_41186 < count__41132_41185)){
var vec__41134_41187 = cljs.core._nth.call(null,chunk__41131_41184,i__41133_41186);
var n_41188 = cljs.core.nth.call(null,vec__41134_41187,(0),null);
var meth_41189 = cljs.core.nth.call(null,vec__41134_41187,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_41189))){
cljs.compiler.emitln.call(null,"default:");

var restarg_41190 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_41190," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_41191 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_41190," = new cljs.core.IndexedSeq(",a_41191,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_41188,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_41155)),(((cljs.core.count.call(null,maxparams_41155) > (1)))?", ":null),restarg_41190,");");
} else {
var pcnt_41192 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_41189));
cljs.compiler.emitln.call(null,"case ",pcnt_41192,":");

cljs.compiler.emitln.call(null,"return ",n_41188,".call(this",(((pcnt_41192 === (0)))?null:cljs.core._conj.call(null,(function (){var x__28798__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_41192,maxparams_41155));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),",")),");");
}

var G__41193 = seq__41130_41183;
var G__41194 = chunk__41131_41184;
var G__41195 = count__41132_41185;
var G__41196 = (i__41133_41186 + (1));
seq__41130_41183 = G__41193;
chunk__41131_41184 = G__41194;
count__41132_41185 = G__41195;
i__41133_41186 = G__41196;
continue;
} else {
var temp__4657__auto___41197 = cljs.core.seq.call(null,seq__41130_41183);
if(temp__4657__auto___41197){
var seq__41130_41198__$1 = temp__4657__auto___41197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41130_41198__$1)){
var c__28775__auto___41199 = cljs.core.chunk_first.call(null,seq__41130_41198__$1);
var G__41200 = cljs.core.chunk_rest.call(null,seq__41130_41198__$1);
var G__41201 = c__28775__auto___41199;
var G__41202 = cljs.core.count.call(null,c__28775__auto___41199);
var G__41203 = (0);
seq__41130_41183 = G__41200;
chunk__41131_41184 = G__41201;
count__41132_41185 = G__41202;
i__41133_41186 = G__41203;
continue;
} else {
var vec__41137_41204 = cljs.core.first.call(null,seq__41130_41198__$1);
var n_41205 = cljs.core.nth.call(null,vec__41137_41204,(0),null);
var meth_41206 = cljs.core.nth.call(null,vec__41137_41204,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_41206))){
cljs.compiler.emitln.call(null,"default:");

var restarg_41207 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_41207," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_41208 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_41207," = new cljs.core.IndexedSeq(",a_41208,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_41205,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_41155)),(((cljs.core.count.call(null,maxparams_41155) > (1)))?", ":null),restarg_41207,");");
} else {
var pcnt_41209 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_41206));
cljs.compiler.emitln.call(null,"case ",pcnt_41209,":");

cljs.compiler.emitln.call(null,"return ",n_41205,".call(this",(((pcnt_41209 === (0)))?null:cljs.core._conj.call(null,(function (){var x__28798__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_41209,maxparams_41155));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),",")),");");
}

var G__41210 = cljs.core.next.call(null,seq__41130_41198__$1);
var G__41211 = null;
var G__41212 = (0);
var G__41213 = (0);
seq__41130_41183 = G__41210;
chunk__41131_41184 = G__41211;
count__41132_41185 = G__41212;
i__41133_41186 = G__41213;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + (arguments.length - 1)));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_41154,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_41154,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_41153__$1,mname_41154,maxparams_41155,mmap_41156,ms_41157,loop_locals,map__41118,map__41118__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__41116_SHARP_){
var vec__41140 = p1__41116_SHARP_;
var n = cljs.core.nth.call(null,vec__41140,(0),null);
var m = cljs.core.nth.call(null,vec__41140,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_41153__$1,mname_41154,maxparams_41155,mmap_41156,ms_41157,loop_locals,map__41118,map__41118__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_41157),".cljs$lang$applyTo;");
} else {
}

var seq__41143_41214 = cljs.core.seq.call(null,ms_41157);
var chunk__41144_41215 = null;
var count__41145_41216 = (0);
var i__41146_41217 = (0);
while(true){
if((i__41146_41217 < count__41145_41216)){
var vec__41147_41218 = cljs.core._nth.call(null,chunk__41144_41215,i__41146_41217);
var n_41219 = cljs.core.nth.call(null,vec__41147_41218,(0),null);
var meth_41220 = cljs.core.nth.call(null,vec__41147_41218,(1),null);
var c_41221 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_41220));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_41220))){
cljs.compiler.emitln.call(null,mname_41154,".cljs$core$IFn$_invoke$arity$variadic = ",n_41219,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_41154,".cljs$core$IFn$_invoke$arity$",c_41221," = ",n_41219,";");
}

var G__41222 = seq__41143_41214;
var G__41223 = chunk__41144_41215;
var G__41224 = count__41145_41216;
var G__41225 = (i__41146_41217 + (1));
seq__41143_41214 = G__41222;
chunk__41144_41215 = G__41223;
count__41145_41216 = G__41224;
i__41146_41217 = G__41225;
continue;
} else {
var temp__4657__auto___41226 = cljs.core.seq.call(null,seq__41143_41214);
if(temp__4657__auto___41226){
var seq__41143_41227__$1 = temp__4657__auto___41226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41143_41227__$1)){
var c__28775__auto___41228 = cljs.core.chunk_first.call(null,seq__41143_41227__$1);
var G__41229 = cljs.core.chunk_rest.call(null,seq__41143_41227__$1);
var G__41230 = c__28775__auto___41228;
var G__41231 = cljs.core.count.call(null,c__28775__auto___41228);
var G__41232 = (0);
seq__41143_41214 = G__41229;
chunk__41144_41215 = G__41230;
count__41145_41216 = G__41231;
i__41146_41217 = G__41232;
continue;
} else {
var vec__41150_41233 = cljs.core.first.call(null,seq__41143_41227__$1);
var n_41234 = cljs.core.nth.call(null,vec__41150_41233,(0),null);
var meth_41235 = cljs.core.nth.call(null,vec__41150_41233,(1),null);
var c_41236 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_41235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_41235))){
cljs.compiler.emitln.call(null,mname_41154,".cljs$core$IFn$_invoke$arity$variadic = ",n_41234,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_41154,".cljs$core$IFn$_invoke$arity$",c_41236," = ",n_41234,";");
}

var G__41237 = cljs.core.next.call(null,seq__41143_41227__$1);
var G__41238 = null;
var G__41239 = (0);
var G__41240 = (0);
seq__41143_41214 = G__41237;
chunk__41144_41215 = G__41238;
count__41145_41216 = G__41239;
i__41146_41217 = G__41240;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_41154,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__41241){
var map__41242 = p__41241;
var map__41242__$1 = ((((!((map__41242 == null)))?((((map__41242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41242):map__41242);
var statements = cljs.core.get.call(null,map__41242__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__41242__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__41242__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__27924__auto__ = statements;
if(cljs.core.truth_(and__27924__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__27924__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__41244_41248 = cljs.core.seq.call(null,statements);
var chunk__41245_41249 = null;
var count__41246_41250 = (0);
var i__41247_41251 = (0);
while(true){
if((i__41247_41251 < count__41246_41250)){
var s_41252 = cljs.core._nth.call(null,chunk__41245_41249,i__41247_41251);
cljs.compiler.emitln.call(null,s_41252);

var G__41253 = seq__41244_41248;
var G__41254 = chunk__41245_41249;
var G__41255 = count__41246_41250;
var G__41256 = (i__41247_41251 + (1));
seq__41244_41248 = G__41253;
chunk__41245_41249 = G__41254;
count__41246_41250 = G__41255;
i__41247_41251 = G__41256;
continue;
} else {
var temp__4657__auto___41257 = cljs.core.seq.call(null,seq__41244_41248);
if(temp__4657__auto___41257){
var seq__41244_41258__$1 = temp__4657__auto___41257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41244_41258__$1)){
var c__28775__auto___41259 = cljs.core.chunk_first.call(null,seq__41244_41258__$1);
var G__41260 = cljs.core.chunk_rest.call(null,seq__41244_41258__$1);
var G__41261 = c__28775__auto___41259;
var G__41262 = cljs.core.count.call(null,c__28775__auto___41259);
var G__41263 = (0);
seq__41244_41248 = G__41260;
chunk__41245_41249 = G__41261;
count__41246_41250 = G__41262;
i__41247_41251 = G__41263;
continue;
} else {
var s_41264 = cljs.core.first.call(null,seq__41244_41258__$1);
cljs.compiler.emitln.call(null,s_41264);

var G__41265 = cljs.core.next.call(null,seq__41244_41258__$1);
var G__41266 = null;
var G__41267 = (0);
var G__41268 = (0);
seq__41244_41248 = G__41265;
chunk__41245_41249 = G__41266;
count__41246_41250 = G__41267;
i__41247_41251 = G__41268;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__27924__auto__ = statements;
if(cljs.core.truth_(and__27924__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__27924__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__41269){
var map__41270 = p__41269;
var map__41270__$1 = ((((!((map__41270 == null)))?((((map__41270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41270):map__41270);
var env = cljs.core.get.call(null,map__41270__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__41270__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__41270__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__41270__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__41270__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__27936__auto__ = name;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__41272,is_loop){
var map__41273 = p__41272;
var map__41273__$1 = ((((!((map__41273 == null)))?((((map__41273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41273):map__41273);
var bindings = cljs.core.get.call(null,map__41273__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__41273__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__41273__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_41275_41284 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_41275_41284,context,map__41273,map__41273__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_41275_41284,context,map__41273,map__41273__$1,bindings,expr,env))
,bindings):null));

try{var seq__41276_41285 = cljs.core.seq.call(null,bindings);
var chunk__41277_41286 = null;
var count__41278_41287 = (0);
var i__41279_41288 = (0);
while(true){
if((i__41279_41288 < count__41278_41287)){
var map__41280_41289 = cljs.core._nth.call(null,chunk__41277_41286,i__41279_41288);
var map__41280_41290__$1 = ((((!((map__41280_41289 == null)))?((((map__41280_41289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41280_41289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41280_41289):map__41280_41289);
var binding_41291 = map__41280_41290__$1;
var init_41292 = cljs.core.get.call(null,map__41280_41290__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_41291);

cljs.compiler.emitln.call(null," = ",init_41292,";");

var G__41293 = seq__41276_41285;
var G__41294 = chunk__41277_41286;
var G__41295 = count__41278_41287;
var G__41296 = (i__41279_41288 + (1));
seq__41276_41285 = G__41293;
chunk__41277_41286 = G__41294;
count__41278_41287 = G__41295;
i__41279_41288 = G__41296;
continue;
} else {
var temp__4657__auto___41297 = cljs.core.seq.call(null,seq__41276_41285);
if(temp__4657__auto___41297){
var seq__41276_41298__$1 = temp__4657__auto___41297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41276_41298__$1)){
var c__28775__auto___41299 = cljs.core.chunk_first.call(null,seq__41276_41298__$1);
var G__41300 = cljs.core.chunk_rest.call(null,seq__41276_41298__$1);
var G__41301 = c__28775__auto___41299;
var G__41302 = cljs.core.count.call(null,c__28775__auto___41299);
var G__41303 = (0);
seq__41276_41285 = G__41300;
chunk__41277_41286 = G__41301;
count__41278_41287 = G__41302;
i__41279_41288 = G__41303;
continue;
} else {
var map__41282_41304 = cljs.core.first.call(null,seq__41276_41298__$1);
var map__41282_41305__$1 = ((((!((map__41282_41304 == null)))?((((map__41282_41304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41282_41304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41282_41304):map__41282_41304);
var binding_41306 = map__41282_41305__$1;
var init_41307 = cljs.core.get.call(null,map__41282_41305__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_41306);

cljs.compiler.emitln.call(null," = ",init_41307,";");

var G__41308 = cljs.core.next.call(null,seq__41276_41298__$1);
var G__41309 = null;
var G__41310 = (0);
var G__41311 = (0);
seq__41276_41285 = G__41308;
chunk__41277_41286 = G__41309;
count__41278_41287 = G__41310;
i__41279_41288 = G__41311;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_41275_41284;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__41312){
var map__41313 = p__41312;
var map__41313__$1 = ((((!((map__41313 == null)))?((((map__41313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41313):map__41313);
var frame = cljs.core.get.call(null,map__41313__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__41313__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__41313__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__28881__auto___41315 = cljs.core.count.call(null,exprs);
var i_41316 = (0);
while(true){
if((i_41316 < n__28881__auto___41315)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_41316)," = ",exprs.call(null,i_41316),";");

var G__41317 = (i_41316 + (1));
i_41316 = G__41317;
continue;
} else {
}
break;
}

var n__28881__auto___41318 = cljs.core.count.call(null,exprs);
var i_41319 = (0);
while(true){
if((i_41319 < n__28881__auto___41318)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_41319))," = ",temps.call(null,i_41319),";");

var G__41320 = (i_41319 + (1));
i_41319 = G__41320;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__41321){
var map__41322 = p__41321;
var map__41322__$1 = ((((!((map__41322 == null)))?((((map__41322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41322.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41322):map__41322);
var bindings = cljs.core.get.call(null,map__41322__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__41322__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__41322__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__41324_41332 = cljs.core.seq.call(null,bindings);
var chunk__41325_41333 = null;
var count__41326_41334 = (0);
var i__41327_41335 = (0);
while(true){
if((i__41327_41335 < count__41326_41334)){
var map__41328_41336 = cljs.core._nth.call(null,chunk__41325_41333,i__41327_41335);
var map__41328_41337__$1 = ((((!((map__41328_41336 == null)))?((((map__41328_41336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41328_41336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41328_41336):map__41328_41336);
var binding_41338 = map__41328_41337__$1;
var init_41339 = cljs.core.get.call(null,map__41328_41337__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_41338)," = ",init_41339,";");

var G__41340 = seq__41324_41332;
var G__41341 = chunk__41325_41333;
var G__41342 = count__41326_41334;
var G__41343 = (i__41327_41335 + (1));
seq__41324_41332 = G__41340;
chunk__41325_41333 = G__41341;
count__41326_41334 = G__41342;
i__41327_41335 = G__41343;
continue;
} else {
var temp__4657__auto___41344 = cljs.core.seq.call(null,seq__41324_41332);
if(temp__4657__auto___41344){
var seq__41324_41345__$1 = temp__4657__auto___41344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41324_41345__$1)){
var c__28775__auto___41346 = cljs.core.chunk_first.call(null,seq__41324_41345__$1);
var G__41347 = cljs.core.chunk_rest.call(null,seq__41324_41345__$1);
var G__41348 = c__28775__auto___41346;
var G__41349 = cljs.core.count.call(null,c__28775__auto___41346);
var G__41350 = (0);
seq__41324_41332 = G__41347;
chunk__41325_41333 = G__41348;
count__41326_41334 = G__41349;
i__41327_41335 = G__41350;
continue;
} else {
var map__41330_41351 = cljs.core.first.call(null,seq__41324_41345__$1);
var map__41330_41352__$1 = ((((!((map__41330_41351 == null)))?((((map__41330_41351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41330_41351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41330_41351):map__41330_41351);
var binding_41353 = map__41330_41352__$1;
var init_41354 = cljs.core.get.call(null,map__41330_41352__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_41353)," = ",init_41354,";");

var G__41355 = cljs.core.next.call(null,seq__41324_41345__$1);
var G__41356 = null;
var G__41357 = (0);
var G__41358 = (0);
seq__41324_41332 = G__41355;
chunk__41325_41333 = G__41356;
count__41326_41334 = G__41357;
i__41327_41335 = G__41358;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__41361){
var map__41362 = p__41361;
var map__41362__$1 = ((((!((map__41362 == null)))?((((map__41362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41362):map__41362);
var expr = map__41362__$1;
var f = cljs.core.get.call(null,map__41362__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__41362__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__41362__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__27924__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__27924__auto__){
var and__27924__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__27924__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__27924__auto____$1;
}
} else {
return and__27924__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__27924__auto__ = protocol;
if(cljs.core.truth_(and__27924__auto__)){
var and__27924__auto____$1 = tag;
if(cljs.core.truth_(and__27924__auto____$1)){
var or__27936__auto__ = (function (){var and__27924__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__27924__auto____$2){
var and__27924__auto____$3 = protocol;
if(cljs.core.truth_(and__27924__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__27924__auto____$3;
}
} else {
return and__27924__auto____$2;
}
})();
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
var and__27924__auto____$2 = (function (){var or__27936__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__27936__auto____$1){
return or__27936__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__27924__auto____$2)){
var or__27936__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__27936__auto____$1){
return or__27936__auto____$1;
} else {
var and__27924__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__27924__auto____$3){
var and__27924__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__27924__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__27924__auto____$4;
}
} else {
return and__27924__auto____$3;
}
}
} else {
return and__27924__auto____$2;
}
}
} else {
return and__27924__auto____$1;
}
} else {
return and__27924__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__27936__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__27936__auto__){
return or__27936__auto__;
} else {
var or__27936__auto____$1 = (function (){var temp__4657__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__27936__auto____$1)){
return or__27936__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__41364 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__27924__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__27924__auto__)){
return (arity > mfa);
} else {
return and__27924__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__41362,map__41362__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__41362,map__41362__$1,expr,f,args,env){
return (function (p1__41359_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__41359_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__41362,map__41362__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__41362,map__41362__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__41362,map__41362__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__41362,map__41362__$1,expr,f,args,env){
return (function (p1__41360_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__41360_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__41362,map__41362__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__41362,map__41362__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__41364,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__41364,(1),null);
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_41367 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_41367,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_41368 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_41368,args)),(((mfa_41368 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_41368,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__27936__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
var or__27936__auto____$1 = js_QMARK_;
if(or__27936__auto____$1){
return or__27936__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797)))){
var fprop_41369 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_41369," ? ",f__$1,fprop_41369,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_41369," ? ",f__$1,fprop_41369,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__41370){
var map__41371 = p__41370;
var map__41371__$1 = ((((!((map__41371 == null)))?((((map__41371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41371):map__41371);
var ctor = cljs.core.get.call(null,map__41371__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__41371__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__41371__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__41373){
var map__41374 = p__41373;
var map__41374__$1 = ((((!((map__41374 == null)))?((((map__41374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41374):map__41374);
var target = cljs.core.get.call(null,map__41374__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__41374__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__41374__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__41376 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__41376__$1 = ((((!((map__41376 == null)))?((((map__41376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41376):map__41376);
var options = cljs.core.get.call(null,map__41376__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__41376__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__41377 = options;
var map__41377__$1 = ((((!((map__41377 == null)))?((((map__41377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41377):map__41377);
var target = cljs.core.get.call(null,map__41377__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__41377__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__41378 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__41384 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__41384__$1 = ((((!((map__41384 == null)))?((((map__41384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41384):map__41384);
var node_libs = cljs.core.get.call(null,map__41384__$1,true);
var libs_to_load = cljs.core.get.call(null,map__41384__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__41378,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__41378,(1),null);
var map__41381 = cljs.core.group_by.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__41381__$1 = ((((!((map__41381 == null)))?((((map__41381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41381):map__41381);
var global_exports_libs = cljs.core.get.call(null,map__41381__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__41381__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__41387_41403 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__41388_41404 = null;
var count__41389_41405 = (0);
var i__41390_41406 = (0);
while(true){
if((i__41390_41406 < count__41389_41405)){
var lib_41407 = cljs.core._nth.call(null,chunk__41388_41404,i__41390_41406);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_41407)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__27936__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_41407),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_41407),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__27936__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_41407),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_41407),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_41407),"');");

}
}
}

var G__41408 = seq__41387_41403;
var G__41409 = chunk__41388_41404;
var G__41410 = count__41389_41405;
var G__41411 = (i__41390_41406 + (1));
seq__41387_41403 = G__41408;
chunk__41388_41404 = G__41409;
count__41389_41405 = G__41410;
i__41390_41406 = G__41411;
continue;
} else {
var temp__4657__auto___41412 = cljs.core.seq.call(null,seq__41387_41403);
if(temp__4657__auto___41412){
var seq__41387_41413__$1 = temp__4657__auto___41412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41387_41413__$1)){
var c__28775__auto___41414 = cljs.core.chunk_first.call(null,seq__41387_41413__$1);
var G__41415 = cljs.core.chunk_rest.call(null,seq__41387_41413__$1);
var G__41416 = c__28775__auto___41414;
var G__41417 = cljs.core.count.call(null,c__28775__auto___41414);
var G__41418 = (0);
seq__41387_41403 = G__41415;
chunk__41388_41404 = G__41416;
count__41389_41405 = G__41417;
i__41390_41406 = G__41418;
continue;
} else {
var lib_41419 = cljs.core.first.call(null,seq__41387_41413__$1);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_41419)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__27936__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_41419),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_41419),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__27936__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_41419),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_41419),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_41419),"');");

}
}
}

var G__41420 = cljs.core.next.call(null,seq__41387_41413__$1);
var G__41421 = null;
var G__41422 = (0);
var G__41423 = (0);
seq__41387_41403 = G__41420;
chunk__41388_41404 = G__41421;
count__41389_41405 = G__41422;
i__41390_41406 = G__41423;
continue;
}
} else {
}
}
break;
}

var seq__41391_41424 = cljs.core.seq.call(null,node_libs);
var chunk__41392_41425 = null;
var count__41393_41426 = (0);
var i__41394_41427 = (0);
while(true){
if((i__41394_41427 < count__41393_41426)){
var lib_41428 = cljs.core._nth.call(null,chunk__41392_41425,i__41394_41427);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_41428)," = require('",lib_41428,"');");

var G__41429 = seq__41391_41424;
var G__41430 = chunk__41392_41425;
var G__41431 = count__41393_41426;
var G__41432 = (i__41394_41427 + (1));
seq__41391_41424 = G__41429;
chunk__41392_41425 = G__41430;
count__41393_41426 = G__41431;
i__41394_41427 = G__41432;
continue;
} else {
var temp__4657__auto___41433 = cljs.core.seq.call(null,seq__41391_41424);
if(temp__4657__auto___41433){
var seq__41391_41434__$1 = temp__4657__auto___41433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41391_41434__$1)){
var c__28775__auto___41435 = cljs.core.chunk_first.call(null,seq__41391_41434__$1);
var G__41436 = cljs.core.chunk_rest.call(null,seq__41391_41434__$1);
var G__41437 = c__28775__auto___41435;
var G__41438 = cljs.core.count.call(null,c__28775__auto___41435);
var G__41439 = (0);
seq__41391_41424 = G__41436;
chunk__41392_41425 = G__41437;
count__41393_41426 = G__41438;
i__41394_41427 = G__41439;
continue;
} else {
var lib_41440 = cljs.core.first.call(null,seq__41391_41434__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_41440)," = require('",lib_41440,"');");

var G__41441 = cljs.core.next.call(null,seq__41391_41434__$1);
var G__41442 = null;
var G__41443 = (0);
var G__41444 = (0);
seq__41391_41424 = G__41441;
chunk__41392_41425 = G__41442;
count__41393_41426 = G__41443;
i__41394_41427 = G__41444;
continue;
}
} else {
}
}
break;
}

var seq__41395_41445 = cljs.core.seq.call(null,global_exports_libs);
var chunk__41396_41446 = null;
var count__41397_41447 = (0);
var i__41398_41448 = (0);
while(true){
if((i__41398_41448 < count__41397_41447)){
var lib_41449 = cljs.core._nth.call(null,chunk__41396_41446,i__41398_41448);
var map__41399_41450 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_41449));
var map__41399_41451__$1 = ((((!((map__41399_41450 == null)))?((((map__41399_41450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41399_41450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41399_41450):map__41399_41450);
var global_exports_41452 = cljs.core.get.call(null,map__41399_41451__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_41449)," = goog.global.",cljs.core.get.call(null,global_exports_41452,cljs.core.symbol.call(null,lib_41449)),";");

var G__41453 = seq__41395_41445;
var G__41454 = chunk__41396_41446;
var G__41455 = count__41397_41447;
var G__41456 = (i__41398_41448 + (1));
seq__41395_41445 = G__41453;
chunk__41396_41446 = G__41454;
count__41397_41447 = G__41455;
i__41398_41448 = G__41456;
continue;
} else {
var temp__4657__auto___41457 = cljs.core.seq.call(null,seq__41395_41445);
if(temp__4657__auto___41457){
var seq__41395_41458__$1 = temp__4657__auto___41457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41395_41458__$1)){
var c__28775__auto___41459 = cljs.core.chunk_first.call(null,seq__41395_41458__$1);
var G__41460 = cljs.core.chunk_rest.call(null,seq__41395_41458__$1);
var G__41461 = c__28775__auto___41459;
var G__41462 = cljs.core.count.call(null,c__28775__auto___41459);
var G__41463 = (0);
seq__41395_41445 = G__41460;
chunk__41396_41446 = G__41461;
count__41397_41447 = G__41462;
i__41398_41448 = G__41463;
continue;
} else {
var lib_41464 = cljs.core.first.call(null,seq__41395_41458__$1);
var map__41401_41465 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_41464));
var map__41401_41466__$1 = ((((!((map__41401_41465 == null)))?((((map__41401_41465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41401_41465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41401_41465):map__41401_41465);
var global_exports_41467 = cljs.core.get.call(null,map__41401_41466__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_41464)," = goog.global.",cljs.core.get.call(null,global_exports_41467,cljs.core.symbol.call(null,lib_41464)),";");

var G__41468 = cljs.core.next.call(null,seq__41395_41458__$1);
var G__41469 = null;
var G__41470 = (0);
var G__41471 = (0);
seq__41395_41445 = G__41468;
chunk__41396_41446 = G__41469;
count__41397_41447 = G__41470;
i__41398_41448 = G__41471;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__41472){
var map__41473 = p__41472;
var map__41473__$1 = ((((!((map__41473 == null)))?((((map__41473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41473):map__41473);
var name = cljs.core.get.call(null,map__41473__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__41473__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__41473__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__41473__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__41473__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__41473__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__41473__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__41475){
var map__41476 = p__41475;
var map__41476__$1 = ((((!((map__41476 == null)))?((((map__41476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41476):map__41476);
var name = cljs.core.get.call(null,map__41476__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__41476__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__41476__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__41476__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__41476__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__41476__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__41476__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__41478){
var map__41479 = p__41478;
var map__41479__$1 = ((((!((map__41479 == null)))?((((map__41479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41479):map__41479);
var t = cljs.core.get.call(null,map__41479__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__41479__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__41479__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__41479__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__41479__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__41481_41499 = cljs.core.seq.call(null,protocols);
var chunk__41482_41500 = null;
var count__41483_41501 = (0);
var i__41484_41502 = (0);
while(true){
if((i__41484_41502 < count__41483_41501)){
var protocol_41503 = cljs.core._nth.call(null,chunk__41482_41500,i__41484_41502);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_41503)].join('')),"}");

var G__41504 = seq__41481_41499;
var G__41505 = chunk__41482_41500;
var G__41506 = count__41483_41501;
var G__41507 = (i__41484_41502 + (1));
seq__41481_41499 = G__41504;
chunk__41482_41500 = G__41505;
count__41483_41501 = G__41506;
i__41484_41502 = G__41507;
continue;
} else {
var temp__4657__auto___41508 = cljs.core.seq.call(null,seq__41481_41499);
if(temp__4657__auto___41508){
var seq__41481_41509__$1 = temp__4657__auto___41508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41481_41509__$1)){
var c__28775__auto___41510 = cljs.core.chunk_first.call(null,seq__41481_41509__$1);
var G__41511 = cljs.core.chunk_rest.call(null,seq__41481_41509__$1);
var G__41512 = c__28775__auto___41510;
var G__41513 = cljs.core.count.call(null,c__28775__auto___41510);
var G__41514 = (0);
seq__41481_41499 = G__41511;
chunk__41482_41500 = G__41512;
count__41483_41501 = G__41513;
i__41484_41502 = G__41514;
continue;
} else {
var protocol_41515 = cljs.core.first.call(null,seq__41481_41509__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_41515)].join('')),"}");

var G__41516 = cljs.core.next.call(null,seq__41481_41509__$1);
var G__41517 = null;
var G__41518 = (0);
var G__41519 = (0);
seq__41481_41499 = G__41516;
chunk__41482_41500 = G__41517;
count__41483_41501 = G__41518;
i__41484_41502 = G__41519;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__41485_41520 = cljs.core.seq.call(null,fields__$1);
var chunk__41486_41521 = null;
var count__41487_41522 = (0);
var i__41488_41523 = (0);
while(true){
if((i__41488_41523 < count__41487_41522)){
var fld_41524 = cljs.core._nth.call(null,chunk__41486_41521,i__41488_41523);
cljs.compiler.emitln.call(null,"this.",fld_41524," = ",fld_41524,";");

var G__41525 = seq__41485_41520;
var G__41526 = chunk__41486_41521;
var G__41527 = count__41487_41522;
var G__41528 = (i__41488_41523 + (1));
seq__41485_41520 = G__41525;
chunk__41486_41521 = G__41526;
count__41487_41522 = G__41527;
i__41488_41523 = G__41528;
continue;
} else {
var temp__4657__auto___41529 = cljs.core.seq.call(null,seq__41485_41520);
if(temp__4657__auto___41529){
var seq__41485_41530__$1 = temp__4657__auto___41529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41485_41530__$1)){
var c__28775__auto___41531 = cljs.core.chunk_first.call(null,seq__41485_41530__$1);
var G__41532 = cljs.core.chunk_rest.call(null,seq__41485_41530__$1);
var G__41533 = c__28775__auto___41531;
var G__41534 = cljs.core.count.call(null,c__28775__auto___41531);
var G__41535 = (0);
seq__41485_41520 = G__41532;
chunk__41486_41521 = G__41533;
count__41487_41522 = G__41534;
i__41488_41523 = G__41535;
continue;
} else {
var fld_41536 = cljs.core.first.call(null,seq__41485_41530__$1);
cljs.compiler.emitln.call(null,"this.",fld_41536," = ",fld_41536,";");

var G__41537 = cljs.core.next.call(null,seq__41485_41530__$1);
var G__41538 = null;
var G__41539 = (0);
var G__41540 = (0);
seq__41485_41520 = G__41537;
chunk__41486_41521 = G__41538;
count__41487_41522 = G__41539;
i__41488_41523 = G__41540;
continue;
}
} else {
}
}
break;
}

var seq__41489_41541 = cljs.core.seq.call(null,pmasks);
var chunk__41490_41542 = null;
var count__41491_41543 = (0);
var i__41492_41544 = (0);
while(true){
if((i__41492_41544 < count__41491_41543)){
var vec__41493_41545 = cljs.core._nth.call(null,chunk__41490_41542,i__41492_41544);
var pno_41546 = cljs.core.nth.call(null,vec__41493_41545,(0),null);
var pmask_41547 = cljs.core.nth.call(null,vec__41493_41545,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_41546,"$ = ",pmask_41547,";");

var G__41548 = seq__41489_41541;
var G__41549 = chunk__41490_41542;
var G__41550 = count__41491_41543;
var G__41551 = (i__41492_41544 + (1));
seq__41489_41541 = G__41548;
chunk__41490_41542 = G__41549;
count__41491_41543 = G__41550;
i__41492_41544 = G__41551;
continue;
} else {
var temp__4657__auto___41552 = cljs.core.seq.call(null,seq__41489_41541);
if(temp__4657__auto___41552){
var seq__41489_41553__$1 = temp__4657__auto___41552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41489_41553__$1)){
var c__28775__auto___41554 = cljs.core.chunk_first.call(null,seq__41489_41553__$1);
var G__41555 = cljs.core.chunk_rest.call(null,seq__41489_41553__$1);
var G__41556 = c__28775__auto___41554;
var G__41557 = cljs.core.count.call(null,c__28775__auto___41554);
var G__41558 = (0);
seq__41489_41541 = G__41555;
chunk__41490_41542 = G__41556;
count__41491_41543 = G__41557;
i__41492_41544 = G__41558;
continue;
} else {
var vec__41496_41559 = cljs.core.first.call(null,seq__41489_41553__$1);
var pno_41560 = cljs.core.nth.call(null,vec__41496_41559,(0),null);
var pmask_41561 = cljs.core.nth.call(null,vec__41496_41559,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_41560,"$ = ",pmask_41561,";");

var G__41562 = cljs.core.next.call(null,seq__41489_41553__$1);
var G__41563 = null;
var G__41564 = (0);
var G__41565 = (0);
seq__41489_41541 = G__41562;
chunk__41490_41542 = G__41563;
count__41491_41543 = G__41564;
i__41492_41544 = G__41565;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__41566){
var map__41567 = p__41566;
var map__41567__$1 = ((((!((map__41567 == null)))?((((map__41567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41567):map__41567);
var t = cljs.core.get.call(null,map__41567__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__41567__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__41567__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__41567__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__41567__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__41569_41587 = cljs.core.seq.call(null,protocols);
var chunk__41570_41588 = null;
var count__41571_41589 = (0);
var i__41572_41590 = (0);
while(true){
if((i__41572_41590 < count__41571_41589)){
var protocol_41591 = cljs.core._nth.call(null,chunk__41570_41588,i__41572_41590);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_41591)].join('')),"}");

var G__41592 = seq__41569_41587;
var G__41593 = chunk__41570_41588;
var G__41594 = count__41571_41589;
var G__41595 = (i__41572_41590 + (1));
seq__41569_41587 = G__41592;
chunk__41570_41588 = G__41593;
count__41571_41589 = G__41594;
i__41572_41590 = G__41595;
continue;
} else {
var temp__4657__auto___41596 = cljs.core.seq.call(null,seq__41569_41587);
if(temp__4657__auto___41596){
var seq__41569_41597__$1 = temp__4657__auto___41596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41569_41597__$1)){
var c__28775__auto___41598 = cljs.core.chunk_first.call(null,seq__41569_41597__$1);
var G__41599 = cljs.core.chunk_rest.call(null,seq__41569_41597__$1);
var G__41600 = c__28775__auto___41598;
var G__41601 = cljs.core.count.call(null,c__28775__auto___41598);
var G__41602 = (0);
seq__41569_41587 = G__41599;
chunk__41570_41588 = G__41600;
count__41571_41589 = G__41601;
i__41572_41590 = G__41602;
continue;
} else {
var protocol_41603 = cljs.core.first.call(null,seq__41569_41597__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_41603)].join('')),"}");

var G__41604 = cljs.core.next.call(null,seq__41569_41597__$1);
var G__41605 = null;
var G__41606 = (0);
var G__41607 = (0);
seq__41569_41587 = G__41604;
chunk__41570_41588 = G__41605;
count__41571_41589 = G__41606;
i__41572_41590 = G__41607;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__41573_41608 = cljs.core.seq.call(null,fields__$1);
var chunk__41574_41609 = null;
var count__41575_41610 = (0);
var i__41576_41611 = (0);
while(true){
if((i__41576_41611 < count__41575_41610)){
var fld_41612 = cljs.core._nth.call(null,chunk__41574_41609,i__41576_41611);
cljs.compiler.emitln.call(null,"this.",fld_41612," = ",fld_41612,";");

var G__41613 = seq__41573_41608;
var G__41614 = chunk__41574_41609;
var G__41615 = count__41575_41610;
var G__41616 = (i__41576_41611 + (1));
seq__41573_41608 = G__41613;
chunk__41574_41609 = G__41614;
count__41575_41610 = G__41615;
i__41576_41611 = G__41616;
continue;
} else {
var temp__4657__auto___41617 = cljs.core.seq.call(null,seq__41573_41608);
if(temp__4657__auto___41617){
var seq__41573_41618__$1 = temp__4657__auto___41617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41573_41618__$1)){
var c__28775__auto___41619 = cljs.core.chunk_first.call(null,seq__41573_41618__$1);
var G__41620 = cljs.core.chunk_rest.call(null,seq__41573_41618__$1);
var G__41621 = c__28775__auto___41619;
var G__41622 = cljs.core.count.call(null,c__28775__auto___41619);
var G__41623 = (0);
seq__41573_41608 = G__41620;
chunk__41574_41609 = G__41621;
count__41575_41610 = G__41622;
i__41576_41611 = G__41623;
continue;
} else {
var fld_41624 = cljs.core.first.call(null,seq__41573_41618__$1);
cljs.compiler.emitln.call(null,"this.",fld_41624," = ",fld_41624,";");

var G__41625 = cljs.core.next.call(null,seq__41573_41618__$1);
var G__41626 = null;
var G__41627 = (0);
var G__41628 = (0);
seq__41573_41608 = G__41625;
chunk__41574_41609 = G__41626;
count__41575_41610 = G__41627;
i__41576_41611 = G__41628;
continue;
}
} else {
}
}
break;
}

var seq__41577_41629 = cljs.core.seq.call(null,pmasks);
var chunk__41578_41630 = null;
var count__41579_41631 = (0);
var i__41580_41632 = (0);
while(true){
if((i__41580_41632 < count__41579_41631)){
var vec__41581_41633 = cljs.core._nth.call(null,chunk__41578_41630,i__41580_41632);
var pno_41634 = cljs.core.nth.call(null,vec__41581_41633,(0),null);
var pmask_41635 = cljs.core.nth.call(null,vec__41581_41633,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_41634,"$ = ",pmask_41635,";");

var G__41636 = seq__41577_41629;
var G__41637 = chunk__41578_41630;
var G__41638 = count__41579_41631;
var G__41639 = (i__41580_41632 + (1));
seq__41577_41629 = G__41636;
chunk__41578_41630 = G__41637;
count__41579_41631 = G__41638;
i__41580_41632 = G__41639;
continue;
} else {
var temp__4657__auto___41640 = cljs.core.seq.call(null,seq__41577_41629);
if(temp__4657__auto___41640){
var seq__41577_41641__$1 = temp__4657__auto___41640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41577_41641__$1)){
var c__28775__auto___41642 = cljs.core.chunk_first.call(null,seq__41577_41641__$1);
var G__41643 = cljs.core.chunk_rest.call(null,seq__41577_41641__$1);
var G__41644 = c__28775__auto___41642;
var G__41645 = cljs.core.count.call(null,c__28775__auto___41642);
var G__41646 = (0);
seq__41577_41629 = G__41643;
chunk__41578_41630 = G__41644;
count__41579_41631 = G__41645;
i__41580_41632 = G__41646;
continue;
} else {
var vec__41584_41647 = cljs.core.first.call(null,seq__41577_41641__$1);
var pno_41648 = cljs.core.nth.call(null,vec__41584_41647,(0),null);
var pmask_41649 = cljs.core.nth.call(null,vec__41584_41647,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_41648,"$ = ",pmask_41649,";");

var G__41650 = cljs.core.next.call(null,seq__41577_41641__$1);
var G__41651 = null;
var G__41652 = (0);
var G__41653 = (0);
seq__41577_41629 = G__41650;
chunk__41578_41630 = G__41651;
count__41579_41631 = G__41652;
i__41580_41632 = G__41653;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__41654){
var map__41655 = p__41654;
var map__41655__$1 = ((((!((map__41655 == null)))?((((map__41655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41655):map__41655);
var target = cljs.core.get.call(null,map__41655__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__41655__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__41655__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__41655__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__41655__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__41657){
var map__41658 = p__41657;
var map__41658__$1 = ((((!((map__41658 == null)))?((((map__41658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41658):map__41658);
var op = cljs.core.get.call(null,map__41658__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__41658__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__41658__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__41658__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__41658__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__27924__auto__ = code;
if(cljs.core.truth_(and__27924__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__27924__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__40574__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40574__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"cache-key","cache-key",-565448732),new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445),new cljs.core.Keyword(null,"language-out","language-out",334619882)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__41663 = cljs.core.seq.call(null,table);
var chunk__41664 = null;
var count__41665 = (0);
var i__41666 = (0);
while(true){
if((i__41666 < count__41665)){
var vec__41667 = cljs.core._nth.call(null,chunk__41664,i__41666);
var sym = cljs.core.nth.call(null,vec__41667,(0),null);
var value = cljs.core.nth.call(null,vec__41667,(1),null);
var ns_41673 = cljs.core.namespace.call(null,sym);
var name_41674 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__41675 = seq__41663;
var G__41676 = chunk__41664;
var G__41677 = count__41665;
var G__41678 = (i__41666 + (1));
seq__41663 = G__41675;
chunk__41664 = G__41676;
count__41665 = G__41677;
i__41666 = G__41678;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41663);
if(temp__4657__auto__){
var seq__41663__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41663__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__41663__$1);
var G__41679 = cljs.core.chunk_rest.call(null,seq__41663__$1);
var G__41680 = c__28775__auto__;
var G__41681 = cljs.core.count.call(null,c__28775__auto__);
var G__41682 = (0);
seq__41663 = G__41679;
chunk__41664 = G__41680;
count__41665 = G__41681;
i__41666 = G__41682;
continue;
} else {
var vec__41670 = cljs.core.first.call(null,seq__41663__$1);
var sym = cljs.core.nth.call(null,vec__41670,(0),null);
var value = cljs.core.nth.call(null,vec__41670,(1),null);
var ns_41683 = cljs.core.namespace.call(null,sym);
var name_41684 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__41685 = cljs.core.next.call(null,seq__41663__$1);
var G__41686 = null;
var G__41687 = (0);
var G__41688 = (0);
seq__41663 = G__41685;
chunk__41664 = G__41686;
count__41665 = G__41687;
i__41666 = G__41688;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__41690 = arguments.length;
switch (G__41690) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_41695 = cljs.core.first.call(null,ks);
var vec__41691_41696 = cljs.core.conj.call(null,prefix,k_41695);
var top_41697 = cljs.core.nth.call(null,vec__41691_41696,(0),null);
var prefix_SINGLEQUOTE__41698 = vec__41691_41696;
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_41695)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__41698) == null))){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_41697)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_41697)))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__41698)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_41697);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__41698)),";");
}
} else {
}

var m_41699 = cljs.core.get.call(null,externs,k_41695);
if(cljs.core.empty_QMARK_.call(null,m_41699)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__41698,m_41699,top_level,known_externs);
}

var G__41700 = cljs.core.next.call(null,ks);
ks = G__41700;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1510190969225
