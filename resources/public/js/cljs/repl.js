// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35173){
var map__35174 = p__35173;
var map__35174__$1 = ((((!((map__35174 == null)))?((((map__35174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35174):map__35174);
var m = map__35174__$1;
var n = cljs.core.get.call(null,map__35174__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35174__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35176_35198 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35177_35199 = null;
var count__35178_35200 = (0);
var i__35179_35201 = (0);
while(true){
if((i__35179_35201 < count__35178_35200)){
var f_35202 = cljs.core._nth.call(null,chunk__35177_35199,i__35179_35201);
cljs.core.println.call(null,"  ",f_35202);

var G__35203 = seq__35176_35198;
var G__35204 = chunk__35177_35199;
var G__35205 = count__35178_35200;
var G__35206 = (i__35179_35201 + (1));
seq__35176_35198 = G__35203;
chunk__35177_35199 = G__35204;
count__35178_35200 = G__35205;
i__35179_35201 = G__35206;
continue;
} else {
var temp__4657__auto___35207 = cljs.core.seq.call(null,seq__35176_35198);
if(temp__4657__auto___35207){
var seq__35176_35208__$1 = temp__4657__auto___35207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35176_35208__$1)){
var c__28828__auto___35209 = cljs.core.chunk_first.call(null,seq__35176_35208__$1);
var G__35210 = cljs.core.chunk_rest.call(null,seq__35176_35208__$1);
var G__35211 = c__28828__auto___35209;
var G__35212 = cljs.core.count.call(null,c__28828__auto___35209);
var G__35213 = (0);
seq__35176_35198 = G__35210;
chunk__35177_35199 = G__35211;
count__35178_35200 = G__35212;
i__35179_35201 = G__35213;
continue;
} else {
var f_35214 = cljs.core.first.call(null,seq__35176_35208__$1);
cljs.core.println.call(null,"  ",f_35214);

var G__35215 = cljs.core.next.call(null,seq__35176_35208__$1);
var G__35216 = null;
var G__35217 = (0);
var G__35218 = (0);
seq__35176_35198 = G__35215;
chunk__35177_35199 = G__35216;
count__35178_35200 = G__35217;
i__35179_35201 = G__35218;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35219 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27989__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35219);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35219)))?cljs.core.second.call(null,arglists_35219):arglists_35219));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35180_35220 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35181_35221 = null;
var count__35182_35222 = (0);
var i__35183_35223 = (0);
while(true){
if((i__35183_35223 < count__35182_35222)){
var vec__35184_35224 = cljs.core._nth.call(null,chunk__35181_35221,i__35183_35223);
var name_35225 = cljs.core.nth.call(null,vec__35184_35224,(0),null);
var map__35187_35226 = cljs.core.nth.call(null,vec__35184_35224,(1),null);
var map__35187_35227__$1 = ((((!((map__35187_35226 == null)))?((((map__35187_35226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35187_35226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35187_35226):map__35187_35226);
var doc_35228 = cljs.core.get.call(null,map__35187_35227__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35229 = cljs.core.get.call(null,map__35187_35227__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35225);

cljs.core.println.call(null," ",arglists_35229);

if(cljs.core.truth_(doc_35228)){
cljs.core.println.call(null," ",doc_35228);
} else {
}

var G__35230 = seq__35180_35220;
var G__35231 = chunk__35181_35221;
var G__35232 = count__35182_35222;
var G__35233 = (i__35183_35223 + (1));
seq__35180_35220 = G__35230;
chunk__35181_35221 = G__35231;
count__35182_35222 = G__35232;
i__35183_35223 = G__35233;
continue;
} else {
var temp__4657__auto___35234 = cljs.core.seq.call(null,seq__35180_35220);
if(temp__4657__auto___35234){
var seq__35180_35235__$1 = temp__4657__auto___35234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35180_35235__$1)){
var c__28828__auto___35236 = cljs.core.chunk_first.call(null,seq__35180_35235__$1);
var G__35237 = cljs.core.chunk_rest.call(null,seq__35180_35235__$1);
var G__35238 = c__28828__auto___35236;
var G__35239 = cljs.core.count.call(null,c__28828__auto___35236);
var G__35240 = (0);
seq__35180_35220 = G__35237;
chunk__35181_35221 = G__35238;
count__35182_35222 = G__35239;
i__35183_35223 = G__35240;
continue;
} else {
var vec__35189_35241 = cljs.core.first.call(null,seq__35180_35235__$1);
var name_35242 = cljs.core.nth.call(null,vec__35189_35241,(0),null);
var map__35192_35243 = cljs.core.nth.call(null,vec__35189_35241,(1),null);
var map__35192_35244__$1 = ((((!((map__35192_35243 == null)))?((((map__35192_35243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35192_35243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35192_35243):map__35192_35243);
var doc_35245 = cljs.core.get.call(null,map__35192_35244__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35246 = cljs.core.get.call(null,map__35192_35244__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35242);

cljs.core.println.call(null," ",arglists_35246);

if(cljs.core.truth_(doc_35245)){
cljs.core.println.call(null," ",doc_35245);
} else {
}

var G__35247 = cljs.core.next.call(null,seq__35180_35235__$1);
var G__35248 = null;
var G__35249 = (0);
var G__35250 = (0);
seq__35180_35220 = G__35247;
chunk__35181_35221 = G__35248;
count__35182_35222 = G__35249;
i__35183_35223 = G__35250;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35194 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35195 = null;
var count__35196 = (0);
var i__35197 = (0);
while(true){
if((i__35197 < count__35196)){
var role = cljs.core._nth.call(null,chunk__35195,i__35197);
var temp__4657__auto___35251__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35251__$1)){
var spec_35252 = temp__4657__auto___35251__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35252));
} else {
}

var G__35253 = seq__35194;
var G__35254 = chunk__35195;
var G__35255 = count__35196;
var G__35256 = (i__35197 + (1));
seq__35194 = G__35253;
chunk__35195 = G__35254;
count__35196 = G__35255;
i__35197 = G__35256;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35194);
if(temp__4657__auto____$1){
var seq__35194__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35194__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__35194__$1);
var G__35257 = cljs.core.chunk_rest.call(null,seq__35194__$1);
var G__35258 = c__28828__auto__;
var G__35259 = cljs.core.count.call(null,c__28828__auto__);
var G__35260 = (0);
seq__35194 = G__35257;
chunk__35195 = G__35258;
count__35196 = G__35259;
i__35197 = G__35260;
continue;
} else {
var role = cljs.core.first.call(null,seq__35194__$1);
var temp__4657__auto___35261__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35261__$2)){
var spec_35262 = temp__4657__auto___35261__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35262));
} else {
}

var G__35263 = cljs.core.next.call(null,seq__35194__$1);
var G__35264 = null;
var G__35265 = (0);
var G__35266 = (0);
seq__35194 = G__35263;
chunk__35195 = G__35264;
count__35196 = G__35265;
i__35197 = G__35266;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1509593236628
