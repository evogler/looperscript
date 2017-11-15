// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38161){
var map__38162 = p__38161;
var map__38162__$1 = ((((!((map__38162 == null)))?((((map__38162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38162):map__38162);
var m = map__38162__$1;
var n = cljs.core.get.call(null,map__38162__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38162__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38164_38186 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38165_38187 = null;
var count__38166_38188 = (0);
var i__38167_38189 = (0);
while(true){
if((i__38167_38189 < count__38166_38188)){
var f_38190 = cljs.core._nth.call(null,chunk__38165_38187,i__38167_38189);
cljs.core.println.call(null,"  ",f_38190);

var G__38191 = seq__38164_38186;
var G__38192 = chunk__38165_38187;
var G__38193 = count__38166_38188;
var G__38194 = (i__38167_38189 + (1));
seq__38164_38186 = G__38191;
chunk__38165_38187 = G__38192;
count__38166_38188 = G__38193;
i__38167_38189 = G__38194;
continue;
} else {
var temp__4657__auto___38195 = cljs.core.seq.call(null,seq__38164_38186);
if(temp__4657__auto___38195){
var seq__38164_38196__$1 = temp__4657__auto___38195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38164_38196__$1)){
var c__28775__auto___38197 = cljs.core.chunk_first.call(null,seq__38164_38196__$1);
var G__38198 = cljs.core.chunk_rest.call(null,seq__38164_38196__$1);
var G__38199 = c__28775__auto___38197;
var G__38200 = cljs.core.count.call(null,c__28775__auto___38197);
var G__38201 = (0);
seq__38164_38186 = G__38198;
chunk__38165_38187 = G__38199;
count__38166_38188 = G__38200;
i__38167_38189 = G__38201;
continue;
} else {
var f_38202 = cljs.core.first.call(null,seq__38164_38196__$1);
cljs.core.println.call(null,"  ",f_38202);

var G__38203 = cljs.core.next.call(null,seq__38164_38196__$1);
var G__38204 = null;
var G__38205 = (0);
var G__38206 = (0);
seq__38164_38186 = G__38203;
chunk__38165_38187 = G__38204;
count__38166_38188 = G__38205;
i__38167_38189 = G__38206;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38207 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27936__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38207);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38207)))?cljs.core.second.call(null,arglists_38207):arglists_38207));
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
var seq__38168_38208 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38169_38209 = null;
var count__38170_38210 = (0);
var i__38171_38211 = (0);
while(true){
if((i__38171_38211 < count__38170_38210)){
var vec__38172_38212 = cljs.core._nth.call(null,chunk__38169_38209,i__38171_38211);
var name_38213 = cljs.core.nth.call(null,vec__38172_38212,(0),null);
var map__38175_38214 = cljs.core.nth.call(null,vec__38172_38212,(1),null);
var map__38175_38215__$1 = ((((!((map__38175_38214 == null)))?((((map__38175_38214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38175_38214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38175_38214):map__38175_38214);
var doc_38216 = cljs.core.get.call(null,map__38175_38215__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38217 = cljs.core.get.call(null,map__38175_38215__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38213);

cljs.core.println.call(null," ",arglists_38217);

if(cljs.core.truth_(doc_38216)){
cljs.core.println.call(null," ",doc_38216);
} else {
}

var G__38218 = seq__38168_38208;
var G__38219 = chunk__38169_38209;
var G__38220 = count__38170_38210;
var G__38221 = (i__38171_38211 + (1));
seq__38168_38208 = G__38218;
chunk__38169_38209 = G__38219;
count__38170_38210 = G__38220;
i__38171_38211 = G__38221;
continue;
} else {
var temp__4657__auto___38222 = cljs.core.seq.call(null,seq__38168_38208);
if(temp__4657__auto___38222){
var seq__38168_38223__$1 = temp__4657__auto___38222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38168_38223__$1)){
var c__28775__auto___38224 = cljs.core.chunk_first.call(null,seq__38168_38223__$1);
var G__38225 = cljs.core.chunk_rest.call(null,seq__38168_38223__$1);
var G__38226 = c__28775__auto___38224;
var G__38227 = cljs.core.count.call(null,c__28775__auto___38224);
var G__38228 = (0);
seq__38168_38208 = G__38225;
chunk__38169_38209 = G__38226;
count__38170_38210 = G__38227;
i__38171_38211 = G__38228;
continue;
} else {
var vec__38177_38229 = cljs.core.first.call(null,seq__38168_38223__$1);
var name_38230 = cljs.core.nth.call(null,vec__38177_38229,(0),null);
var map__38180_38231 = cljs.core.nth.call(null,vec__38177_38229,(1),null);
var map__38180_38232__$1 = ((((!((map__38180_38231 == null)))?((((map__38180_38231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38180_38231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38180_38231):map__38180_38231);
var doc_38233 = cljs.core.get.call(null,map__38180_38232__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38234 = cljs.core.get.call(null,map__38180_38232__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38230);

cljs.core.println.call(null," ",arglists_38234);

if(cljs.core.truth_(doc_38233)){
cljs.core.println.call(null," ",doc_38233);
} else {
}

var G__38235 = cljs.core.next.call(null,seq__38168_38223__$1);
var G__38236 = null;
var G__38237 = (0);
var G__38238 = (0);
seq__38168_38208 = G__38235;
chunk__38169_38209 = G__38236;
count__38170_38210 = G__38237;
i__38171_38211 = G__38238;
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

var seq__38182 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38183 = null;
var count__38184 = (0);
var i__38185 = (0);
while(true){
if((i__38185 < count__38184)){
var role = cljs.core._nth.call(null,chunk__38183,i__38185);
var temp__4657__auto___38239__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38239__$1)){
var spec_38240 = temp__4657__auto___38239__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38240));
} else {
}

var G__38241 = seq__38182;
var G__38242 = chunk__38183;
var G__38243 = count__38184;
var G__38244 = (i__38185 + (1));
seq__38182 = G__38241;
chunk__38183 = G__38242;
count__38184 = G__38243;
i__38185 = G__38244;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38182);
if(temp__4657__auto____$1){
var seq__38182__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38182__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__38182__$1);
var G__38245 = cljs.core.chunk_rest.call(null,seq__38182__$1);
var G__38246 = c__28775__auto__;
var G__38247 = cljs.core.count.call(null,c__28775__auto__);
var G__38248 = (0);
seq__38182 = G__38245;
chunk__38183 = G__38246;
count__38184 = G__38247;
i__38185 = G__38248;
continue;
} else {
var role = cljs.core.first.call(null,seq__38182__$1);
var temp__4657__auto___38249__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38249__$2)){
var spec_38250 = temp__4657__auto___38249__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38250));
} else {
}

var G__38251 = cljs.core.next.call(null,seq__38182__$1);
var G__38252 = null;
var G__38253 = (0);
var G__38254 = (0);
seq__38182 = G__38251;
chunk__38183 = G__38252;
count__38184 = G__38253;
i__38185 = G__38254;
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

//# sourceMappingURL=repl.js.map?rel=1510190761431
