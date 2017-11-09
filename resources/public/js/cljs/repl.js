// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38162){
var map__38163 = p__38162;
var map__38163__$1 = ((((!((map__38163 == null)))?((((map__38163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38163):map__38163);
var m = map__38163__$1;
var n = cljs.core.get.call(null,map__38163__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38163__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38165_38187 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38166_38188 = null;
var count__38167_38189 = (0);
var i__38168_38190 = (0);
while(true){
if((i__38168_38190 < count__38167_38189)){
var f_38191 = cljs.core._nth.call(null,chunk__38166_38188,i__38168_38190);
cljs.core.println.call(null,"  ",f_38191);

var G__38192 = seq__38165_38187;
var G__38193 = chunk__38166_38188;
var G__38194 = count__38167_38189;
var G__38195 = (i__38168_38190 + (1));
seq__38165_38187 = G__38192;
chunk__38166_38188 = G__38193;
count__38167_38189 = G__38194;
i__38168_38190 = G__38195;
continue;
} else {
var temp__4657__auto___38196 = cljs.core.seq.call(null,seq__38165_38187);
if(temp__4657__auto___38196){
var seq__38165_38197__$1 = temp__4657__auto___38196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38165_38197__$1)){
var c__28775__auto___38198 = cljs.core.chunk_first.call(null,seq__38165_38197__$1);
var G__38199 = cljs.core.chunk_rest.call(null,seq__38165_38197__$1);
var G__38200 = c__28775__auto___38198;
var G__38201 = cljs.core.count.call(null,c__28775__auto___38198);
var G__38202 = (0);
seq__38165_38187 = G__38199;
chunk__38166_38188 = G__38200;
count__38167_38189 = G__38201;
i__38168_38190 = G__38202;
continue;
} else {
var f_38203 = cljs.core.first.call(null,seq__38165_38197__$1);
cljs.core.println.call(null,"  ",f_38203);

var G__38204 = cljs.core.next.call(null,seq__38165_38197__$1);
var G__38205 = null;
var G__38206 = (0);
var G__38207 = (0);
seq__38165_38187 = G__38204;
chunk__38166_38188 = G__38205;
count__38167_38189 = G__38206;
i__38168_38190 = G__38207;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38208 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27936__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38208);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38208)))?cljs.core.second.call(null,arglists_38208):arglists_38208));
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
var seq__38169_38209 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38170_38210 = null;
var count__38171_38211 = (0);
var i__38172_38212 = (0);
while(true){
if((i__38172_38212 < count__38171_38211)){
var vec__38173_38213 = cljs.core._nth.call(null,chunk__38170_38210,i__38172_38212);
var name_38214 = cljs.core.nth.call(null,vec__38173_38213,(0),null);
var map__38176_38215 = cljs.core.nth.call(null,vec__38173_38213,(1),null);
var map__38176_38216__$1 = ((((!((map__38176_38215 == null)))?((((map__38176_38215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38176_38215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38176_38215):map__38176_38215);
var doc_38217 = cljs.core.get.call(null,map__38176_38216__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38218 = cljs.core.get.call(null,map__38176_38216__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38214);

cljs.core.println.call(null," ",arglists_38218);

if(cljs.core.truth_(doc_38217)){
cljs.core.println.call(null," ",doc_38217);
} else {
}

var G__38219 = seq__38169_38209;
var G__38220 = chunk__38170_38210;
var G__38221 = count__38171_38211;
var G__38222 = (i__38172_38212 + (1));
seq__38169_38209 = G__38219;
chunk__38170_38210 = G__38220;
count__38171_38211 = G__38221;
i__38172_38212 = G__38222;
continue;
} else {
var temp__4657__auto___38223 = cljs.core.seq.call(null,seq__38169_38209);
if(temp__4657__auto___38223){
var seq__38169_38224__$1 = temp__4657__auto___38223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38169_38224__$1)){
var c__28775__auto___38225 = cljs.core.chunk_first.call(null,seq__38169_38224__$1);
var G__38226 = cljs.core.chunk_rest.call(null,seq__38169_38224__$1);
var G__38227 = c__28775__auto___38225;
var G__38228 = cljs.core.count.call(null,c__28775__auto___38225);
var G__38229 = (0);
seq__38169_38209 = G__38226;
chunk__38170_38210 = G__38227;
count__38171_38211 = G__38228;
i__38172_38212 = G__38229;
continue;
} else {
var vec__38178_38230 = cljs.core.first.call(null,seq__38169_38224__$1);
var name_38231 = cljs.core.nth.call(null,vec__38178_38230,(0),null);
var map__38181_38232 = cljs.core.nth.call(null,vec__38178_38230,(1),null);
var map__38181_38233__$1 = ((((!((map__38181_38232 == null)))?((((map__38181_38232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38181_38232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38181_38232):map__38181_38232);
var doc_38234 = cljs.core.get.call(null,map__38181_38233__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38235 = cljs.core.get.call(null,map__38181_38233__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38231);

cljs.core.println.call(null," ",arglists_38235);

if(cljs.core.truth_(doc_38234)){
cljs.core.println.call(null," ",doc_38234);
} else {
}

var G__38236 = cljs.core.next.call(null,seq__38169_38224__$1);
var G__38237 = null;
var G__38238 = (0);
var G__38239 = (0);
seq__38169_38209 = G__38236;
chunk__38170_38210 = G__38237;
count__38171_38211 = G__38238;
i__38172_38212 = G__38239;
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

var seq__38183 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38184 = null;
var count__38185 = (0);
var i__38186 = (0);
while(true){
if((i__38186 < count__38185)){
var role = cljs.core._nth.call(null,chunk__38184,i__38186);
var temp__4657__auto___38240__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38240__$1)){
var spec_38241 = temp__4657__auto___38240__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38241));
} else {
}

var G__38242 = seq__38183;
var G__38243 = chunk__38184;
var G__38244 = count__38185;
var G__38245 = (i__38186 + (1));
seq__38183 = G__38242;
chunk__38184 = G__38243;
count__38185 = G__38244;
i__38186 = G__38245;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38183);
if(temp__4657__auto____$1){
var seq__38183__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38183__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__38183__$1);
var G__38246 = cljs.core.chunk_rest.call(null,seq__38183__$1);
var G__38247 = c__28775__auto__;
var G__38248 = cljs.core.count.call(null,c__28775__auto__);
var G__38249 = (0);
seq__38183 = G__38246;
chunk__38184 = G__38247;
count__38185 = G__38248;
i__38186 = G__38249;
continue;
} else {
var role = cljs.core.first.call(null,seq__38183__$1);
var temp__4657__auto___38250__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38250__$2)){
var spec_38251 = temp__4657__auto___38250__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38251));
} else {
}

var G__38252 = cljs.core.next.call(null,seq__38183__$1);
var G__38253 = null;
var G__38254 = (0);
var G__38255 = (0);
seq__38183 = G__38252;
chunk__38184 = G__38253;
count__38185 = G__38254;
i__38186 = G__38255;
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

//# sourceMappingURL=repl.js.map?rel=1509845018755
