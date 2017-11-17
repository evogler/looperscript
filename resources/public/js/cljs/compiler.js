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
var map__11575 = s;
var map__11575__$1 = ((((!((map__11575 == null)))?((((map__11575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11575):map__11575);
var name = cljs.core.get.call(null,map__11575__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__11575__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__11578 = info;
var map__11579 = G__11578;
var map__11579__$1 = ((((!((map__11579 == null)))?((((map__11579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11579):map__11579);
var shadow = cljs.core.get.call(null,map__11579__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__11578__$1 = G__11578;
while(true){
var d__$2 = d__$1;
var map__11581 = G__11578__$1;
var map__11581__$1 = ((((!((map__11581 == null)))?((((map__11581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11581):map__11581);
var shadow__$1 = cljs.core.get.call(null,map__11581__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__11583 = (d__$2 + (1));
var G__11584 = shadow__$1;
d__$1 = G__11583;
G__11578__$1 = G__11584;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__11585){
var map__11586 = p__11585;
var map__11586__$1 = ((((!((map__11586 == null)))?((((map__11586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11586):map__11586);
var name_var = map__11586__$1;
var name = cljs.core.get.call(null,map__11586__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__11586__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__11588 = info;
var map__11588__$1 = ((((!((map__11588 == null)))?((((map__11588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11588):map__11588);
var ns = cljs.core.get.call(null,map__11588__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__11588__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__11591 = arguments.length;
switch (G__11591) {
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
var G__11593 = cp;
switch (G__11593) {
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
var seq__11595_11599 = cljs.core.seq.call(null,s);
var chunk__11596_11600 = null;
var count__11597_11601 = (0);
var i__11598_11602 = (0);
while(true){
if((i__11598_11602 < count__11597_11601)){
var c_11603 = cljs.core._nth.call(null,chunk__11596_11600,i__11598_11602);
sb.append(cljs.compiler.escape_char.call(null,c_11603));

var G__11604 = seq__11595_11599;
var G__11605 = chunk__11596_11600;
var G__11606 = count__11597_11601;
var G__11607 = (i__11598_11602 + (1));
seq__11595_11599 = G__11604;
chunk__11596_11600 = G__11605;
count__11597_11601 = G__11606;
i__11598_11602 = G__11607;
continue;
} else {
var temp__4657__auto___11608 = cljs.core.seq.call(null,seq__11595_11599);
if(temp__4657__auto___11608){
var seq__11595_11609__$1 = temp__4657__auto___11608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11595_11609__$1)){
var c__8257__auto___11610 = cljs.core.chunk_first.call(null,seq__11595_11609__$1);
var G__11611 = cljs.core.chunk_rest.call(null,seq__11595_11609__$1);
var G__11612 = c__8257__auto___11610;
var G__11613 = cljs.core.count.call(null,c__8257__auto___11610);
var G__11614 = (0);
seq__11595_11599 = G__11611;
chunk__11596_11600 = G__11612;
count__11597_11601 = G__11613;
i__11598_11602 = G__11614;
continue;
} else {
var c_11615 = cljs.core.first.call(null,seq__11595_11609__$1);
sb.append(cljs.compiler.escape_char.call(null,c_11615));

var G__11616 = cljs.core.next.call(null,seq__11595_11609__$1);
var G__11617 = null;
var G__11618 = (0);
var G__11619 = (0);
seq__11595_11599 = G__11616;
chunk__11596_11600 = G__11617;
count__11597_11601 = G__11618;
i__11598_11602 = G__11619;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__8373__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8374__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8375__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8376__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8377__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8377__auto__,method_table__8373__auto__,prefer_table__8374__auto__,method_cache__8375__auto__,cached_hierarchy__8376__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__9972__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__9972__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__11620_11625 = ast;
var map__11620_11626__$1 = ((((!((map__11620_11625 == null)))?((((map__11620_11625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11620_11625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11620_11625):map__11620_11625);
var env_11627 = cljs.core.get.call(null,map__11620_11626__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_11627))){
var map__11622_11628 = env_11627;
var map__11622_11629__$1 = ((((!((map__11622_11628 == null)))?((((map__11622_11628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11622_11628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11622_11628):map__11622_11628);
var line_11630 = cljs.core.get.call(null,map__11622_11629__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_11631 = cljs.core.get.call(null,map__11622_11629__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__11622_11628,map__11622_11629__$1,line_11630,column_11631,map__11620_11625,map__11620_11626__$1,env_11627,val__9972__auto__){
return (function (m){
var minfo = (function (){var G__11624 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__11624,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__11624;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_11630 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__11622_11628,map__11622_11629__$1,line_11630,column_11631,map__11620_11625,map__11620_11626__$1,env_11627,val__9972__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_11631)?(column_11631 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__11622_11628,map__11622_11629__$1,line_11630,column_11631,map__11620_11625,map__11620_11626__$1,env_11627,val__9972__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__11622_11628,map__11622_11629__$1,line_11630,column_11631,map__11620_11625,map__11620_11626__$1,env_11627,val__9972__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__11622_11628,map__11622_11629__$1,line_11630,column_11631,map__11620_11625,map__11620_11626__$1,env_11627,val__9972__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__11622_11628,map__11622_11629__$1,line_11630,column_11631,map__11620_11625,map__11620_11626__$1,env_11627,val__9972__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__9972__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__8594__auto__ = [];
var len__8587__auto___11638 = arguments.length;
var i__8588__auto___11639 = (0);
while(true){
if((i__8588__auto___11639 < len__8587__auto___11638)){
args__8594__auto__.push((arguments[i__8588__auto___11639]));

var G__11640 = (i__8588__auto___11639 + (1));
i__8588__auto___11639 = G__11640;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((0) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__8595__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__11634_11641 = cljs.core.seq.call(null,xs);
var chunk__11635_11642 = null;
var count__11636_11643 = (0);
var i__11637_11644 = (0);
while(true){
if((i__11637_11644 < count__11636_11643)){
var x_11645 = cljs.core._nth.call(null,chunk__11635_11642,i__11637_11644);
if((x_11645 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_11645)){
cljs.compiler.emit.call(null,x_11645);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_11645)){
cljs.core.apply.call(null,cljs.compiler.emits,x_11645);
} else {
if(goog.isFunction(x_11645)){
x_11645.call(null);
} else {
var s_11646 = cljs.core.print_str.call(null,x_11645);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__11634_11641,chunk__11635_11642,count__11636_11643,i__11637_11644,s_11646,x_11645){
return (function (p1__11632_SHARP_){
return (p1__11632_SHARP_ + cljs.core.count.call(null,s_11646));
});})(seq__11634_11641,chunk__11635_11642,count__11636_11643,i__11637_11644,s_11646,x_11645))
);
}

cljs.core.print.call(null,s_11646);

}
}
}
}

var G__11647 = seq__11634_11641;
var G__11648 = chunk__11635_11642;
var G__11649 = count__11636_11643;
var G__11650 = (i__11637_11644 + (1));
seq__11634_11641 = G__11647;
chunk__11635_11642 = G__11648;
count__11636_11643 = G__11649;
i__11637_11644 = G__11650;
continue;
} else {
var temp__4657__auto___11651 = cljs.core.seq.call(null,seq__11634_11641);
if(temp__4657__auto___11651){
var seq__11634_11652__$1 = temp__4657__auto___11651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11634_11652__$1)){
var c__8257__auto___11653 = cljs.core.chunk_first.call(null,seq__11634_11652__$1);
var G__11654 = cljs.core.chunk_rest.call(null,seq__11634_11652__$1);
var G__11655 = c__8257__auto___11653;
var G__11656 = cljs.core.count.call(null,c__8257__auto___11653);
var G__11657 = (0);
seq__11634_11641 = G__11654;
chunk__11635_11642 = G__11655;
count__11636_11643 = G__11656;
i__11637_11644 = G__11657;
continue;
} else {
var x_11658 = cljs.core.first.call(null,seq__11634_11652__$1);
if((x_11658 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_11658)){
cljs.compiler.emit.call(null,x_11658);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_11658)){
cljs.core.apply.call(null,cljs.compiler.emits,x_11658);
} else {
if(goog.isFunction(x_11658)){
x_11658.call(null);
} else {
var s_11659 = cljs.core.print_str.call(null,x_11658);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__11634_11641,chunk__11635_11642,count__11636_11643,i__11637_11644,s_11659,x_11658,seq__11634_11652__$1,temp__4657__auto___11651){
return (function (p1__11632_SHARP_){
return (p1__11632_SHARP_ + cljs.core.count.call(null,s_11659));
});})(seq__11634_11641,chunk__11635_11642,count__11636_11643,i__11637_11644,s_11659,x_11658,seq__11634_11652__$1,temp__4657__auto___11651))
);
}

cljs.core.print.call(null,s_11659);

}
}
}
}

var G__11660 = cljs.core.next.call(null,seq__11634_11652__$1);
var G__11661 = null;
var G__11662 = (0);
var G__11663 = (0);
seq__11634_11641 = G__11660;
chunk__11635_11642 = G__11661;
count__11636_11643 = G__11662;
i__11637_11644 = G__11663;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq11633){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11633));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__8594__auto__ = [];
var len__8587__auto___11669 = arguments.length;
var i__8588__auto___11670 = (0);
while(true){
if((i__8588__auto___11670 < len__8587__auto___11669)){
args__8594__auto__.push((arguments[i__8588__auto___11670]));

var G__11671 = (i__8588__auto___11670 + (1));
i__8588__auto___11670 = G__11671;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((0) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__8595__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_11665_11672 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_11665_11672;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__11666){
var map__11667 = p__11666;
var map__11667__$1 = ((((!((map__11667 == null)))?((((map__11667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11667):map__11667);
var m = map__11667__$1;
var gen_line = cljs.core.get.call(null,map__11667__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq11664){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11664));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__8445__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_11673_11675 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_11674_11676 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_11673_11675,_STAR_print_fn_STAR_11674_11676,sb__8445__auto__){
return (function (x__8446__auto__){
return sb__8445__auto__.append(x__8446__auto__);
});})(_STAR_print_newline_STAR_11673_11675,_STAR_print_fn_STAR_11674_11676,sb__8445__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11674_11676;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11673_11675;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8445__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__8373__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8374__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8375__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8376__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8377__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8377__auto__,method_table__8373__auto__,prefer_table__8374__auto__,method_cache__8375__auto__,cached_hierarchy__8376__auto__));
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
var vec__11677 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__11677,(0),null);
var flags = cljs.core.nth.call(null,vec__11677,(1),null);
var pattern = cljs.core.nth.call(null,vec__11677,(2),null);
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
var temp__4655__auto__ = (function (){var and__7406__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__7406__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__7406__auto__;
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
var temp__4655__auto__ = (function (){var and__7406__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__7406__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__7406__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__11681){
var map__11682 = p__11681;
var map__11682__$1 = ((((!((map__11682 == null)))?((((map__11682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11682):map__11682);
var ast = map__11682__$1;
var info = cljs.core.get.call(null,map__11682__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__11682__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__11682__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__4655__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__4655__auto__)){
var const_expr = temp__4655__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__11684 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__11684__$1 = ((((!((map__11684 == null)))?((((map__11684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11684):map__11684);
var cenv = map__11684__$1;
var options = cljs.core.get.call(null,map__11684__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__7418__auto__ = js_module_name;
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
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
var reserved = (function (){var G__11686 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__7406__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__7406__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__7406__auto__;
}
})())){
return clojure.set.difference.call(null,G__11686,cljs.analyzer.es5_allowed);
} else {
return G__11686;
}
})();
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__11687 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__11687,reserved);
} else {
return G__11687;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__11688){
var map__11689 = p__11688;
var map__11689__$1 = ((((!((map__11689 == null)))?((((map__11689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11689):map__11689);
var arg = map__11689__$1;
var env = cljs.core.get.call(null,map__11689__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__11689__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__11689__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__11689__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__11691 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__11691__$1 = ((((!((map__11691 == null)))?((((map__11691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11691):map__11691);
var name = cljs.core.get.call(null,map__11691__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__11693){
var map__11694 = p__11693;
var map__11694__$1 = ((((!((map__11694 == null)))?((((map__11694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11694):map__11694);
var expr = cljs.core.get.call(null,map__11694__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__11694__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__11694__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__11696_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__11696_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__11697){
var map__11698 = p__11697;
var map__11698__$1 = ((((!((map__11698 == null)))?((((map__11698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11698):map__11698);
var env = cljs.core.get.call(null,map__11698__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__11698__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__11698__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__11700){
var map__11701 = p__11700;
var map__11701__$1 = ((((!((map__11701 == null)))?((((map__11701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11701):map__11701);
var items = cljs.core.get.call(null,map__11701__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11701__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__11703){
var map__11704 = p__11703;
var map__11704__$1 = ((((!((map__11704 == null)))?((((map__11704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11704):map__11704);
var items = cljs.core.get.call(null,map__11704__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11704__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_11706 = cljs.core.count.call(null,items);
if((cnt_11706 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_11706,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__11707_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__11707_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__11708){
var map__11709 = p__11708;
var map__11709__$1 = ((((!((map__11709 == null)))?((((map__11709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11709):map__11709);
var items = cljs.core.get.call(null,map__11709__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11709__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__11711){
var map__11712 = p__11711;
var map__11712__$1 = ((((!((map__11712 == null)))?((((map__11712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11712):map__11712);
var items = cljs.core.get.call(null,map__11712__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__11712__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__11712__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___11730 = cljs.core.seq.call(null,items);
if(temp__4657__auto___11730){
var items_11731__$1 = temp__4657__auto___11730;
var vec__11714_11732 = items_11731__$1;
var seq__11715_11733 = cljs.core.seq.call(null,vec__11714_11732);
var first__11716_11734 = cljs.core.first.call(null,seq__11715_11733);
var seq__11715_11735__$1 = cljs.core.next.call(null,seq__11715_11733);
var vec__11717_11736 = first__11716_11734;
var k_11737 = cljs.core.nth.call(null,vec__11717_11736,(0),null);
var v_11738 = cljs.core.nth.call(null,vec__11717_11736,(1),null);
var r_11739 = seq__11715_11735__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_11737),"\": ",v_11738);

var seq__11720_11740 = cljs.core.seq.call(null,r_11739);
var chunk__11721_11741 = null;
var count__11722_11742 = (0);
var i__11723_11743 = (0);
while(true){
if((i__11723_11743 < count__11722_11742)){
var vec__11724_11744 = cljs.core._nth.call(null,chunk__11721_11741,i__11723_11743);
var k_11745__$1 = cljs.core.nth.call(null,vec__11724_11744,(0),null);
var v_11746__$1 = cljs.core.nth.call(null,vec__11724_11744,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_11745__$1),"\": ",v_11746__$1);

var G__11747 = seq__11720_11740;
var G__11748 = chunk__11721_11741;
var G__11749 = count__11722_11742;
var G__11750 = (i__11723_11743 + (1));
seq__11720_11740 = G__11747;
chunk__11721_11741 = G__11748;
count__11722_11742 = G__11749;
i__11723_11743 = G__11750;
continue;
} else {
var temp__4657__auto___11751__$1 = cljs.core.seq.call(null,seq__11720_11740);
if(temp__4657__auto___11751__$1){
var seq__11720_11752__$1 = temp__4657__auto___11751__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11720_11752__$1)){
var c__8257__auto___11753 = cljs.core.chunk_first.call(null,seq__11720_11752__$1);
var G__11754 = cljs.core.chunk_rest.call(null,seq__11720_11752__$1);
var G__11755 = c__8257__auto___11753;
var G__11756 = cljs.core.count.call(null,c__8257__auto___11753);
var G__11757 = (0);
seq__11720_11740 = G__11754;
chunk__11721_11741 = G__11755;
count__11722_11742 = G__11756;
i__11723_11743 = G__11757;
continue;
} else {
var vec__11727_11758 = cljs.core.first.call(null,seq__11720_11752__$1);
var k_11759__$1 = cljs.core.nth.call(null,vec__11727_11758,(0),null);
var v_11760__$1 = cljs.core.nth.call(null,vec__11727_11758,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_11759__$1),"\": ",v_11760__$1);

var G__11761 = cljs.core.next.call(null,seq__11720_11752__$1);
var G__11762 = null;
var G__11763 = (0);
var G__11764 = (0);
seq__11720_11740 = G__11761;
chunk__11721_11741 = G__11762;
count__11722_11742 = G__11763;
i__11723_11743 = G__11764;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__11765){
var map__11766 = p__11765;
var map__11766__$1 = ((((!((map__11766 == null)))?((((map__11766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11766):map__11766);
var items = cljs.core.get.call(null,map__11766__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__11766__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__11766__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__11766__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__11768){
var map__11769 = p__11768;
var map__11769__$1 = ((((!((map__11769 == null)))?((((map__11769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11769):map__11769);
var form = cljs.core.get.call(null,map__11769__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__11769__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__11771){
var map__11772 = p__11771;
var map__11772__$1 = ((((!((map__11772 == null)))?((((map__11772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11772):map__11772);
var op = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__7418__auto__ = (function (){var and__7406__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__7406__auto__){
var and__7406__auto____$1 = form;
if(cljs.core.truth_(and__7406__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__7406__auto____$1;
}
} else {
return and__7406__auto__;
}
})();
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
var and__7406__auto__ = !((const_expr == null));
if(and__7406__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__7406__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__11774){
var map__11775 = p__11774;
var map__11775__$1 = ((((!((map__11775 == null)))?((((map__11775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11775):map__11775);
var op = cljs.core.get.call(null,map__11775__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__11775__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__11775__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__7418__auto__ = (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
if(or__7418__auto__){
return or__7418__auto__;
} else {
var and__7406__auto__ = !((const_expr == null));
if(and__7406__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__7406__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__7418__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__11777){
var map__11778 = p__11777;
var map__11778__$1 = ((((!((map__11778 == null)))?((((map__11778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11778):map__11778);
var test = cljs.core.get.call(null,map__11778__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__11778__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__11778__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__11778__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__11778__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__7418__auto__ = unchecked;
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__11780){
var map__11781 = p__11780;
var map__11781__$1 = ((((!((map__11781 == null)))?((((map__11781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11781):map__11781);
var v = cljs.core.get.call(null,map__11781__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__11781__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__11781__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__11781__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__11781__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__11783_11801 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__11784_11802 = null;
var count__11785_11803 = (0);
var i__11786_11804 = (0);
while(true){
if((i__11786_11804 < count__11785_11803)){
var vec__11787_11805 = cljs.core._nth.call(null,chunk__11784_11802,i__11786_11804);
var ts_11806 = cljs.core.nth.call(null,vec__11787_11805,(0),null);
var then_11807 = cljs.core.nth.call(null,vec__11787_11805,(1),null);
var seq__11790_11808 = cljs.core.seq.call(null,ts_11806);
var chunk__11791_11809 = null;
var count__11792_11810 = (0);
var i__11793_11811 = (0);
while(true){
if((i__11793_11811 < count__11792_11810)){
var test_11812 = cljs.core._nth.call(null,chunk__11791_11809,i__11793_11811);
cljs.compiler.emitln.call(null,"case ",test_11812,":");

var G__11813 = seq__11790_11808;
var G__11814 = chunk__11791_11809;
var G__11815 = count__11792_11810;
var G__11816 = (i__11793_11811 + (1));
seq__11790_11808 = G__11813;
chunk__11791_11809 = G__11814;
count__11792_11810 = G__11815;
i__11793_11811 = G__11816;
continue;
} else {
var temp__4657__auto___11817 = cljs.core.seq.call(null,seq__11790_11808);
if(temp__4657__auto___11817){
var seq__11790_11818__$1 = temp__4657__auto___11817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11790_11818__$1)){
var c__8257__auto___11819 = cljs.core.chunk_first.call(null,seq__11790_11818__$1);
var G__11820 = cljs.core.chunk_rest.call(null,seq__11790_11818__$1);
var G__11821 = c__8257__auto___11819;
var G__11822 = cljs.core.count.call(null,c__8257__auto___11819);
var G__11823 = (0);
seq__11790_11808 = G__11820;
chunk__11791_11809 = G__11821;
count__11792_11810 = G__11822;
i__11793_11811 = G__11823;
continue;
} else {
var test_11824 = cljs.core.first.call(null,seq__11790_11818__$1);
cljs.compiler.emitln.call(null,"case ",test_11824,":");

var G__11825 = cljs.core.next.call(null,seq__11790_11818__$1);
var G__11826 = null;
var G__11827 = (0);
var G__11828 = (0);
seq__11790_11808 = G__11825;
chunk__11791_11809 = G__11826;
count__11792_11810 = G__11827;
i__11793_11811 = G__11828;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_11807);
} else {
cljs.compiler.emitln.call(null,then_11807);
}

cljs.compiler.emitln.call(null,"break;");

var G__11829 = seq__11783_11801;
var G__11830 = chunk__11784_11802;
var G__11831 = count__11785_11803;
var G__11832 = (i__11786_11804 + (1));
seq__11783_11801 = G__11829;
chunk__11784_11802 = G__11830;
count__11785_11803 = G__11831;
i__11786_11804 = G__11832;
continue;
} else {
var temp__4657__auto___11833 = cljs.core.seq.call(null,seq__11783_11801);
if(temp__4657__auto___11833){
var seq__11783_11834__$1 = temp__4657__auto___11833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11783_11834__$1)){
var c__8257__auto___11835 = cljs.core.chunk_first.call(null,seq__11783_11834__$1);
var G__11836 = cljs.core.chunk_rest.call(null,seq__11783_11834__$1);
var G__11837 = c__8257__auto___11835;
var G__11838 = cljs.core.count.call(null,c__8257__auto___11835);
var G__11839 = (0);
seq__11783_11801 = G__11836;
chunk__11784_11802 = G__11837;
count__11785_11803 = G__11838;
i__11786_11804 = G__11839;
continue;
} else {
var vec__11794_11840 = cljs.core.first.call(null,seq__11783_11834__$1);
var ts_11841 = cljs.core.nth.call(null,vec__11794_11840,(0),null);
var then_11842 = cljs.core.nth.call(null,vec__11794_11840,(1),null);
var seq__11797_11843 = cljs.core.seq.call(null,ts_11841);
var chunk__11798_11844 = null;
var count__11799_11845 = (0);
var i__11800_11846 = (0);
while(true){
if((i__11800_11846 < count__11799_11845)){
var test_11847 = cljs.core._nth.call(null,chunk__11798_11844,i__11800_11846);
cljs.compiler.emitln.call(null,"case ",test_11847,":");

var G__11848 = seq__11797_11843;
var G__11849 = chunk__11798_11844;
var G__11850 = count__11799_11845;
var G__11851 = (i__11800_11846 + (1));
seq__11797_11843 = G__11848;
chunk__11798_11844 = G__11849;
count__11799_11845 = G__11850;
i__11800_11846 = G__11851;
continue;
} else {
var temp__4657__auto___11852__$1 = cljs.core.seq.call(null,seq__11797_11843);
if(temp__4657__auto___11852__$1){
var seq__11797_11853__$1 = temp__4657__auto___11852__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11797_11853__$1)){
var c__8257__auto___11854 = cljs.core.chunk_first.call(null,seq__11797_11853__$1);
var G__11855 = cljs.core.chunk_rest.call(null,seq__11797_11853__$1);
var G__11856 = c__8257__auto___11854;
var G__11857 = cljs.core.count.call(null,c__8257__auto___11854);
var G__11858 = (0);
seq__11797_11843 = G__11855;
chunk__11798_11844 = G__11856;
count__11799_11845 = G__11857;
i__11800_11846 = G__11858;
continue;
} else {
var test_11859 = cljs.core.first.call(null,seq__11797_11853__$1);
cljs.compiler.emitln.call(null,"case ",test_11859,":");

var G__11860 = cljs.core.next.call(null,seq__11797_11853__$1);
var G__11861 = null;
var G__11862 = (0);
var G__11863 = (0);
seq__11797_11843 = G__11860;
chunk__11798_11844 = G__11861;
count__11799_11845 = G__11862;
i__11800_11846 = G__11863;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_11842);
} else {
cljs.compiler.emitln.call(null,then_11842);
}

cljs.compiler.emitln.call(null,"break;");

var G__11864 = cljs.core.next.call(null,seq__11783_11834__$1);
var G__11865 = null;
var G__11866 = (0);
var G__11867 = (0);
seq__11783_11801 = G__11864;
chunk__11784_11802 = G__11865;
count__11785_11803 = G__11866;
i__11786_11804 = G__11867;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__11868){
var map__11869 = p__11868;
var map__11869__$1 = ((((!((map__11869 == null)))?((((map__11869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11869):map__11869);
var throw$ = cljs.core.get.call(null,map__11869__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__11869__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__11872 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__11872,(0),null);
var rstr = cljs.core.nth.call(null,vec__11872,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__11872,fstr,rstr,ret_t,axstr){
return (function (p1__11871_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__11871_SHARP_);
});})(idx,vec__11872,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__11875 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11875),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__11875;
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
return (function (p1__11876_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__11876_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__11877 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__11878 = cljs.core.seq.call(null,vec__11877);
var first__11879 = cljs.core.first.call(null,seq__11878);
var seq__11878__$1 = cljs.core.next.call(null,seq__11878);
var p = first__11879;
var first__11879__$1 = cljs.core.first.call(null,seq__11878__$1);
var seq__11878__$2 = cljs.core.next.call(null,seq__11878__$1);
var ts = first__11879__$1;
var first__11879__$2 = cljs.core.first.call(null,seq__11878__$2);
var seq__11878__$3 = cljs.core.next.call(null,seq__11878__$2);
var n = first__11879__$2;
var xs = seq__11878__$3;
if(cljs.core.truth_((function (){var and__7406__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__7406__auto__){
var and__7406__auto____$1 = ts;
if(cljs.core.truth_(and__7406__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__7406__auto____$1;
}
} else {
return and__7406__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__11880 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__11881 = cljs.core.seq.call(null,vec__11880);
var first__11882 = cljs.core.first.call(null,seq__11881);
var seq__11881__$1 = cljs.core.next.call(null,seq__11881);
var p = first__11882;
var first__11882__$1 = cljs.core.first.call(null,seq__11881__$1);
var seq__11881__$2 = cljs.core.next.call(null,seq__11881__$1);
var ts = first__11882__$1;
var xs = seq__11881__$2;
if(cljs.core.truth_((function (){var and__7406__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__7406__auto__){
var and__7406__auto____$1 = ts;
if(cljs.core.truth_(and__7406__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__7406__auto____$1;
}
} else {
return and__7406__auto__;
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
var G__11885 = arguments.length;
switch (G__11885) {
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
var vec__11893 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__11883_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__11883_SHARP_);
} else {
return p1__11883_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__11894 = cljs.core.seq.call(null,vec__11893);
var first__11895 = cljs.core.first.call(null,seq__11894);
var seq__11894__$1 = cljs.core.next.call(null,seq__11894);
var x = first__11895;
var ys = seq__11894__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__11896 = cljs.core.seq.call(null,ys);
var chunk__11897 = null;
var count__11898 = (0);
var i__11899 = (0);
while(true){
if((i__11899 < count__11898)){
var next_line = cljs.core._nth.call(null,chunk__11897,i__11899);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__11905 = seq__11896;
var G__11906 = chunk__11897;
var G__11907 = count__11898;
var G__11908 = (i__11899 + (1));
seq__11896 = G__11905;
chunk__11897 = G__11906;
count__11898 = G__11907;
i__11899 = G__11908;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11896);
if(temp__4657__auto__){
var seq__11896__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11896__$1)){
var c__8257__auto__ = cljs.core.chunk_first.call(null,seq__11896__$1);
var G__11909 = cljs.core.chunk_rest.call(null,seq__11896__$1);
var G__11910 = c__8257__auto__;
var G__11911 = cljs.core.count.call(null,c__8257__auto__);
var G__11912 = (0);
seq__11896 = G__11909;
chunk__11897 = G__11910;
count__11898 = G__11911;
i__11899 = G__11912;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__11896__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__11913 = cljs.core.next.call(null,seq__11896__$1);
var G__11914 = null;
var G__11915 = (0);
var G__11916 = (0);
seq__11896 = G__11913;
chunk__11897 = G__11914;
count__11898 = G__11915;
i__11899 = G__11916;
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

var seq__11900_11917 = cljs.core.seq.call(null,docs__$2);
var chunk__11901_11918 = null;
var count__11902_11919 = (0);
var i__11903_11920 = (0);
while(true){
if((i__11903_11920 < count__11902_11919)){
var e_11921 = cljs.core._nth.call(null,chunk__11901_11918,i__11903_11920);
if(cljs.core.truth_(e_11921)){
print_comment_lines.call(null,e_11921);
} else {
}

var G__11922 = seq__11900_11917;
var G__11923 = chunk__11901_11918;
var G__11924 = count__11902_11919;
var G__11925 = (i__11903_11920 + (1));
seq__11900_11917 = G__11922;
chunk__11901_11918 = G__11923;
count__11902_11919 = G__11924;
i__11903_11920 = G__11925;
continue;
} else {
var temp__4657__auto___11926 = cljs.core.seq.call(null,seq__11900_11917);
if(temp__4657__auto___11926){
var seq__11900_11927__$1 = temp__4657__auto___11926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11900_11927__$1)){
var c__8257__auto___11928 = cljs.core.chunk_first.call(null,seq__11900_11927__$1);
var G__11929 = cljs.core.chunk_rest.call(null,seq__11900_11927__$1);
var G__11930 = c__8257__auto___11928;
var G__11931 = cljs.core.count.call(null,c__8257__auto___11928);
var G__11932 = (0);
seq__11900_11917 = G__11929;
chunk__11901_11918 = G__11930;
count__11902_11919 = G__11931;
i__11903_11920 = G__11932;
continue;
} else {
var e_11933 = cljs.core.first.call(null,seq__11900_11927__$1);
if(cljs.core.truth_(e_11933)){
print_comment_lines.call(null,e_11933);
} else {
}

var G__11934 = cljs.core.next.call(null,seq__11900_11927__$1);
var G__11935 = null;
var G__11936 = (0);
var G__11937 = (0);
seq__11900_11917 = G__11934;
chunk__11901_11918 = G__11935;
count__11902_11919 = G__11936;
i__11903_11920 = G__11937;
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
var and__7406__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__11939_SHARP_){
return goog.string.startsWith(p1__11939_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__7406__auto__)){
var and__7406__auto____$1 = opts;
if(cljs.core.truth_(and__7406__auto____$1)){
var and__7406__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__7406__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__7406__auto____$2;
}
} else {
return and__7406__auto____$1;
}
} else {
return and__7406__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__11940){
var map__11941 = p__11940;
var map__11941__$1 = ((((!((map__11941 == null)))?((((map__11941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11941):map__11941);
var name = cljs.core.get.call(null,map__11941__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__11941__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__11941__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__11941__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__11941__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__11941__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__11941__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__11941__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__11941__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__7418__auto__ = init;
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
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

if(cljs.core.truth_((function (){var and__7406__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__7406__auto__){
return test;
} else {
return and__7406__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__11943){
var map__11944 = p__11943;
var map__11944__$1 = ((((!((map__11944 == null)))?((((map__11944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11944):map__11944);
var name = cljs.core.get.call(null,map__11944__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__11944__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__11944__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__11946_11964 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__11947_11965 = null;
var count__11948_11966 = (0);
var i__11949_11967 = (0);
while(true){
if((i__11949_11967 < count__11948_11966)){
var vec__11950_11968 = cljs.core._nth.call(null,chunk__11947_11965,i__11949_11967);
var i_11969 = cljs.core.nth.call(null,vec__11950_11968,(0),null);
var param_11970 = cljs.core.nth.call(null,vec__11950_11968,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_11970);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__11971 = seq__11946_11964;
var G__11972 = chunk__11947_11965;
var G__11973 = count__11948_11966;
var G__11974 = (i__11949_11967 + (1));
seq__11946_11964 = G__11971;
chunk__11947_11965 = G__11972;
count__11948_11966 = G__11973;
i__11949_11967 = G__11974;
continue;
} else {
var temp__4657__auto___11975 = cljs.core.seq.call(null,seq__11946_11964);
if(temp__4657__auto___11975){
var seq__11946_11976__$1 = temp__4657__auto___11975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11946_11976__$1)){
var c__8257__auto___11977 = cljs.core.chunk_first.call(null,seq__11946_11976__$1);
var G__11978 = cljs.core.chunk_rest.call(null,seq__11946_11976__$1);
var G__11979 = c__8257__auto___11977;
var G__11980 = cljs.core.count.call(null,c__8257__auto___11977);
var G__11981 = (0);
seq__11946_11964 = G__11978;
chunk__11947_11965 = G__11979;
count__11948_11966 = G__11980;
i__11949_11967 = G__11981;
continue;
} else {
var vec__11953_11982 = cljs.core.first.call(null,seq__11946_11976__$1);
var i_11983 = cljs.core.nth.call(null,vec__11953_11982,(0),null);
var param_11984 = cljs.core.nth.call(null,vec__11953_11982,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_11984);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__11985 = cljs.core.next.call(null,seq__11946_11976__$1);
var G__11986 = null;
var G__11987 = (0);
var G__11988 = (0);
seq__11946_11964 = G__11985;
chunk__11947_11965 = G__11986;
count__11948_11966 = G__11987;
i__11949_11967 = G__11988;
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

var seq__11956_11989 = cljs.core.seq.call(null,params);
var chunk__11957_11990 = null;
var count__11958_11991 = (0);
var i__11959_11992 = (0);
while(true){
if((i__11959_11992 < count__11958_11991)){
var param_11993 = cljs.core._nth.call(null,chunk__11957_11990,i__11959_11992);
cljs.compiler.emit.call(null,param_11993);

if(cljs.core._EQ_.call(null,param_11993,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__11994 = seq__11956_11989;
var G__11995 = chunk__11957_11990;
var G__11996 = count__11958_11991;
var G__11997 = (i__11959_11992 + (1));
seq__11956_11989 = G__11994;
chunk__11957_11990 = G__11995;
count__11958_11991 = G__11996;
i__11959_11992 = G__11997;
continue;
} else {
var temp__4657__auto___11998 = cljs.core.seq.call(null,seq__11956_11989);
if(temp__4657__auto___11998){
var seq__11956_11999__$1 = temp__4657__auto___11998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11956_11999__$1)){
var c__8257__auto___12000 = cljs.core.chunk_first.call(null,seq__11956_11999__$1);
var G__12001 = cljs.core.chunk_rest.call(null,seq__11956_11999__$1);
var G__12002 = c__8257__auto___12000;
var G__12003 = cljs.core.count.call(null,c__8257__auto___12000);
var G__12004 = (0);
seq__11956_11989 = G__12001;
chunk__11957_11990 = G__12002;
count__11958_11991 = G__12003;
i__11959_11992 = G__12004;
continue;
} else {
var param_12005 = cljs.core.first.call(null,seq__11956_11999__$1);
cljs.compiler.emit.call(null,param_12005);

if(cljs.core._EQ_.call(null,param_12005,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12006 = cljs.core.next.call(null,seq__11956_11999__$1);
var G__12007 = null;
var G__12008 = (0);
var G__12009 = (0);
seq__11956_11989 = G__12006;
chunk__11957_11990 = G__12007;
count__11958_11991 = G__12008;
i__11959_11992 = G__12009;
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

var seq__11960_12010 = cljs.core.seq.call(null,params);
var chunk__11961_12011 = null;
var count__11962_12012 = (0);
var i__11963_12013 = (0);
while(true){
if((i__11963_12013 < count__11962_12012)){
var param_12014 = cljs.core._nth.call(null,chunk__11961_12011,i__11963_12013);
cljs.compiler.emit.call(null,param_12014);

if(cljs.core._EQ_.call(null,param_12014,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12015 = seq__11960_12010;
var G__12016 = chunk__11961_12011;
var G__12017 = count__11962_12012;
var G__12018 = (i__11963_12013 + (1));
seq__11960_12010 = G__12015;
chunk__11961_12011 = G__12016;
count__11962_12012 = G__12017;
i__11963_12013 = G__12018;
continue;
} else {
var temp__4657__auto___12019 = cljs.core.seq.call(null,seq__11960_12010);
if(temp__4657__auto___12019){
var seq__11960_12020__$1 = temp__4657__auto___12019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11960_12020__$1)){
var c__8257__auto___12021 = cljs.core.chunk_first.call(null,seq__11960_12020__$1);
var G__12022 = cljs.core.chunk_rest.call(null,seq__11960_12020__$1);
var G__12023 = c__8257__auto___12021;
var G__12024 = cljs.core.count.call(null,c__8257__auto___12021);
var G__12025 = (0);
seq__11960_12010 = G__12022;
chunk__11961_12011 = G__12023;
count__11962_12012 = G__12024;
i__11963_12013 = G__12025;
continue;
} else {
var param_12026 = cljs.core.first.call(null,seq__11960_12020__$1);
cljs.compiler.emit.call(null,param_12026);

if(cljs.core._EQ_.call(null,param_12026,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12027 = cljs.core.next.call(null,seq__11960_12020__$1);
var G__12028 = null;
var G__12029 = (0);
var G__12030 = (0);
seq__11960_12010 = G__12027;
chunk__11961_12011 = G__12028;
count__11962_12012 = G__12029;
i__11963_12013 = G__12030;
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
var seq__12031 = cljs.core.seq.call(null,params);
var chunk__12032 = null;
var count__12033 = (0);
var i__12034 = (0);
while(true){
if((i__12034 < count__12033)){
var param = cljs.core._nth.call(null,chunk__12032,i__12034);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12035 = seq__12031;
var G__12036 = chunk__12032;
var G__12037 = count__12033;
var G__12038 = (i__12034 + (1));
seq__12031 = G__12035;
chunk__12032 = G__12036;
count__12033 = G__12037;
i__12034 = G__12038;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12031);
if(temp__4657__auto__){
var seq__12031__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12031__$1)){
var c__8257__auto__ = cljs.core.chunk_first.call(null,seq__12031__$1);
var G__12039 = cljs.core.chunk_rest.call(null,seq__12031__$1);
var G__12040 = c__8257__auto__;
var G__12041 = cljs.core.count.call(null,c__8257__auto__);
var G__12042 = (0);
seq__12031 = G__12039;
chunk__12032 = G__12040;
count__12033 = G__12041;
i__12034 = G__12042;
continue;
} else {
var param = cljs.core.first.call(null,seq__12031__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12043 = cljs.core.next.call(null,seq__12031__$1);
var G__12044 = null;
var G__12045 = (0);
var G__12046 = (0);
seq__12031 = G__12043;
chunk__12032 = G__12044;
count__12033 = G__12045;
i__12034 = G__12046;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__12047){
var map__12048 = p__12047;
var map__12048__$1 = ((((!((map__12048 == null)))?((((map__12048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12048.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12048):map__12048);
var type = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__12050){
var map__12051 = p__12050;
var map__12051__$1 = ((((!((map__12051 == null)))?((((map__12051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12051):map__12051);
var f = map__12051__$1;
var type = cljs.core.get.call(null,map__12051__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__12051__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__12051__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__12051__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__12051__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__12051__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__12051__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__12051__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_12061__$1 = (function (){var or__7418__auto__ = name;
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_12062 = cljs.compiler.munge.call(null,name_12061__$1);
var delegate_name_12063 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_12062),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_12063," = function (");

var seq__12053_12064 = cljs.core.seq.call(null,params);
var chunk__12054_12065 = null;
var count__12055_12066 = (0);
var i__12056_12067 = (0);
while(true){
if((i__12056_12067 < count__12055_12066)){
var param_12068 = cljs.core._nth.call(null,chunk__12054_12065,i__12056_12067);
cljs.compiler.emit.call(null,param_12068);

if(cljs.core._EQ_.call(null,param_12068,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12069 = seq__12053_12064;
var G__12070 = chunk__12054_12065;
var G__12071 = count__12055_12066;
var G__12072 = (i__12056_12067 + (1));
seq__12053_12064 = G__12069;
chunk__12054_12065 = G__12070;
count__12055_12066 = G__12071;
i__12056_12067 = G__12072;
continue;
} else {
var temp__4657__auto___12073 = cljs.core.seq.call(null,seq__12053_12064);
if(temp__4657__auto___12073){
var seq__12053_12074__$1 = temp__4657__auto___12073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12053_12074__$1)){
var c__8257__auto___12075 = cljs.core.chunk_first.call(null,seq__12053_12074__$1);
var G__12076 = cljs.core.chunk_rest.call(null,seq__12053_12074__$1);
var G__12077 = c__8257__auto___12075;
var G__12078 = cljs.core.count.call(null,c__8257__auto___12075);
var G__12079 = (0);
seq__12053_12064 = G__12076;
chunk__12054_12065 = G__12077;
count__12055_12066 = G__12078;
i__12056_12067 = G__12079;
continue;
} else {
var param_12080 = cljs.core.first.call(null,seq__12053_12074__$1);
cljs.compiler.emit.call(null,param_12080);

if(cljs.core._EQ_.call(null,param_12080,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12081 = cljs.core.next.call(null,seq__12053_12074__$1);
var G__12082 = null;
var G__12083 = (0);
var G__12084 = (0);
seq__12053_12064 = G__12081;
chunk__12054_12065 = G__12082;
count__12055_12066 = G__12083;
i__12056_12067 = G__12084;
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

cljs.compiler.emitln.call(null,"var ",mname_12062," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_12085 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_12085,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_12063,".call(this,");

var seq__12057_12086 = cljs.core.seq.call(null,params);
var chunk__12058_12087 = null;
var count__12059_12088 = (0);
var i__12060_12089 = (0);
while(true){
if((i__12060_12089 < count__12059_12088)){
var param_12090 = cljs.core._nth.call(null,chunk__12058_12087,i__12060_12089);
cljs.compiler.emit.call(null,param_12090);

if(cljs.core._EQ_.call(null,param_12090,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12091 = seq__12057_12086;
var G__12092 = chunk__12058_12087;
var G__12093 = count__12059_12088;
var G__12094 = (i__12060_12089 + (1));
seq__12057_12086 = G__12091;
chunk__12058_12087 = G__12092;
count__12059_12088 = G__12093;
i__12060_12089 = G__12094;
continue;
} else {
var temp__4657__auto___12095 = cljs.core.seq.call(null,seq__12057_12086);
if(temp__4657__auto___12095){
var seq__12057_12096__$1 = temp__4657__auto___12095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12057_12096__$1)){
var c__8257__auto___12097 = cljs.core.chunk_first.call(null,seq__12057_12096__$1);
var G__12098 = cljs.core.chunk_rest.call(null,seq__12057_12096__$1);
var G__12099 = c__8257__auto___12097;
var G__12100 = cljs.core.count.call(null,c__8257__auto___12097);
var G__12101 = (0);
seq__12057_12086 = G__12098;
chunk__12058_12087 = G__12099;
count__12059_12088 = G__12100;
i__12060_12089 = G__12101;
continue;
} else {
var param_12102 = cljs.core.first.call(null,seq__12057_12096__$1);
cljs.compiler.emit.call(null,param_12102);

if(cljs.core._EQ_.call(null,param_12102,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12103 = cljs.core.next.call(null,seq__12057_12096__$1);
var G__12104 = null;
var G__12105 = (0);
var G__12106 = (0);
seq__12057_12086 = G__12103;
chunk__12058_12087 = G__12104;
count__12059_12088 = G__12105;
i__12060_12089 = G__12106;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_12062,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_12062,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_12061__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_12062,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_12063,";");

cljs.compiler.emitln.call(null,"return ",mname_12062,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__12110){
var map__12111 = p__12110;
var map__12111__$1 = ((((!((map__12111 == null)))?((((map__12111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12111):map__12111);
var name = cljs.core.get.call(null,map__12111__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__12111__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__12111__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__12111__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__12111__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__12111__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__12111__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__12111,map__12111__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__12107_SHARP_){
var and__7406__auto__ = p1__12107_SHARP_;
if(cljs.core.truth_(and__7406__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__12107_SHARP_));
} else {
return and__7406__auto__;
}
});})(map__12111,map__12111__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_12146__$1 = (function (){var or__7418__auto__ = name;
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_12147 = cljs.compiler.munge.call(null,name_12146__$1);
var maxparams_12148 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_12149 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_12146__$1,mname_12147,maxparams_12148,loop_locals,map__12111,map__12111__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_12147),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_12146__$1,mname_12147,maxparams_12148,loop_locals,map__12111,map__12111__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_12150 = cljs.core.sort_by.call(null,((function (name_12146__$1,mname_12147,maxparams_12148,mmap_12149,loop_locals,map__12111,map__12111__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__12108_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__12108_SHARP_)));
});})(name_12146__$1,mname_12147,maxparams_12148,mmap_12149,loop_locals,map__12111,map__12111__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_12149));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_12147," = null;");

var seq__12113_12151 = cljs.core.seq.call(null,ms_12150);
var chunk__12114_12152 = null;
var count__12115_12153 = (0);
var i__12116_12154 = (0);
while(true){
if((i__12116_12154 < count__12115_12153)){
var vec__12117_12155 = cljs.core._nth.call(null,chunk__12114_12152,i__12116_12154);
var n_12156 = cljs.core.nth.call(null,vec__12117_12155,(0),null);
var meth_12157 = cljs.core.nth.call(null,vec__12117_12155,(1),null);
cljs.compiler.emits.call(null,"var ",n_12156," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12157))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_12157);
} else {
cljs.compiler.emit_fn_method.call(null,meth_12157);
}

cljs.compiler.emitln.call(null,";");

var G__12158 = seq__12113_12151;
var G__12159 = chunk__12114_12152;
var G__12160 = count__12115_12153;
var G__12161 = (i__12116_12154 + (1));
seq__12113_12151 = G__12158;
chunk__12114_12152 = G__12159;
count__12115_12153 = G__12160;
i__12116_12154 = G__12161;
continue;
} else {
var temp__4657__auto___12162 = cljs.core.seq.call(null,seq__12113_12151);
if(temp__4657__auto___12162){
var seq__12113_12163__$1 = temp__4657__auto___12162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12113_12163__$1)){
var c__8257__auto___12164 = cljs.core.chunk_first.call(null,seq__12113_12163__$1);
var G__12165 = cljs.core.chunk_rest.call(null,seq__12113_12163__$1);
var G__12166 = c__8257__auto___12164;
var G__12167 = cljs.core.count.call(null,c__8257__auto___12164);
var G__12168 = (0);
seq__12113_12151 = G__12165;
chunk__12114_12152 = G__12166;
count__12115_12153 = G__12167;
i__12116_12154 = G__12168;
continue;
} else {
var vec__12120_12169 = cljs.core.first.call(null,seq__12113_12163__$1);
var n_12170 = cljs.core.nth.call(null,vec__12120_12169,(0),null);
var meth_12171 = cljs.core.nth.call(null,vec__12120_12169,(1),null);
cljs.compiler.emits.call(null,"var ",n_12170," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12171))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_12171);
} else {
cljs.compiler.emit_fn_method.call(null,meth_12171);
}

cljs.compiler.emitln.call(null,";");

var G__12172 = cljs.core.next.call(null,seq__12113_12163__$1);
var G__12173 = null;
var G__12174 = (0);
var G__12175 = (0);
seq__12113_12151 = G__12172;
chunk__12114_12152 = G__12173;
count__12115_12153 = G__12174;
i__12116_12154 = G__12175;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_12147," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_12148),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_12148)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_12148));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__12123_12176 = cljs.core.seq.call(null,ms_12150);
var chunk__12124_12177 = null;
var count__12125_12178 = (0);
var i__12126_12179 = (0);
while(true){
if((i__12126_12179 < count__12125_12178)){
var vec__12127_12180 = cljs.core._nth.call(null,chunk__12124_12177,i__12126_12179);
var n_12181 = cljs.core.nth.call(null,vec__12127_12180,(0),null);
var meth_12182 = cljs.core.nth.call(null,vec__12127_12180,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12182))){
cljs.compiler.emitln.call(null,"default:");

var restarg_12183 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_12183," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_12184 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_12183," = new cljs.core.IndexedSeq(",a_12184,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_12181,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_12148)),(((cljs.core.count.call(null,maxparams_12148) > (1)))?", ":null),restarg_12183,");");
} else {
var pcnt_12185 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12182));
cljs.compiler.emitln.call(null,"case ",pcnt_12185,":");

cljs.compiler.emitln.call(null,"return ",n_12181,".call(this",(((pcnt_12185 === (0)))?null:cljs.core._conj.call(null,(function (){var x__8280__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_12185,maxparams_12148));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),",")),");");
}

var G__12186 = seq__12123_12176;
var G__12187 = chunk__12124_12177;
var G__12188 = count__12125_12178;
var G__12189 = (i__12126_12179 + (1));
seq__12123_12176 = G__12186;
chunk__12124_12177 = G__12187;
count__12125_12178 = G__12188;
i__12126_12179 = G__12189;
continue;
} else {
var temp__4657__auto___12190 = cljs.core.seq.call(null,seq__12123_12176);
if(temp__4657__auto___12190){
var seq__12123_12191__$1 = temp__4657__auto___12190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12123_12191__$1)){
var c__8257__auto___12192 = cljs.core.chunk_first.call(null,seq__12123_12191__$1);
var G__12193 = cljs.core.chunk_rest.call(null,seq__12123_12191__$1);
var G__12194 = c__8257__auto___12192;
var G__12195 = cljs.core.count.call(null,c__8257__auto___12192);
var G__12196 = (0);
seq__12123_12176 = G__12193;
chunk__12124_12177 = G__12194;
count__12125_12178 = G__12195;
i__12126_12179 = G__12196;
continue;
} else {
var vec__12130_12197 = cljs.core.first.call(null,seq__12123_12191__$1);
var n_12198 = cljs.core.nth.call(null,vec__12130_12197,(0),null);
var meth_12199 = cljs.core.nth.call(null,vec__12130_12197,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12199))){
cljs.compiler.emitln.call(null,"default:");

var restarg_12200 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_12200," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_12201 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_12200," = new cljs.core.IndexedSeq(",a_12201,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_12198,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_12148)),(((cljs.core.count.call(null,maxparams_12148) > (1)))?", ":null),restarg_12200,");");
} else {
var pcnt_12202 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12199));
cljs.compiler.emitln.call(null,"case ",pcnt_12202,":");

cljs.compiler.emitln.call(null,"return ",n_12198,".call(this",(((pcnt_12202 === (0)))?null:cljs.core._conj.call(null,(function (){var x__8280__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_12202,maxparams_12148));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),",")),");");
}

var G__12203 = cljs.core.next.call(null,seq__12123_12191__$1);
var G__12204 = null;
var G__12205 = (0);
var G__12206 = (0);
seq__12123_12176 = G__12203;
chunk__12124_12177 = G__12204;
count__12125_12178 = G__12205;
i__12126_12179 = G__12206;
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
cljs.compiler.emitln.call(null,mname_12147,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_12147,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_12146__$1,mname_12147,maxparams_12148,mmap_12149,ms_12150,loop_locals,map__12111,map__12111__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__12109_SHARP_){
var vec__12133 = p1__12109_SHARP_;
var n = cljs.core.nth.call(null,vec__12133,(0),null);
var m = cljs.core.nth.call(null,vec__12133,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_12146__$1,mname_12147,maxparams_12148,mmap_12149,ms_12150,loop_locals,map__12111,map__12111__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_12150),".cljs$lang$applyTo;");
} else {
}

var seq__12136_12207 = cljs.core.seq.call(null,ms_12150);
var chunk__12137_12208 = null;
var count__12138_12209 = (0);
var i__12139_12210 = (0);
while(true){
if((i__12139_12210 < count__12138_12209)){
var vec__12140_12211 = cljs.core._nth.call(null,chunk__12137_12208,i__12139_12210);
var n_12212 = cljs.core.nth.call(null,vec__12140_12211,(0),null);
var meth_12213 = cljs.core.nth.call(null,vec__12140_12211,(1),null);
var c_12214 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12213));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12213))){
cljs.compiler.emitln.call(null,mname_12147,".cljs$core$IFn$_invoke$arity$variadic = ",n_12212,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_12147,".cljs$core$IFn$_invoke$arity$",c_12214," = ",n_12212,";");
}

var G__12215 = seq__12136_12207;
var G__12216 = chunk__12137_12208;
var G__12217 = count__12138_12209;
var G__12218 = (i__12139_12210 + (1));
seq__12136_12207 = G__12215;
chunk__12137_12208 = G__12216;
count__12138_12209 = G__12217;
i__12139_12210 = G__12218;
continue;
} else {
var temp__4657__auto___12219 = cljs.core.seq.call(null,seq__12136_12207);
if(temp__4657__auto___12219){
var seq__12136_12220__$1 = temp__4657__auto___12219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12136_12220__$1)){
var c__8257__auto___12221 = cljs.core.chunk_first.call(null,seq__12136_12220__$1);
var G__12222 = cljs.core.chunk_rest.call(null,seq__12136_12220__$1);
var G__12223 = c__8257__auto___12221;
var G__12224 = cljs.core.count.call(null,c__8257__auto___12221);
var G__12225 = (0);
seq__12136_12207 = G__12222;
chunk__12137_12208 = G__12223;
count__12138_12209 = G__12224;
i__12139_12210 = G__12225;
continue;
} else {
var vec__12143_12226 = cljs.core.first.call(null,seq__12136_12220__$1);
var n_12227 = cljs.core.nth.call(null,vec__12143_12226,(0),null);
var meth_12228 = cljs.core.nth.call(null,vec__12143_12226,(1),null);
var c_12229 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12228));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12228))){
cljs.compiler.emitln.call(null,mname_12147,".cljs$core$IFn$_invoke$arity$variadic = ",n_12227,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_12147,".cljs$core$IFn$_invoke$arity$",c_12229," = ",n_12227,";");
}

var G__12230 = cljs.core.next.call(null,seq__12136_12220__$1);
var G__12231 = null;
var G__12232 = (0);
var G__12233 = (0);
seq__12136_12207 = G__12230;
chunk__12137_12208 = G__12231;
count__12138_12209 = G__12232;
i__12139_12210 = G__12233;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_12147,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__12234){
var map__12235 = p__12234;
var map__12235__$1 = ((((!((map__12235 == null)))?((((map__12235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12235):map__12235);
var statements = cljs.core.get.call(null,map__12235__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__12235__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__12235__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__7406__auto__ = statements;
if(cljs.core.truth_(and__7406__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__7406__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__12237_12241 = cljs.core.seq.call(null,statements);
var chunk__12238_12242 = null;
var count__12239_12243 = (0);
var i__12240_12244 = (0);
while(true){
if((i__12240_12244 < count__12239_12243)){
var s_12245 = cljs.core._nth.call(null,chunk__12238_12242,i__12240_12244);
cljs.compiler.emitln.call(null,s_12245);

var G__12246 = seq__12237_12241;
var G__12247 = chunk__12238_12242;
var G__12248 = count__12239_12243;
var G__12249 = (i__12240_12244 + (1));
seq__12237_12241 = G__12246;
chunk__12238_12242 = G__12247;
count__12239_12243 = G__12248;
i__12240_12244 = G__12249;
continue;
} else {
var temp__4657__auto___12250 = cljs.core.seq.call(null,seq__12237_12241);
if(temp__4657__auto___12250){
var seq__12237_12251__$1 = temp__4657__auto___12250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12237_12251__$1)){
var c__8257__auto___12252 = cljs.core.chunk_first.call(null,seq__12237_12251__$1);
var G__12253 = cljs.core.chunk_rest.call(null,seq__12237_12251__$1);
var G__12254 = c__8257__auto___12252;
var G__12255 = cljs.core.count.call(null,c__8257__auto___12252);
var G__12256 = (0);
seq__12237_12241 = G__12253;
chunk__12238_12242 = G__12254;
count__12239_12243 = G__12255;
i__12240_12244 = G__12256;
continue;
} else {
var s_12257 = cljs.core.first.call(null,seq__12237_12251__$1);
cljs.compiler.emitln.call(null,s_12257);

var G__12258 = cljs.core.next.call(null,seq__12237_12251__$1);
var G__12259 = null;
var G__12260 = (0);
var G__12261 = (0);
seq__12237_12241 = G__12258;
chunk__12238_12242 = G__12259;
count__12239_12243 = G__12260;
i__12240_12244 = G__12261;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__7406__auto__ = statements;
if(cljs.core.truth_(and__7406__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__7406__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__12262){
var map__12263 = p__12262;
var map__12263__$1 = ((((!((map__12263 == null)))?((((map__12263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12263):map__12263);
var env = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__7418__auto__ = name;
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__12265,is_loop){
var map__12266 = p__12265;
var map__12266__$1 = ((((!((map__12266 == null)))?((((map__12266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12266):map__12266);
var bindings = cljs.core.get.call(null,map__12266__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__12266__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__12266__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_12268_12277 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_12268_12277,context,map__12266,map__12266__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_12268_12277,context,map__12266,map__12266__$1,bindings,expr,env))
,bindings):null));

try{var seq__12269_12278 = cljs.core.seq.call(null,bindings);
var chunk__12270_12279 = null;
var count__12271_12280 = (0);
var i__12272_12281 = (0);
while(true){
if((i__12272_12281 < count__12271_12280)){
var map__12273_12282 = cljs.core._nth.call(null,chunk__12270_12279,i__12272_12281);
var map__12273_12283__$1 = ((((!((map__12273_12282 == null)))?((((map__12273_12282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12273_12282.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12273_12282):map__12273_12282);
var binding_12284 = map__12273_12283__$1;
var init_12285 = cljs.core.get.call(null,map__12273_12283__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_12284);

cljs.compiler.emitln.call(null," = ",init_12285,";");

var G__12286 = seq__12269_12278;
var G__12287 = chunk__12270_12279;
var G__12288 = count__12271_12280;
var G__12289 = (i__12272_12281 + (1));
seq__12269_12278 = G__12286;
chunk__12270_12279 = G__12287;
count__12271_12280 = G__12288;
i__12272_12281 = G__12289;
continue;
} else {
var temp__4657__auto___12290 = cljs.core.seq.call(null,seq__12269_12278);
if(temp__4657__auto___12290){
var seq__12269_12291__$1 = temp__4657__auto___12290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12269_12291__$1)){
var c__8257__auto___12292 = cljs.core.chunk_first.call(null,seq__12269_12291__$1);
var G__12293 = cljs.core.chunk_rest.call(null,seq__12269_12291__$1);
var G__12294 = c__8257__auto___12292;
var G__12295 = cljs.core.count.call(null,c__8257__auto___12292);
var G__12296 = (0);
seq__12269_12278 = G__12293;
chunk__12270_12279 = G__12294;
count__12271_12280 = G__12295;
i__12272_12281 = G__12296;
continue;
} else {
var map__12275_12297 = cljs.core.first.call(null,seq__12269_12291__$1);
var map__12275_12298__$1 = ((((!((map__12275_12297 == null)))?((((map__12275_12297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12275_12297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12275_12297):map__12275_12297);
var binding_12299 = map__12275_12298__$1;
var init_12300 = cljs.core.get.call(null,map__12275_12298__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_12299);

cljs.compiler.emitln.call(null," = ",init_12300,";");

var G__12301 = cljs.core.next.call(null,seq__12269_12291__$1);
var G__12302 = null;
var G__12303 = (0);
var G__12304 = (0);
seq__12269_12278 = G__12301;
chunk__12270_12279 = G__12302;
count__12271_12280 = G__12303;
i__12272_12281 = G__12304;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_12268_12277;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__12305){
var map__12306 = p__12305;
var map__12306__$1 = ((((!((map__12306 == null)))?((((map__12306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12306):map__12306);
var frame = cljs.core.get.call(null,map__12306__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__12306__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__12306__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__8363__auto___12308 = cljs.core.count.call(null,exprs);
var i_12309 = (0);
while(true){
if((i_12309 < n__8363__auto___12308)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_12309)," = ",exprs.call(null,i_12309),";");

var G__12310 = (i_12309 + (1));
i_12309 = G__12310;
continue;
} else {
}
break;
}

var n__8363__auto___12311 = cljs.core.count.call(null,exprs);
var i_12312 = (0);
while(true){
if((i_12312 < n__8363__auto___12311)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_12312))," = ",temps.call(null,i_12312),";");

var G__12313 = (i_12312 + (1));
i_12312 = G__12313;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__12314){
var map__12315 = p__12314;
var map__12315__$1 = ((((!((map__12315 == null)))?((((map__12315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12315):map__12315);
var bindings = cljs.core.get.call(null,map__12315__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__12315__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__12315__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__12317_12325 = cljs.core.seq.call(null,bindings);
var chunk__12318_12326 = null;
var count__12319_12327 = (0);
var i__12320_12328 = (0);
while(true){
if((i__12320_12328 < count__12319_12327)){
var map__12321_12329 = cljs.core._nth.call(null,chunk__12318_12326,i__12320_12328);
var map__12321_12330__$1 = ((((!((map__12321_12329 == null)))?((((map__12321_12329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12321_12329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12321_12329):map__12321_12329);
var binding_12331 = map__12321_12330__$1;
var init_12332 = cljs.core.get.call(null,map__12321_12330__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_12331)," = ",init_12332,";");

var G__12333 = seq__12317_12325;
var G__12334 = chunk__12318_12326;
var G__12335 = count__12319_12327;
var G__12336 = (i__12320_12328 + (1));
seq__12317_12325 = G__12333;
chunk__12318_12326 = G__12334;
count__12319_12327 = G__12335;
i__12320_12328 = G__12336;
continue;
} else {
var temp__4657__auto___12337 = cljs.core.seq.call(null,seq__12317_12325);
if(temp__4657__auto___12337){
var seq__12317_12338__$1 = temp__4657__auto___12337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12317_12338__$1)){
var c__8257__auto___12339 = cljs.core.chunk_first.call(null,seq__12317_12338__$1);
var G__12340 = cljs.core.chunk_rest.call(null,seq__12317_12338__$1);
var G__12341 = c__8257__auto___12339;
var G__12342 = cljs.core.count.call(null,c__8257__auto___12339);
var G__12343 = (0);
seq__12317_12325 = G__12340;
chunk__12318_12326 = G__12341;
count__12319_12327 = G__12342;
i__12320_12328 = G__12343;
continue;
} else {
var map__12323_12344 = cljs.core.first.call(null,seq__12317_12338__$1);
var map__12323_12345__$1 = ((((!((map__12323_12344 == null)))?((((map__12323_12344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12323_12344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12323_12344):map__12323_12344);
var binding_12346 = map__12323_12345__$1;
var init_12347 = cljs.core.get.call(null,map__12323_12345__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_12346)," = ",init_12347,";");

var G__12348 = cljs.core.next.call(null,seq__12317_12338__$1);
var G__12349 = null;
var G__12350 = (0);
var G__12351 = (0);
seq__12317_12325 = G__12348;
chunk__12318_12326 = G__12349;
count__12319_12327 = G__12350;
i__12320_12328 = G__12351;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__12354){
var map__12355 = p__12354;
var map__12355__$1 = ((((!((map__12355 == null)))?((((map__12355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12355):map__12355);
var expr = map__12355__$1;
var f = cljs.core.get.call(null,map__12355__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__12355__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12355__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__7406__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__7406__auto__){
var and__7406__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__7406__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__7406__auto____$1;
}
} else {
return and__7406__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__7406__auto__ = protocol;
if(cljs.core.truth_(and__7406__auto__)){
var and__7406__auto____$1 = tag;
if(cljs.core.truth_(and__7406__auto____$1)){
var or__7418__auto__ = (function (){var and__7406__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__7406__auto____$2){
var and__7406__auto____$3 = protocol;
if(cljs.core.truth_(and__7406__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__7406__auto____$3;
}
} else {
return and__7406__auto____$2;
}
})();
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
var and__7406__auto____$2 = (function (){var or__7418__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__7418__auto____$1){
return or__7418__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__7406__auto____$2)){
var or__7418__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__7418__auto____$1){
return or__7418__auto____$1;
} else {
var and__7406__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__7406__auto____$3){
var and__7406__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__7406__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__7406__auto____$4;
}
} else {
return and__7406__auto____$3;
}
}
} else {
return and__7406__auto____$2;
}
}
} else {
return and__7406__auto____$1;
}
} else {
return and__7406__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__7418__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__7418__auto__){
return or__7418__auto__;
} else {
var or__7418__auto____$1 = (function (){var temp__4657__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__7418__auto____$1)){
return or__7418__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__12357 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__7406__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__7406__auto__)){
return (arity > mfa);
} else {
return and__7406__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12355,map__12355__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12355,map__12355__$1,expr,f,args,env){
return (function (p1__12352_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__12352_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12355,map__12355__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12355,map__12355__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12355,map__12355__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12355,map__12355__$1,expr,f,args,env){
return (function (p1__12353_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__12353_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12355,map__12355__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12355,map__12355__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__12357,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__12357,(1),null);
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_12360 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_12360,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_12361 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_12361,args)),(((mfa_12361 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_12361,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__7418__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
var or__7418__auto____$1 = js_QMARK_;
if(or__7418__auto____$1){
return or__7418__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797)))){
var fprop_12362 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_12362," ? ",f__$1,fprop_12362,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_12362," ? ",f__$1,fprop_12362,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__12363){
var map__12364 = p__12363;
var map__12364__$1 = ((((!((map__12364 == null)))?((((map__12364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12364):map__12364);
var ctor = cljs.core.get.call(null,map__12364__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__12364__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12364__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__12366){
var map__12367 = p__12366;
var map__12367__$1 = ((((!((map__12367 == null)))?((((map__12367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12367.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12367):map__12367);
var target = cljs.core.get.call(null,map__12367__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__12367__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__12367__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__12369 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__12369__$1 = ((((!((map__12369 == null)))?((((map__12369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12369):map__12369);
var options = cljs.core.get.call(null,map__12369__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__12369__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__12370 = options;
var map__12370__$1 = ((((!((map__12370 == null)))?((((map__12370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12370):map__12370);
var target = cljs.core.get.call(null,map__12370__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__12370__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__12371 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__12377 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__12377__$1 = ((((!((map__12377 == null)))?((((map__12377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12377):map__12377);
var node_libs = cljs.core.get.call(null,map__12377__$1,true);
var libs_to_load = cljs.core.get.call(null,map__12377__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__12371,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__12371,(1),null);
var map__12374 = cljs.core.group_by.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__12374__$1 = ((((!((map__12374 == null)))?((((map__12374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12374):map__12374);
var global_exports_libs = cljs.core.get.call(null,map__12374__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__12374__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__12380_12396 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__12381_12397 = null;
var count__12382_12398 = (0);
var i__12383_12399 = (0);
while(true){
if((i__12383_12399 < count__12382_12398)){
var lib_12400 = cljs.core._nth.call(null,chunk__12381_12397,i__12383_12399);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_12400)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__7418__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12400),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12400),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__7418__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12400),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12400),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12400),"');");

}
}
}

var G__12401 = seq__12380_12396;
var G__12402 = chunk__12381_12397;
var G__12403 = count__12382_12398;
var G__12404 = (i__12383_12399 + (1));
seq__12380_12396 = G__12401;
chunk__12381_12397 = G__12402;
count__12382_12398 = G__12403;
i__12383_12399 = G__12404;
continue;
} else {
var temp__4657__auto___12405 = cljs.core.seq.call(null,seq__12380_12396);
if(temp__4657__auto___12405){
var seq__12380_12406__$1 = temp__4657__auto___12405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12380_12406__$1)){
var c__8257__auto___12407 = cljs.core.chunk_first.call(null,seq__12380_12406__$1);
var G__12408 = cljs.core.chunk_rest.call(null,seq__12380_12406__$1);
var G__12409 = c__8257__auto___12407;
var G__12410 = cljs.core.count.call(null,c__8257__auto___12407);
var G__12411 = (0);
seq__12380_12396 = G__12408;
chunk__12381_12397 = G__12409;
count__12382_12398 = G__12410;
i__12383_12399 = G__12411;
continue;
} else {
var lib_12412 = cljs.core.first.call(null,seq__12380_12406__$1);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_12412)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__7418__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12412),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12412),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__7418__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12412),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12412),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12412),"');");

}
}
}

var G__12413 = cljs.core.next.call(null,seq__12380_12406__$1);
var G__12414 = null;
var G__12415 = (0);
var G__12416 = (0);
seq__12380_12396 = G__12413;
chunk__12381_12397 = G__12414;
count__12382_12398 = G__12415;
i__12383_12399 = G__12416;
continue;
}
} else {
}
}
break;
}

var seq__12384_12417 = cljs.core.seq.call(null,node_libs);
var chunk__12385_12418 = null;
var count__12386_12419 = (0);
var i__12387_12420 = (0);
while(true){
if((i__12387_12420 < count__12386_12419)){
var lib_12421 = cljs.core._nth.call(null,chunk__12385_12418,i__12387_12420);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_12421)," = require('",lib_12421,"');");

var G__12422 = seq__12384_12417;
var G__12423 = chunk__12385_12418;
var G__12424 = count__12386_12419;
var G__12425 = (i__12387_12420 + (1));
seq__12384_12417 = G__12422;
chunk__12385_12418 = G__12423;
count__12386_12419 = G__12424;
i__12387_12420 = G__12425;
continue;
} else {
var temp__4657__auto___12426 = cljs.core.seq.call(null,seq__12384_12417);
if(temp__4657__auto___12426){
var seq__12384_12427__$1 = temp__4657__auto___12426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12384_12427__$1)){
var c__8257__auto___12428 = cljs.core.chunk_first.call(null,seq__12384_12427__$1);
var G__12429 = cljs.core.chunk_rest.call(null,seq__12384_12427__$1);
var G__12430 = c__8257__auto___12428;
var G__12431 = cljs.core.count.call(null,c__8257__auto___12428);
var G__12432 = (0);
seq__12384_12417 = G__12429;
chunk__12385_12418 = G__12430;
count__12386_12419 = G__12431;
i__12387_12420 = G__12432;
continue;
} else {
var lib_12433 = cljs.core.first.call(null,seq__12384_12427__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_12433)," = require('",lib_12433,"');");

var G__12434 = cljs.core.next.call(null,seq__12384_12427__$1);
var G__12435 = null;
var G__12436 = (0);
var G__12437 = (0);
seq__12384_12417 = G__12434;
chunk__12385_12418 = G__12435;
count__12386_12419 = G__12436;
i__12387_12420 = G__12437;
continue;
}
} else {
}
}
break;
}

var seq__12388_12438 = cljs.core.seq.call(null,global_exports_libs);
var chunk__12389_12439 = null;
var count__12390_12440 = (0);
var i__12391_12441 = (0);
while(true){
if((i__12391_12441 < count__12390_12440)){
var lib_12442 = cljs.core._nth.call(null,chunk__12389_12439,i__12391_12441);
var map__12392_12443 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_12442));
var map__12392_12444__$1 = ((((!((map__12392_12443 == null)))?((((map__12392_12443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12392_12443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12392_12443):map__12392_12443);
var global_exports_12445 = cljs.core.get.call(null,map__12392_12444__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_12442)," = goog.global.",cljs.core.get.call(null,global_exports_12445,cljs.core.symbol.call(null,lib_12442)),";");

var G__12446 = seq__12388_12438;
var G__12447 = chunk__12389_12439;
var G__12448 = count__12390_12440;
var G__12449 = (i__12391_12441 + (1));
seq__12388_12438 = G__12446;
chunk__12389_12439 = G__12447;
count__12390_12440 = G__12448;
i__12391_12441 = G__12449;
continue;
} else {
var temp__4657__auto___12450 = cljs.core.seq.call(null,seq__12388_12438);
if(temp__4657__auto___12450){
var seq__12388_12451__$1 = temp__4657__auto___12450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12388_12451__$1)){
var c__8257__auto___12452 = cljs.core.chunk_first.call(null,seq__12388_12451__$1);
var G__12453 = cljs.core.chunk_rest.call(null,seq__12388_12451__$1);
var G__12454 = c__8257__auto___12452;
var G__12455 = cljs.core.count.call(null,c__8257__auto___12452);
var G__12456 = (0);
seq__12388_12438 = G__12453;
chunk__12389_12439 = G__12454;
count__12390_12440 = G__12455;
i__12391_12441 = G__12456;
continue;
} else {
var lib_12457 = cljs.core.first.call(null,seq__12388_12451__$1);
var map__12394_12458 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_12457));
var map__12394_12459__$1 = ((((!((map__12394_12458 == null)))?((((map__12394_12458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12394_12458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12394_12458):map__12394_12458);
var global_exports_12460 = cljs.core.get.call(null,map__12394_12459__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_12457)," = goog.global.",cljs.core.get.call(null,global_exports_12460,cljs.core.symbol.call(null,lib_12457)),";");

var G__12461 = cljs.core.next.call(null,seq__12388_12451__$1);
var G__12462 = null;
var G__12463 = (0);
var G__12464 = (0);
seq__12388_12438 = G__12461;
chunk__12389_12439 = G__12462;
count__12390_12440 = G__12463;
i__12391_12441 = G__12464;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__12465){
var map__12466 = p__12465;
var map__12466__$1 = ((((!((map__12466 == null)))?((((map__12466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12466):map__12466);
var name = cljs.core.get.call(null,map__12466__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__12466__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__12466__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__12466__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__12466__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__12466__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__12466__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__12468){
var map__12469 = p__12468;
var map__12469__$1 = ((((!((map__12469 == null)))?((((map__12469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12469):map__12469);
var name = cljs.core.get.call(null,map__12469__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__12469__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__12469__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__12469__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__12469__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__12469__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__12469__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__12471){
var map__12472 = p__12471;
var map__12472__$1 = ((((!((map__12472 == null)))?((((map__12472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12472):map__12472);
var t = cljs.core.get.call(null,map__12472__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__12472__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__12472__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__12472__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__12472__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__12474_12492 = cljs.core.seq.call(null,protocols);
var chunk__12475_12493 = null;
var count__12476_12494 = (0);
var i__12477_12495 = (0);
while(true){
if((i__12477_12495 < count__12476_12494)){
var protocol_12496 = cljs.core._nth.call(null,chunk__12475_12493,i__12477_12495);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12496)].join('')),"}");

var G__12497 = seq__12474_12492;
var G__12498 = chunk__12475_12493;
var G__12499 = count__12476_12494;
var G__12500 = (i__12477_12495 + (1));
seq__12474_12492 = G__12497;
chunk__12475_12493 = G__12498;
count__12476_12494 = G__12499;
i__12477_12495 = G__12500;
continue;
} else {
var temp__4657__auto___12501 = cljs.core.seq.call(null,seq__12474_12492);
if(temp__4657__auto___12501){
var seq__12474_12502__$1 = temp__4657__auto___12501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12474_12502__$1)){
var c__8257__auto___12503 = cljs.core.chunk_first.call(null,seq__12474_12502__$1);
var G__12504 = cljs.core.chunk_rest.call(null,seq__12474_12502__$1);
var G__12505 = c__8257__auto___12503;
var G__12506 = cljs.core.count.call(null,c__8257__auto___12503);
var G__12507 = (0);
seq__12474_12492 = G__12504;
chunk__12475_12493 = G__12505;
count__12476_12494 = G__12506;
i__12477_12495 = G__12507;
continue;
} else {
var protocol_12508 = cljs.core.first.call(null,seq__12474_12502__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12508)].join('')),"}");

var G__12509 = cljs.core.next.call(null,seq__12474_12502__$1);
var G__12510 = null;
var G__12511 = (0);
var G__12512 = (0);
seq__12474_12492 = G__12509;
chunk__12475_12493 = G__12510;
count__12476_12494 = G__12511;
i__12477_12495 = G__12512;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__12478_12513 = cljs.core.seq.call(null,fields__$1);
var chunk__12479_12514 = null;
var count__12480_12515 = (0);
var i__12481_12516 = (0);
while(true){
if((i__12481_12516 < count__12480_12515)){
var fld_12517 = cljs.core._nth.call(null,chunk__12479_12514,i__12481_12516);
cljs.compiler.emitln.call(null,"this.",fld_12517," = ",fld_12517,";");

var G__12518 = seq__12478_12513;
var G__12519 = chunk__12479_12514;
var G__12520 = count__12480_12515;
var G__12521 = (i__12481_12516 + (1));
seq__12478_12513 = G__12518;
chunk__12479_12514 = G__12519;
count__12480_12515 = G__12520;
i__12481_12516 = G__12521;
continue;
} else {
var temp__4657__auto___12522 = cljs.core.seq.call(null,seq__12478_12513);
if(temp__4657__auto___12522){
var seq__12478_12523__$1 = temp__4657__auto___12522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12478_12523__$1)){
var c__8257__auto___12524 = cljs.core.chunk_first.call(null,seq__12478_12523__$1);
var G__12525 = cljs.core.chunk_rest.call(null,seq__12478_12523__$1);
var G__12526 = c__8257__auto___12524;
var G__12527 = cljs.core.count.call(null,c__8257__auto___12524);
var G__12528 = (0);
seq__12478_12513 = G__12525;
chunk__12479_12514 = G__12526;
count__12480_12515 = G__12527;
i__12481_12516 = G__12528;
continue;
} else {
var fld_12529 = cljs.core.first.call(null,seq__12478_12523__$1);
cljs.compiler.emitln.call(null,"this.",fld_12529," = ",fld_12529,";");

var G__12530 = cljs.core.next.call(null,seq__12478_12523__$1);
var G__12531 = null;
var G__12532 = (0);
var G__12533 = (0);
seq__12478_12513 = G__12530;
chunk__12479_12514 = G__12531;
count__12480_12515 = G__12532;
i__12481_12516 = G__12533;
continue;
}
} else {
}
}
break;
}

var seq__12482_12534 = cljs.core.seq.call(null,pmasks);
var chunk__12483_12535 = null;
var count__12484_12536 = (0);
var i__12485_12537 = (0);
while(true){
if((i__12485_12537 < count__12484_12536)){
var vec__12486_12538 = cljs.core._nth.call(null,chunk__12483_12535,i__12485_12537);
var pno_12539 = cljs.core.nth.call(null,vec__12486_12538,(0),null);
var pmask_12540 = cljs.core.nth.call(null,vec__12486_12538,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12539,"$ = ",pmask_12540,";");

var G__12541 = seq__12482_12534;
var G__12542 = chunk__12483_12535;
var G__12543 = count__12484_12536;
var G__12544 = (i__12485_12537 + (1));
seq__12482_12534 = G__12541;
chunk__12483_12535 = G__12542;
count__12484_12536 = G__12543;
i__12485_12537 = G__12544;
continue;
} else {
var temp__4657__auto___12545 = cljs.core.seq.call(null,seq__12482_12534);
if(temp__4657__auto___12545){
var seq__12482_12546__$1 = temp__4657__auto___12545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12482_12546__$1)){
var c__8257__auto___12547 = cljs.core.chunk_first.call(null,seq__12482_12546__$1);
var G__12548 = cljs.core.chunk_rest.call(null,seq__12482_12546__$1);
var G__12549 = c__8257__auto___12547;
var G__12550 = cljs.core.count.call(null,c__8257__auto___12547);
var G__12551 = (0);
seq__12482_12534 = G__12548;
chunk__12483_12535 = G__12549;
count__12484_12536 = G__12550;
i__12485_12537 = G__12551;
continue;
} else {
var vec__12489_12552 = cljs.core.first.call(null,seq__12482_12546__$1);
var pno_12553 = cljs.core.nth.call(null,vec__12489_12552,(0),null);
var pmask_12554 = cljs.core.nth.call(null,vec__12489_12552,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12553,"$ = ",pmask_12554,";");

var G__12555 = cljs.core.next.call(null,seq__12482_12546__$1);
var G__12556 = null;
var G__12557 = (0);
var G__12558 = (0);
seq__12482_12534 = G__12555;
chunk__12483_12535 = G__12556;
count__12484_12536 = G__12557;
i__12485_12537 = G__12558;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__12559){
var map__12560 = p__12559;
var map__12560__$1 = ((((!((map__12560 == null)))?((((map__12560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12560):map__12560);
var t = cljs.core.get.call(null,map__12560__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__12560__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__12560__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__12560__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__12560__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__12562_12580 = cljs.core.seq.call(null,protocols);
var chunk__12563_12581 = null;
var count__12564_12582 = (0);
var i__12565_12583 = (0);
while(true){
if((i__12565_12583 < count__12564_12582)){
var protocol_12584 = cljs.core._nth.call(null,chunk__12563_12581,i__12565_12583);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12584)].join('')),"}");

var G__12585 = seq__12562_12580;
var G__12586 = chunk__12563_12581;
var G__12587 = count__12564_12582;
var G__12588 = (i__12565_12583 + (1));
seq__12562_12580 = G__12585;
chunk__12563_12581 = G__12586;
count__12564_12582 = G__12587;
i__12565_12583 = G__12588;
continue;
} else {
var temp__4657__auto___12589 = cljs.core.seq.call(null,seq__12562_12580);
if(temp__4657__auto___12589){
var seq__12562_12590__$1 = temp__4657__auto___12589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12562_12590__$1)){
var c__8257__auto___12591 = cljs.core.chunk_first.call(null,seq__12562_12590__$1);
var G__12592 = cljs.core.chunk_rest.call(null,seq__12562_12590__$1);
var G__12593 = c__8257__auto___12591;
var G__12594 = cljs.core.count.call(null,c__8257__auto___12591);
var G__12595 = (0);
seq__12562_12580 = G__12592;
chunk__12563_12581 = G__12593;
count__12564_12582 = G__12594;
i__12565_12583 = G__12595;
continue;
} else {
var protocol_12596 = cljs.core.first.call(null,seq__12562_12590__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12596)].join('')),"}");

var G__12597 = cljs.core.next.call(null,seq__12562_12590__$1);
var G__12598 = null;
var G__12599 = (0);
var G__12600 = (0);
seq__12562_12580 = G__12597;
chunk__12563_12581 = G__12598;
count__12564_12582 = G__12599;
i__12565_12583 = G__12600;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__12566_12601 = cljs.core.seq.call(null,fields__$1);
var chunk__12567_12602 = null;
var count__12568_12603 = (0);
var i__12569_12604 = (0);
while(true){
if((i__12569_12604 < count__12568_12603)){
var fld_12605 = cljs.core._nth.call(null,chunk__12567_12602,i__12569_12604);
cljs.compiler.emitln.call(null,"this.",fld_12605," = ",fld_12605,";");

var G__12606 = seq__12566_12601;
var G__12607 = chunk__12567_12602;
var G__12608 = count__12568_12603;
var G__12609 = (i__12569_12604 + (1));
seq__12566_12601 = G__12606;
chunk__12567_12602 = G__12607;
count__12568_12603 = G__12608;
i__12569_12604 = G__12609;
continue;
} else {
var temp__4657__auto___12610 = cljs.core.seq.call(null,seq__12566_12601);
if(temp__4657__auto___12610){
var seq__12566_12611__$1 = temp__4657__auto___12610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12566_12611__$1)){
var c__8257__auto___12612 = cljs.core.chunk_first.call(null,seq__12566_12611__$1);
var G__12613 = cljs.core.chunk_rest.call(null,seq__12566_12611__$1);
var G__12614 = c__8257__auto___12612;
var G__12615 = cljs.core.count.call(null,c__8257__auto___12612);
var G__12616 = (0);
seq__12566_12601 = G__12613;
chunk__12567_12602 = G__12614;
count__12568_12603 = G__12615;
i__12569_12604 = G__12616;
continue;
} else {
var fld_12617 = cljs.core.first.call(null,seq__12566_12611__$1);
cljs.compiler.emitln.call(null,"this.",fld_12617," = ",fld_12617,";");

var G__12618 = cljs.core.next.call(null,seq__12566_12611__$1);
var G__12619 = null;
var G__12620 = (0);
var G__12621 = (0);
seq__12566_12601 = G__12618;
chunk__12567_12602 = G__12619;
count__12568_12603 = G__12620;
i__12569_12604 = G__12621;
continue;
}
} else {
}
}
break;
}

var seq__12570_12622 = cljs.core.seq.call(null,pmasks);
var chunk__12571_12623 = null;
var count__12572_12624 = (0);
var i__12573_12625 = (0);
while(true){
if((i__12573_12625 < count__12572_12624)){
var vec__12574_12626 = cljs.core._nth.call(null,chunk__12571_12623,i__12573_12625);
var pno_12627 = cljs.core.nth.call(null,vec__12574_12626,(0),null);
var pmask_12628 = cljs.core.nth.call(null,vec__12574_12626,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12627,"$ = ",pmask_12628,";");

var G__12629 = seq__12570_12622;
var G__12630 = chunk__12571_12623;
var G__12631 = count__12572_12624;
var G__12632 = (i__12573_12625 + (1));
seq__12570_12622 = G__12629;
chunk__12571_12623 = G__12630;
count__12572_12624 = G__12631;
i__12573_12625 = G__12632;
continue;
} else {
var temp__4657__auto___12633 = cljs.core.seq.call(null,seq__12570_12622);
if(temp__4657__auto___12633){
var seq__12570_12634__$1 = temp__4657__auto___12633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12570_12634__$1)){
var c__8257__auto___12635 = cljs.core.chunk_first.call(null,seq__12570_12634__$1);
var G__12636 = cljs.core.chunk_rest.call(null,seq__12570_12634__$1);
var G__12637 = c__8257__auto___12635;
var G__12638 = cljs.core.count.call(null,c__8257__auto___12635);
var G__12639 = (0);
seq__12570_12622 = G__12636;
chunk__12571_12623 = G__12637;
count__12572_12624 = G__12638;
i__12573_12625 = G__12639;
continue;
} else {
var vec__12577_12640 = cljs.core.first.call(null,seq__12570_12634__$1);
var pno_12641 = cljs.core.nth.call(null,vec__12577_12640,(0),null);
var pmask_12642 = cljs.core.nth.call(null,vec__12577_12640,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12641,"$ = ",pmask_12642,";");

var G__12643 = cljs.core.next.call(null,seq__12570_12634__$1);
var G__12644 = null;
var G__12645 = (0);
var G__12646 = (0);
seq__12570_12622 = G__12643;
chunk__12571_12623 = G__12644;
count__12572_12624 = G__12645;
i__12573_12625 = G__12646;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__12647){
var map__12648 = p__12647;
var map__12648__$1 = ((((!((map__12648 == null)))?((((map__12648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12648.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12648):map__12648);
var target = cljs.core.get.call(null,map__12648__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__12648__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__12648__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__12648__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12648__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__12650){
var map__12651 = p__12650;
var map__12651__$1 = ((((!((map__12651 == null)))?((((map__12651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12651):map__12651);
var op = cljs.core.get.call(null,map__12651__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__12651__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__12651__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__12651__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__12651__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__7406__auto__ = code;
if(cljs.core.truth_(and__7406__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__7406__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__11567__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11567__auto__))){
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

var seq__12656 = cljs.core.seq.call(null,table);
var chunk__12657 = null;
var count__12658 = (0);
var i__12659 = (0);
while(true){
if((i__12659 < count__12658)){
var vec__12660 = cljs.core._nth.call(null,chunk__12657,i__12659);
var sym = cljs.core.nth.call(null,vec__12660,(0),null);
var value = cljs.core.nth.call(null,vec__12660,(1),null);
var ns_12666 = cljs.core.namespace.call(null,sym);
var name_12667 = cljs.core.name.call(null,sym);
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

var G__12668 = seq__12656;
var G__12669 = chunk__12657;
var G__12670 = count__12658;
var G__12671 = (i__12659 + (1));
seq__12656 = G__12668;
chunk__12657 = G__12669;
count__12658 = G__12670;
i__12659 = G__12671;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12656);
if(temp__4657__auto__){
var seq__12656__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12656__$1)){
var c__8257__auto__ = cljs.core.chunk_first.call(null,seq__12656__$1);
var G__12672 = cljs.core.chunk_rest.call(null,seq__12656__$1);
var G__12673 = c__8257__auto__;
var G__12674 = cljs.core.count.call(null,c__8257__auto__);
var G__12675 = (0);
seq__12656 = G__12672;
chunk__12657 = G__12673;
count__12658 = G__12674;
i__12659 = G__12675;
continue;
} else {
var vec__12663 = cljs.core.first.call(null,seq__12656__$1);
var sym = cljs.core.nth.call(null,vec__12663,(0),null);
var value = cljs.core.nth.call(null,vec__12663,(1),null);
var ns_12676 = cljs.core.namespace.call(null,sym);
var name_12677 = cljs.core.name.call(null,sym);
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

var G__12678 = cljs.core.next.call(null,seq__12656__$1);
var G__12679 = null;
var G__12680 = (0);
var G__12681 = (0);
seq__12656 = G__12678;
chunk__12657 = G__12679;
count__12658 = G__12680;
i__12659 = G__12681;
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
var G__12683 = arguments.length;
switch (G__12683) {
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
var k_12688 = cljs.core.first.call(null,ks);
var vec__12684_12689 = cljs.core.conj.call(null,prefix,k_12688);
var top_12690 = cljs.core.nth.call(null,vec__12684_12689,(0),null);
var prefix_SINGLEQUOTE__12691 = vec__12684_12689;
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_12688)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__12691) == null))){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_12690)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_12690)))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__12691)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_12690);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__12691)),";");
}
} else {
}

var m_12692 = cljs.core.get.call(null,externs,k_12688);
if(cljs.core.empty_QMARK_.call(null,m_12692)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__12691,m_12692,top_level,known_externs);
}

var G__12693 = cljs.core.next.call(null,ks);
ks = G__12693;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
