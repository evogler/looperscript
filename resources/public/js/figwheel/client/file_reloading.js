// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27709__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27709__auto__){
return or__27709__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27709__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27709__auto__)){
return or__27709__auto__;
} else {
var or__27709__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27709__auto____$1)){
return or__27709__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34986_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34986_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34987 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34988 = null;
var count__34989 = (0);
var i__34990 = (0);
while(true){
if((i__34990 < count__34989)){
var n = cljs.core._nth.call(null,chunk__34988,i__34990);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34991 = seq__34987;
var G__34992 = chunk__34988;
var G__34993 = count__34989;
var G__34994 = (i__34990 + (1));
seq__34987 = G__34991;
chunk__34988 = G__34992;
count__34989 = G__34993;
i__34990 = G__34994;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34987);
if(temp__4657__auto__){
var seq__34987__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34987__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__34987__$1);
var G__34995 = cljs.core.chunk_rest.call(null,seq__34987__$1);
var G__34996 = c__28548__auto__;
var G__34997 = cljs.core.count.call(null,c__28548__auto__);
var G__34998 = (0);
seq__34987 = G__34995;
chunk__34988 = G__34996;
count__34989 = G__34997;
i__34990 = G__34998;
continue;
} else {
var n = cljs.core.first.call(null,seq__34987__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34999 = cljs.core.next.call(null,seq__34987__$1);
var G__35000 = null;
var G__35001 = (0);
var G__35002 = (0);
seq__34987 = G__34999;
chunk__34988 = G__35000;
count__34989 = G__35001;
i__34990 = G__35002;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35012_35020 = cljs.core.seq.call(null,deps);
var chunk__35013_35021 = null;
var count__35014_35022 = (0);
var i__35015_35023 = (0);
while(true){
if((i__35015_35023 < count__35014_35022)){
var dep_35024 = cljs.core._nth.call(null,chunk__35013_35021,i__35015_35023);
topo_sort_helper_STAR_.call(null,dep_35024,(depth + (1)),state);

var G__35025 = seq__35012_35020;
var G__35026 = chunk__35013_35021;
var G__35027 = count__35014_35022;
var G__35028 = (i__35015_35023 + (1));
seq__35012_35020 = G__35025;
chunk__35013_35021 = G__35026;
count__35014_35022 = G__35027;
i__35015_35023 = G__35028;
continue;
} else {
var temp__4657__auto___35029 = cljs.core.seq.call(null,seq__35012_35020);
if(temp__4657__auto___35029){
var seq__35012_35030__$1 = temp__4657__auto___35029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35012_35030__$1)){
var c__28548__auto___35031 = cljs.core.chunk_first.call(null,seq__35012_35030__$1);
var G__35032 = cljs.core.chunk_rest.call(null,seq__35012_35030__$1);
var G__35033 = c__28548__auto___35031;
var G__35034 = cljs.core.count.call(null,c__28548__auto___35031);
var G__35035 = (0);
seq__35012_35020 = G__35032;
chunk__35013_35021 = G__35033;
count__35014_35022 = G__35034;
i__35015_35023 = G__35035;
continue;
} else {
var dep_35036 = cljs.core.first.call(null,seq__35012_35030__$1);
topo_sort_helper_STAR_.call(null,dep_35036,(depth + (1)),state);

var G__35037 = cljs.core.next.call(null,seq__35012_35030__$1);
var G__35038 = null;
var G__35039 = (0);
var G__35040 = (0);
seq__35012_35020 = G__35037;
chunk__35013_35021 = G__35038;
count__35014_35022 = G__35039;
i__35015_35023 = G__35040;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35016){
var vec__35017 = p__35016;
var seq__35018 = cljs.core.seq.call(null,vec__35017);
var first__35019 = cljs.core.first.call(null,seq__35018);
var seq__35018__$1 = cljs.core.next.call(null,seq__35018);
var x = first__35019;
var xs = seq__35018__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35017,seq__35018,first__35019,seq__35018__$1,x,xs,get_deps__$1){
return (function (p1__35003_SHARP_){
return clojure.set.difference.call(null,p1__35003_SHARP_,x);
});})(vec__35017,seq__35018,first__35019,seq__35018__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35041 = cljs.core.seq.call(null,provides);
var chunk__35042 = null;
var count__35043 = (0);
var i__35044 = (0);
while(true){
if((i__35044 < count__35043)){
var prov = cljs.core._nth.call(null,chunk__35042,i__35044);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35045_35053 = cljs.core.seq.call(null,requires);
var chunk__35046_35054 = null;
var count__35047_35055 = (0);
var i__35048_35056 = (0);
while(true){
if((i__35048_35056 < count__35047_35055)){
var req_35057 = cljs.core._nth.call(null,chunk__35046_35054,i__35048_35056);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35057,prov);

var G__35058 = seq__35045_35053;
var G__35059 = chunk__35046_35054;
var G__35060 = count__35047_35055;
var G__35061 = (i__35048_35056 + (1));
seq__35045_35053 = G__35058;
chunk__35046_35054 = G__35059;
count__35047_35055 = G__35060;
i__35048_35056 = G__35061;
continue;
} else {
var temp__4657__auto___35062 = cljs.core.seq.call(null,seq__35045_35053);
if(temp__4657__auto___35062){
var seq__35045_35063__$1 = temp__4657__auto___35062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35045_35063__$1)){
var c__28548__auto___35064 = cljs.core.chunk_first.call(null,seq__35045_35063__$1);
var G__35065 = cljs.core.chunk_rest.call(null,seq__35045_35063__$1);
var G__35066 = c__28548__auto___35064;
var G__35067 = cljs.core.count.call(null,c__28548__auto___35064);
var G__35068 = (0);
seq__35045_35053 = G__35065;
chunk__35046_35054 = G__35066;
count__35047_35055 = G__35067;
i__35048_35056 = G__35068;
continue;
} else {
var req_35069 = cljs.core.first.call(null,seq__35045_35063__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35069,prov);

var G__35070 = cljs.core.next.call(null,seq__35045_35063__$1);
var G__35071 = null;
var G__35072 = (0);
var G__35073 = (0);
seq__35045_35053 = G__35070;
chunk__35046_35054 = G__35071;
count__35047_35055 = G__35072;
i__35048_35056 = G__35073;
continue;
}
} else {
}
}
break;
}

var G__35074 = seq__35041;
var G__35075 = chunk__35042;
var G__35076 = count__35043;
var G__35077 = (i__35044 + (1));
seq__35041 = G__35074;
chunk__35042 = G__35075;
count__35043 = G__35076;
i__35044 = G__35077;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35041);
if(temp__4657__auto__){
var seq__35041__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35041__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__35041__$1);
var G__35078 = cljs.core.chunk_rest.call(null,seq__35041__$1);
var G__35079 = c__28548__auto__;
var G__35080 = cljs.core.count.call(null,c__28548__auto__);
var G__35081 = (0);
seq__35041 = G__35078;
chunk__35042 = G__35079;
count__35043 = G__35080;
i__35044 = G__35081;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35041__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35049_35082 = cljs.core.seq.call(null,requires);
var chunk__35050_35083 = null;
var count__35051_35084 = (0);
var i__35052_35085 = (0);
while(true){
if((i__35052_35085 < count__35051_35084)){
var req_35086 = cljs.core._nth.call(null,chunk__35050_35083,i__35052_35085);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35086,prov);

var G__35087 = seq__35049_35082;
var G__35088 = chunk__35050_35083;
var G__35089 = count__35051_35084;
var G__35090 = (i__35052_35085 + (1));
seq__35049_35082 = G__35087;
chunk__35050_35083 = G__35088;
count__35051_35084 = G__35089;
i__35052_35085 = G__35090;
continue;
} else {
var temp__4657__auto___35091__$1 = cljs.core.seq.call(null,seq__35049_35082);
if(temp__4657__auto___35091__$1){
var seq__35049_35092__$1 = temp__4657__auto___35091__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35049_35092__$1)){
var c__28548__auto___35093 = cljs.core.chunk_first.call(null,seq__35049_35092__$1);
var G__35094 = cljs.core.chunk_rest.call(null,seq__35049_35092__$1);
var G__35095 = c__28548__auto___35093;
var G__35096 = cljs.core.count.call(null,c__28548__auto___35093);
var G__35097 = (0);
seq__35049_35082 = G__35094;
chunk__35050_35083 = G__35095;
count__35051_35084 = G__35096;
i__35052_35085 = G__35097;
continue;
} else {
var req_35098 = cljs.core.first.call(null,seq__35049_35092__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35098,prov);

var G__35099 = cljs.core.next.call(null,seq__35049_35092__$1);
var G__35100 = null;
var G__35101 = (0);
var G__35102 = (0);
seq__35049_35082 = G__35099;
chunk__35050_35083 = G__35100;
count__35051_35084 = G__35101;
i__35052_35085 = G__35102;
continue;
}
} else {
}
}
break;
}

var G__35103 = cljs.core.next.call(null,seq__35041__$1);
var G__35104 = null;
var G__35105 = (0);
var G__35106 = (0);
seq__35041 = G__35103;
chunk__35042 = G__35104;
count__35043 = G__35105;
i__35044 = G__35106;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35107_35111 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35108_35112 = null;
var count__35109_35113 = (0);
var i__35110_35114 = (0);
while(true){
if((i__35110_35114 < count__35109_35113)){
var ns_35115 = cljs.core._nth.call(null,chunk__35108_35112,i__35110_35114);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35115);

var G__35116 = seq__35107_35111;
var G__35117 = chunk__35108_35112;
var G__35118 = count__35109_35113;
var G__35119 = (i__35110_35114 + (1));
seq__35107_35111 = G__35116;
chunk__35108_35112 = G__35117;
count__35109_35113 = G__35118;
i__35110_35114 = G__35119;
continue;
} else {
var temp__4657__auto___35120 = cljs.core.seq.call(null,seq__35107_35111);
if(temp__4657__auto___35120){
var seq__35107_35121__$1 = temp__4657__auto___35120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35107_35121__$1)){
var c__28548__auto___35122 = cljs.core.chunk_first.call(null,seq__35107_35121__$1);
var G__35123 = cljs.core.chunk_rest.call(null,seq__35107_35121__$1);
var G__35124 = c__28548__auto___35122;
var G__35125 = cljs.core.count.call(null,c__28548__auto___35122);
var G__35126 = (0);
seq__35107_35111 = G__35123;
chunk__35108_35112 = G__35124;
count__35109_35113 = G__35125;
i__35110_35114 = G__35126;
continue;
} else {
var ns_35127 = cljs.core.first.call(null,seq__35107_35121__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35127);

var G__35128 = cljs.core.next.call(null,seq__35107_35121__$1);
var G__35129 = null;
var G__35130 = (0);
var G__35131 = (0);
seq__35107_35111 = G__35128;
chunk__35108_35112 = G__35129;
count__35109_35113 = G__35130;
i__35110_35114 = G__35131;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27709__auto__ = goog.require__;
if(cljs.core.truth_(or__27709__auto__)){
return or__27709__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35132__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35133__i = 0, G__35133__a = new Array(arguments.length -  0);
while (G__35133__i < G__35133__a.length) {G__35133__a[G__35133__i] = arguments[G__35133__i + 0]; ++G__35133__i;}
  args = new cljs.core.IndexedSeq(G__35133__a,0,null);
} 
return G__35132__delegate.call(this,args);};
G__35132.cljs$lang$maxFixedArity = 0;
G__35132.cljs$lang$applyTo = (function (arglist__35134){
var args = cljs.core.seq(arglist__35134);
return G__35132__delegate(args);
});
G__35132.cljs$core$IFn$_invoke$arity$variadic = G__35132__delegate;
return G__35132;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__35135_SHARP_,p2__35136_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35135_SHARP_)].join('')),p2__35136_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__35137_SHARP_,p2__35138_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35137_SHARP_)].join(''),p2__35138_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35139 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35139.addCallback(((function (G__35139){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35139))
);

G__35139.addErrback(((function (G__35139){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35139))
);

return G__35139;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35140 = cljs.core._EQ_;
var expr__35141 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35140.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35141))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35140,expr__35141){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35140,expr__35141))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35140,expr__35141){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35143){if((e35143 instanceof Error)){
var e = e35143;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35143;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35140,expr__35141))
} else {
if(cljs.core.truth_(pred__35140.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35141))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35140.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35141))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35140.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35141))){
return ((function (pred__35140,expr__35141){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35144){if((e35144 instanceof Error)){
var e = e35144;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35144;

}
}})());
});
;})(pred__35140,expr__35141))
} else {
return ((function (pred__35140,expr__35141){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35140,expr__35141))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35145,callback){
var map__35146 = p__35145;
var map__35146__$1 = ((((!((map__35146 == null)))?((((map__35146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35146):map__35146);
var file_msg = map__35146__$1;
var request_url = cljs.core.get.call(null,map__35146__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35146,map__35146__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35146,map__35146__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto__){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto__){
return (function (state_35170){
var state_val_35171 = (state_35170[(1)]);
if((state_val_35171 === (7))){
var inst_35166 = (state_35170[(2)]);
var state_35170__$1 = state_35170;
var statearr_35172_35189 = state_35170__$1;
(statearr_35172_35189[(2)] = inst_35166);

(statearr_35172_35189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (1))){
var state_35170__$1 = state_35170;
var statearr_35173_35190 = state_35170__$1;
(statearr_35173_35190[(2)] = null);

(statearr_35173_35190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (4))){
var inst_35150 = (state_35170[(7)]);
var inst_35150__$1 = (state_35170[(2)]);
var state_35170__$1 = (function (){var statearr_35174 = state_35170;
(statearr_35174[(7)] = inst_35150__$1);

return statearr_35174;
})();
if(cljs.core.truth_(inst_35150__$1)){
var statearr_35175_35191 = state_35170__$1;
(statearr_35175_35191[(1)] = (5));

} else {
var statearr_35176_35192 = state_35170__$1;
(statearr_35176_35192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (6))){
var state_35170__$1 = state_35170;
var statearr_35177_35193 = state_35170__$1;
(statearr_35177_35193[(2)] = null);

(statearr_35177_35193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (3))){
var inst_35168 = (state_35170[(2)]);
var state_35170__$1 = state_35170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35170__$1,inst_35168);
} else {
if((state_val_35171 === (2))){
var state_35170__$1 = state_35170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35170__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35171 === (11))){
var inst_35162 = (state_35170[(2)]);
var state_35170__$1 = (function (){var statearr_35178 = state_35170;
(statearr_35178[(8)] = inst_35162);

return statearr_35178;
})();
var statearr_35179_35194 = state_35170__$1;
(statearr_35179_35194[(2)] = null);

(statearr_35179_35194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (9))){
var inst_35156 = (state_35170[(9)]);
var inst_35154 = (state_35170[(10)]);
var inst_35158 = inst_35156.call(null,inst_35154);
var state_35170__$1 = state_35170;
var statearr_35180_35195 = state_35170__$1;
(statearr_35180_35195[(2)] = inst_35158);

(statearr_35180_35195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (5))){
var inst_35150 = (state_35170[(7)]);
var inst_35152 = figwheel.client.file_reloading.blocking_load.call(null,inst_35150);
var state_35170__$1 = state_35170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35170__$1,(8),inst_35152);
} else {
if((state_val_35171 === (10))){
var inst_35154 = (state_35170[(10)]);
var inst_35160 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35154);
var state_35170__$1 = state_35170;
var statearr_35181_35196 = state_35170__$1;
(statearr_35181_35196[(2)] = inst_35160);

(statearr_35181_35196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (8))){
var inst_35156 = (state_35170[(9)]);
var inst_35150 = (state_35170[(7)]);
var inst_35154 = (state_35170[(2)]);
var inst_35155 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35156__$1 = cljs.core.get.call(null,inst_35155,inst_35150);
var state_35170__$1 = (function (){var statearr_35182 = state_35170;
(statearr_35182[(9)] = inst_35156__$1);

(statearr_35182[(10)] = inst_35154);

return statearr_35182;
})();
if(cljs.core.truth_(inst_35156__$1)){
var statearr_35183_35197 = state_35170__$1;
(statearr_35183_35197[(1)] = (9));

} else {
var statearr_35184_35198 = state_35170__$1;
(statearr_35184_35198[(1)] = (10));

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
});})(c__31916__auto__))
;
return ((function (switch__31828__auto__,c__31916__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31829__auto__ = null;
var figwheel$client$file_reloading$state_machine__31829__auto____0 = (function (){
var statearr_35185 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35185[(0)] = figwheel$client$file_reloading$state_machine__31829__auto__);

(statearr_35185[(1)] = (1));

return statearr_35185;
});
var figwheel$client$file_reloading$state_machine__31829__auto____1 = (function (state_35170){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_35170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e35186){if((e35186 instanceof Object)){
var ex__31832__auto__ = e35186;
var statearr_35187_35199 = state_35170;
(statearr_35187_35199[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35200 = state_35170;
state_35170 = G__35200;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31829__auto__ = function(state_35170){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31829__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31829__auto____1.call(this,state_35170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31829__auto____0;
figwheel$client$file_reloading$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31829__auto____1;
return figwheel$client$file_reloading$state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto__))
})();
var state__31918__auto__ = (function (){var statearr_35188 = f__31917__auto__.call(null);
(statearr_35188[(6)] = c__31916__auto__);

return statearr_35188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto__))
);

return c__31916__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35201,callback){
var map__35202 = p__35201;
var map__35202__$1 = ((((!((map__35202 == null)))?((((map__35202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35202):map__35202);
var file_msg = map__35202__$1;
var namespace = cljs.core.get.call(null,map__35202__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35202,map__35202__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35202,map__35202__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35204){
var map__35205 = p__35204;
var map__35205__$1 = ((((!((map__35205 == null)))?((((map__35205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35205):map__35205);
var file_msg = map__35205__$1;
var namespace = cljs.core.get.call(null,map__35205__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35207){
var map__35208 = p__35207;
var map__35208__$1 = ((((!((map__35208 == null)))?((((map__35208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35208):map__35208);
var file_msg = map__35208__$1;
var namespace = cljs.core.get.call(null,map__35208__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27697__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27697__auto__){
var or__27709__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27709__auto__)){
return or__27709__auto__;
} else {
var or__27709__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27709__auto____$1)){
return or__27709__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27697__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35210,callback){
var map__35211 = p__35210;
var map__35211__$1 = ((((!((map__35211 == null)))?((((map__35211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35211.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35211):map__35211);
var file_msg = map__35211__$1;
var request_url = cljs.core.get.call(null,map__35211__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35211__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31916__auto___35261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto___35261,out){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto___35261,out){
return (function (state_35246){
var state_val_35247 = (state_35246[(1)]);
if((state_val_35247 === (1))){
var inst_35220 = cljs.core.seq.call(null,files);
var inst_35221 = cljs.core.first.call(null,inst_35220);
var inst_35222 = cljs.core.next.call(null,inst_35220);
var inst_35223 = files;
var state_35246__$1 = (function (){var statearr_35248 = state_35246;
(statearr_35248[(7)] = inst_35221);

(statearr_35248[(8)] = inst_35223);

(statearr_35248[(9)] = inst_35222);

return statearr_35248;
})();
var statearr_35249_35262 = state_35246__$1;
(statearr_35249_35262[(2)] = null);

(statearr_35249_35262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (2))){
var inst_35223 = (state_35246[(8)]);
var inst_35229 = (state_35246[(10)]);
var inst_35228 = cljs.core.seq.call(null,inst_35223);
var inst_35229__$1 = cljs.core.first.call(null,inst_35228);
var inst_35230 = cljs.core.next.call(null,inst_35228);
var inst_35231 = (inst_35229__$1 == null);
var inst_35232 = cljs.core.not.call(null,inst_35231);
var state_35246__$1 = (function (){var statearr_35250 = state_35246;
(statearr_35250[(11)] = inst_35230);

(statearr_35250[(10)] = inst_35229__$1);

return statearr_35250;
})();
if(inst_35232){
var statearr_35251_35263 = state_35246__$1;
(statearr_35251_35263[(1)] = (4));

} else {
var statearr_35252_35264 = state_35246__$1;
(statearr_35252_35264[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (3))){
var inst_35244 = (state_35246[(2)]);
var state_35246__$1 = state_35246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35246__$1,inst_35244);
} else {
if((state_val_35247 === (4))){
var inst_35229 = (state_35246[(10)]);
var inst_35234 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35229);
var state_35246__$1 = state_35246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35246__$1,(7),inst_35234);
} else {
if((state_val_35247 === (5))){
var inst_35240 = cljs.core.async.close_BANG_.call(null,out);
var state_35246__$1 = state_35246;
var statearr_35253_35265 = state_35246__$1;
(statearr_35253_35265[(2)] = inst_35240);

(statearr_35253_35265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (6))){
var inst_35242 = (state_35246[(2)]);
var state_35246__$1 = state_35246;
var statearr_35254_35266 = state_35246__$1;
(statearr_35254_35266[(2)] = inst_35242);

(statearr_35254_35266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (7))){
var inst_35230 = (state_35246[(11)]);
var inst_35236 = (state_35246[(2)]);
var inst_35237 = cljs.core.async.put_BANG_.call(null,out,inst_35236);
var inst_35223 = inst_35230;
var state_35246__$1 = (function (){var statearr_35255 = state_35246;
(statearr_35255[(12)] = inst_35237);

(statearr_35255[(8)] = inst_35223);

return statearr_35255;
})();
var statearr_35256_35267 = state_35246__$1;
(statearr_35256_35267[(2)] = null);

(statearr_35256_35267[(1)] = (2));


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
});})(c__31916__auto___35261,out))
;
return ((function (switch__31828__auto__,c__31916__auto___35261,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31829__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31829__auto____0 = (function (){
var statearr_35257 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35257[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31829__auto__);

(statearr_35257[(1)] = (1));

return statearr_35257;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31829__auto____1 = (function (state_35246){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_35246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e35258){if((e35258 instanceof Object)){
var ex__31832__auto__ = e35258;
var statearr_35259_35268 = state_35246;
(statearr_35259_35268[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35269 = state_35246;
state_35246 = G__35269;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31829__auto__ = function(state_35246){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31829__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31829__auto____1.call(this,state_35246);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31829__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31829__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto___35261,out))
})();
var state__31918__auto__ = (function (){var statearr_35260 = f__31917__auto__.call(null);
(statearr_35260[(6)] = c__31916__auto___35261);

return statearr_35260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto___35261,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35270,opts){
var map__35271 = p__35270;
var map__35271__$1 = ((((!((map__35271 == null)))?((((map__35271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35271):map__35271);
var eval_body = cljs.core.get.call(null,map__35271__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35271__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27697__auto__ = eval_body;
if(cljs.core.truth_(and__27697__auto__)){
return typeof eval_body === 'string';
} else {
return and__27697__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35273){var e = e35273;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35274_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35274_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35275){
var vec__35276 = p__35275;
var k = cljs.core.nth.call(null,vec__35276,(0),null);
var v = cljs.core.nth.call(null,vec__35276,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35279){
var vec__35280 = p__35279;
var k = cljs.core.nth.call(null,vec__35280,(0),null);
var v = cljs.core.nth.call(null,vec__35280,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35286,p__35287){
var map__35288 = p__35286;
var map__35288__$1 = ((((!((map__35288 == null)))?((((map__35288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35288):map__35288);
var opts = map__35288__$1;
var before_jsload = cljs.core.get.call(null,map__35288__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35288__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35288__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35289 = p__35287;
var map__35289__$1 = ((((!((map__35289 == null)))?((((map__35289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35289):map__35289);
var msg = map__35289__$1;
var files = cljs.core.get.call(null,map__35289__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35289__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35289__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35443){
var state_val_35444 = (state_35443[(1)]);
if((state_val_35444 === (7))){
var inst_35306 = (state_35443[(7)]);
var inst_35303 = (state_35443[(8)]);
var inst_35305 = (state_35443[(9)]);
var inst_35304 = (state_35443[(10)]);
var inst_35311 = cljs.core._nth.call(null,inst_35304,inst_35306);
var inst_35312 = figwheel.client.file_reloading.eval_body.call(null,inst_35311,opts);
var inst_35313 = (inst_35306 + (1));
var tmp35445 = inst_35303;
var tmp35446 = inst_35305;
var tmp35447 = inst_35304;
var inst_35303__$1 = tmp35445;
var inst_35304__$1 = tmp35447;
var inst_35305__$1 = tmp35446;
var inst_35306__$1 = inst_35313;
var state_35443__$1 = (function (){var statearr_35448 = state_35443;
(statearr_35448[(7)] = inst_35306__$1);

(statearr_35448[(11)] = inst_35312);

(statearr_35448[(8)] = inst_35303__$1);

(statearr_35448[(9)] = inst_35305__$1);

(statearr_35448[(10)] = inst_35304__$1);

return statearr_35448;
})();
var statearr_35449_35532 = state_35443__$1;
(statearr_35449_35532[(2)] = null);

(statearr_35449_35532[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (20))){
var inst_35346 = (state_35443[(12)]);
var inst_35354 = figwheel.client.file_reloading.sort_files.call(null,inst_35346);
var state_35443__$1 = state_35443;
var statearr_35450_35533 = state_35443__$1;
(statearr_35450_35533[(2)] = inst_35354);

(statearr_35450_35533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (27))){
var state_35443__$1 = state_35443;
var statearr_35451_35534 = state_35443__$1;
(statearr_35451_35534[(2)] = null);

(statearr_35451_35534[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (1))){
var inst_35295 = (state_35443[(13)]);
var inst_35292 = before_jsload.call(null,files);
var inst_35293 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35294 = (function (){return ((function (inst_35295,inst_35292,inst_35293,state_val_35444,c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35283_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35283_SHARP_);
});
;})(inst_35295,inst_35292,inst_35293,state_val_35444,c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35295__$1 = cljs.core.filter.call(null,inst_35294,files);
var inst_35296 = cljs.core.not_empty.call(null,inst_35295__$1);
var state_35443__$1 = (function (){var statearr_35452 = state_35443;
(statearr_35452[(14)] = inst_35293);

(statearr_35452[(15)] = inst_35292);

(statearr_35452[(13)] = inst_35295__$1);

return statearr_35452;
})();
if(cljs.core.truth_(inst_35296)){
var statearr_35453_35535 = state_35443__$1;
(statearr_35453_35535[(1)] = (2));

} else {
var statearr_35454_35536 = state_35443__$1;
(statearr_35454_35536[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (24))){
var state_35443__$1 = state_35443;
var statearr_35455_35537 = state_35443__$1;
(statearr_35455_35537[(2)] = null);

(statearr_35455_35537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (39))){
var inst_35396 = (state_35443[(16)]);
var state_35443__$1 = state_35443;
var statearr_35456_35538 = state_35443__$1;
(statearr_35456_35538[(2)] = inst_35396);

(statearr_35456_35538[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (46))){
var inst_35438 = (state_35443[(2)]);
var state_35443__$1 = state_35443;
var statearr_35457_35539 = state_35443__$1;
(statearr_35457_35539[(2)] = inst_35438);

(statearr_35457_35539[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (4))){
var inst_35340 = (state_35443[(2)]);
var inst_35341 = cljs.core.List.EMPTY;
var inst_35342 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35341);
var inst_35343 = (function (){return ((function (inst_35340,inst_35341,inst_35342,state_val_35444,c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35284_SHARP_){
var and__27697__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35284_SHARP_);
if(cljs.core.truth_(and__27697__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35284_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35284_SHARP_)));
} else {
return and__27697__auto__;
}
});
;})(inst_35340,inst_35341,inst_35342,state_val_35444,c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35344 = cljs.core.filter.call(null,inst_35343,files);
var inst_35345 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35346 = cljs.core.concat.call(null,inst_35344,inst_35345);
var state_35443__$1 = (function (){var statearr_35458 = state_35443;
(statearr_35458[(17)] = inst_35342);

(statearr_35458[(12)] = inst_35346);

(statearr_35458[(18)] = inst_35340);

return statearr_35458;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35459_35540 = state_35443__$1;
(statearr_35459_35540[(1)] = (16));

} else {
var statearr_35460_35541 = state_35443__$1;
(statearr_35460_35541[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (15))){
var inst_35330 = (state_35443[(2)]);
var state_35443__$1 = state_35443;
var statearr_35461_35542 = state_35443__$1;
(statearr_35461_35542[(2)] = inst_35330);

(statearr_35461_35542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (21))){
var inst_35356 = (state_35443[(19)]);
var inst_35356__$1 = (state_35443[(2)]);
var inst_35357 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35356__$1);
var state_35443__$1 = (function (){var statearr_35462 = state_35443;
(statearr_35462[(19)] = inst_35356__$1);

return statearr_35462;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35443__$1,(22),inst_35357);
} else {
if((state_val_35444 === (31))){
var inst_35441 = (state_35443[(2)]);
var state_35443__$1 = state_35443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35443__$1,inst_35441);
} else {
if((state_val_35444 === (32))){
var inst_35396 = (state_35443[(16)]);
var inst_35401 = inst_35396.cljs$lang$protocol_mask$partition0$;
var inst_35402 = (inst_35401 & (64));
var inst_35403 = inst_35396.cljs$core$ISeq$;
var inst_35404 = (cljs.core.PROTOCOL_SENTINEL === inst_35403);
var inst_35405 = (inst_35402) || (inst_35404);
var state_35443__$1 = state_35443;
if(cljs.core.truth_(inst_35405)){
var statearr_35463_35543 = state_35443__$1;
(statearr_35463_35543[(1)] = (35));

} else {
var statearr_35464_35544 = state_35443__$1;
(statearr_35464_35544[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (40))){
var inst_35418 = (state_35443[(20)]);
var inst_35417 = (state_35443[(2)]);
var inst_35418__$1 = cljs.core.get.call(null,inst_35417,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35419 = cljs.core.get.call(null,inst_35417,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35420 = cljs.core.not_empty.call(null,inst_35418__$1);
var state_35443__$1 = (function (){var statearr_35465 = state_35443;
(statearr_35465[(21)] = inst_35419);

(statearr_35465[(20)] = inst_35418__$1);

return statearr_35465;
})();
if(cljs.core.truth_(inst_35420)){
var statearr_35466_35545 = state_35443__$1;
(statearr_35466_35545[(1)] = (41));

} else {
var statearr_35467_35546 = state_35443__$1;
(statearr_35467_35546[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (33))){
var state_35443__$1 = state_35443;
var statearr_35468_35547 = state_35443__$1;
(statearr_35468_35547[(2)] = false);

(statearr_35468_35547[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (13))){
var inst_35316 = (state_35443[(22)]);
var inst_35320 = cljs.core.chunk_first.call(null,inst_35316);
var inst_35321 = cljs.core.chunk_rest.call(null,inst_35316);
var inst_35322 = cljs.core.count.call(null,inst_35320);
var inst_35303 = inst_35321;
var inst_35304 = inst_35320;
var inst_35305 = inst_35322;
var inst_35306 = (0);
var state_35443__$1 = (function (){var statearr_35469 = state_35443;
(statearr_35469[(7)] = inst_35306);

(statearr_35469[(8)] = inst_35303);

(statearr_35469[(9)] = inst_35305);

(statearr_35469[(10)] = inst_35304);

return statearr_35469;
})();
var statearr_35470_35548 = state_35443__$1;
(statearr_35470_35548[(2)] = null);

(statearr_35470_35548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (22))){
var inst_35356 = (state_35443[(19)]);
var inst_35360 = (state_35443[(23)]);
var inst_35359 = (state_35443[(24)]);
var inst_35364 = (state_35443[(25)]);
var inst_35359__$1 = (state_35443[(2)]);
var inst_35360__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35359__$1);
var inst_35361 = (function (){var all_files = inst_35356;
var res_SINGLEQUOTE_ = inst_35359__$1;
var res = inst_35360__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35356,inst_35360,inst_35359,inst_35364,inst_35359__$1,inst_35360__$1,state_val_35444,c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35285_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35285_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35356,inst_35360,inst_35359,inst_35364,inst_35359__$1,inst_35360__$1,state_val_35444,c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35362 = cljs.core.filter.call(null,inst_35361,inst_35359__$1);
var inst_35363 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35364__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35363);
var inst_35365 = cljs.core.not_empty.call(null,inst_35364__$1);
var state_35443__$1 = (function (){var statearr_35471 = state_35443;
(statearr_35471[(26)] = inst_35362);

(statearr_35471[(23)] = inst_35360__$1);

(statearr_35471[(24)] = inst_35359__$1);

(statearr_35471[(25)] = inst_35364__$1);

return statearr_35471;
})();
if(cljs.core.truth_(inst_35365)){
var statearr_35472_35549 = state_35443__$1;
(statearr_35472_35549[(1)] = (23));

} else {
var statearr_35473_35550 = state_35443__$1;
(statearr_35473_35550[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (36))){
var state_35443__$1 = state_35443;
var statearr_35474_35551 = state_35443__$1;
(statearr_35474_35551[(2)] = false);

(statearr_35474_35551[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (41))){
var inst_35418 = (state_35443[(20)]);
var inst_35422 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35423 = cljs.core.map.call(null,inst_35422,inst_35418);
var inst_35424 = cljs.core.pr_str.call(null,inst_35423);
var inst_35425 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35424)].join('');
var inst_35426 = figwheel.client.utils.log.call(null,inst_35425);
var state_35443__$1 = state_35443;
var statearr_35475_35552 = state_35443__$1;
(statearr_35475_35552[(2)] = inst_35426);

(statearr_35475_35552[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (43))){
var inst_35419 = (state_35443[(21)]);
var inst_35429 = (state_35443[(2)]);
var inst_35430 = cljs.core.not_empty.call(null,inst_35419);
var state_35443__$1 = (function (){var statearr_35476 = state_35443;
(statearr_35476[(27)] = inst_35429);

return statearr_35476;
})();
if(cljs.core.truth_(inst_35430)){
var statearr_35477_35553 = state_35443__$1;
(statearr_35477_35553[(1)] = (44));

} else {
var statearr_35478_35554 = state_35443__$1;
(statearr_35478_35554[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (29))){
var inst_35396 = (state_35443[(16)]);
var inst_35356 = (state_35443[(19)]);
var inst_35362 = (state_35443[(26)]);
var inst_35360 = (state_35443[(23)]);
var inst_35359 = (state_35443[(24)]);
var inst_35364 = (state_35443[(25)]);
var inst_35392 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35395 = (function (){var all_files = inst_35356;
var res_SINGLEQUOTE_ = inst_35359;
var res = inst_35360;
var files_not_loaded = inst_35362;
var dependencies_that_loaded = inst_35364;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35396,inst_35356,inst_35362,inst_35360,inst_35359,inst_35364,inst_35392,state_val_35444,c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35394){
var map__35479 = p__35394;
var map__35479__$1 = ((((!((map__35479 == null)))?((((map__35479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35479):map__35479);
var namespace = cljs.core.get.call(null,map__35479__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35396,inst_35356,inst_35362,inst_35360,inst_35359,inst_35364,inst_35392,state_val_35444,c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35396__$1 = cljs.core.group_by.call(null,inst_35395,inst_35362);
var inst_35398 = (inst_35396__$1 == null);
var inst_35399 = cljs.core.not.call(null,inst_35398);
var state_35443__$1 = (function (){var statearr_35481 = state_35443;
(statearr_35481[(16)] = inst_35396__$1);

(statearr_35481[(28)] = inst_35392);

return statearr_35481;
})();
if(inst_35399){
var statearr_35482_35555 = state_35443__$1;
(statearr_35482_35555[(1)] = (32));

} else {
var statearr_35483_35556 = state_35443__$1;
(statearr_35483_35556[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (44))){
var inst_35419 = (state_35443[(21)]);
var inst_35432 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35419);
var inst_35433 = cljs.core.pr_str.call(null,inst_35432);
var inst_35434 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35433)].join('');
var inst_35435 = figwheel.client.utils.log.call(null,inst_35434);
var state_35443__$1 = state_35443;
var statearr_35484_35557 = state_35443__$1;
(statearr_35484_35557[(2)] = inst_35435);

(statearr_35484_35557[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (6))){
var inst_35337 = (state_35443[(2)]);
var state_35443__$1 = state_35443;
var statearr_35485_35558 = state_35443__$1;
(statearr_35485_35558[(2)] = inst_35337);

(statearr_35485_35558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (28))){
var inst_35362 = (state_35443[(26)]);
var inst_35389 = (state_35443[(2)]);
var inst_35390 = cljs.core.not_empty.call(null,inst_35362);
var state_35443__$1 = (function (){var statearr_35486 = state_35443;
(statearr_35486[(29)] = inst_35389);

return statearr_35486;
})();
if(cljs.core.truth_(inst_35390)){
var statearr_35487_35559 = state_35443__$1;
(statearr_35487_35559[(1)] = (29));

} else {
var statearr_35488_35560 = state_35443__$1;
(statearr_35488_35560[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (25))){
var inst_35360 = (state_35443[(23)]);
var inst_35376 = (state_35443[(2)]);
var inst_35377 = cljs.core.not_empty.call(null,inst_35360);
var state_35443__$1 = (function (){var statearr_35489 = state_35443;
(statearr_35489[(30)] = inst_35376);

return statearr_35489;
})();
if(cljs.core.truth_(inst_35377)){
var statearr_35490_35561 = state_35443__$1;
(statearr_35490_35561[(1)] = (26));

} else {
var statearr_35491_35562 = state_35443__$1;
(statearr_35491_35562[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (34))){
var inst_35412 = (state_35443[(2)]);
var state_35443__$1 = state_35443;
if(cljs.core.truth_(inst_35412)){
var statearr_35492_35563 = state_35443__$1;
(statearr_35492_35563[(1)] = (38));

} else {
var statearr_35493_35564 = state_35443__$1;
(statearr_35493_35564[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (17))){
var state_35443__$1 = state_35443;
var statearr_35494_35565 = state_35443__$1;
(statearr_35494_35565[(2)] = recompile_dependents);

(statearr_35494_35565[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (3))){
var state_35443__$1 = state_35443;
var statearr_35495_35566 = state_35443__$1;
(statearr_35495_35566[(2)] = null);

(statearr_35495_35566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (12))){
var inst_35333 = (state_35443[(2)]);
var state_35443__$1 = state_35443;
var statearr_35496_35567 = state_35443__$1;
(statearr_35496_35567[(2)] = inst_35333);

(statearr_35496_35567[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (2))){
var inst_35295 = (state_35443[(13)]);
var inst_35302 = cljs.core.seq.call(null,inst_35295);
var inst_35303 = inst_35302;
var inst_35304 = null;
var inst_35305 = (0);
var inst_35306 = (0);
var state_35443__$1 = (function (){var statearr_35497 = state_35443;
(statearr_35497[(7)] = inst_35306);

(statearr_35497[(8)] = inst_35303);

(statearr_35497[(9)] = inst_35305);

(statearr_35497[(10)] = inst_35304);

return statearr_35497;
})();
var statearr_35498_35568 = state_35443__$1;
(statearr_35498_35568[(2)] = null);

(statearr_35498_35568[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (23))){
var inst_35356 = (state_35443[(19)]);
var inst_35362 = (state_35443[(26)]);
var inst_35360 = (state_35443[(23)]);
var inst_35359 = (state_35443[(24)]);
var inst_35364 = (state_35443[(25)]);
var inst_35367 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35369 = (function (){var all_files = inst_35356;
var res_SINGLEQUOTE_ = inst_35359;
var res = inst_35360;
var files_not_loaded = inst_35362;
var dependencies_that_loaded = inst_35364;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35356,inst_35362,inst_35360,inst_35359,inst_35364,inst_35367,state_val_35444,c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35368){
var map__35499 = p__35368;
var map__35499__$1 = ((((!((map__35499 == null)))?((((map__35499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35499):map__35499);
var request_url = cljs.core.get.call(null,map__35499__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35356,inst_35362,inst_35360,inst_35359,inst_35364,inst_35367,state_val_35444,c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35370 = cljs.core.reverse.call(null,inst_35364);
var inst_35371 = cljs.core.map.call(null,inst_35369,inst_35370);
var inst_35372 = cljs.core.pr_str.call(null,inst_35371);
var inst_35373 = figwheel.client.utils.log.call(null,inst_35372);
var state_35443__$1 = (function (){var statearr_35501 = state_35443;
(statearr_35501[(31)] = inst_35367);

return statearr_35501;
})();
var statearr_35502_35569 = state_35443__$1;
(statearr_35502_35569[(2)] = inst_35373);

(statearr_35502_35569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (35))){
var state_35443__$1 = state_35443;
var statearr_35503_35570 = state_35443__$1;
(statearr_35503_35570[(2)] = true);

(statearr_35503_35570[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (19))){
var inst_35346 = (state_35443[(12)]);
var inst_35352 = figwheel.client.file_reloading.expand_files.call(null,inst_35346);
var state_35443__$1 = state_35443;
var statearr_35504_35571 = state_35443__$1;
(statearr_35504_35571[(2)] = inst_35352);

(statearr_35504_35571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (11))){
var state_35443__$1 = state_35443;
var statearr_35505_35572 = state_35443__$1;
(statearr_35505_35572[(2)] = null);

(statearr_35505_35572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (9))){
var inst_35335 = (state_35443[(2)]);
var state_35443__$1 = state_35443;
var statearr_35506_35573 = state_35443__$1;
(statearr_35506_35573[(2)] = inst_35335);

(statearr_35506_35573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (5))){
var inst_35306 = (state_35443[(7)]);
var inst_35305 = (state_35443[(9)]);
var inst_35308 = (inst_35306 < inst_35305);
var inst_35309 = inst_35308;
var state_35443__$1 = state_35443;
if(cljs.core.truth_(inst_35309)){
var statearr_35507_35574 = state_35443__$1;
(statearr_35507_35574[(1)] = (7));

} else {
var statearr_35508_35575 = state_35443__$1;
(statearr_35508_35575[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (14))){
var inst_35316 = (state_35443[(22)]);
var inst_35325 = cljs.core.first.call(null,inst_35316);
var inst_35326 = figwheel.client.file_reloading.eval_body.call(null,inst_35325,opts);
var inst_35327 = cljs.core.next.call(null,inst_35316);
var inst_35303 = inst_35327;
var inst_35304 = null;
var inst_35305 = (0);
var inst_35306 = (0);
var state_35443__$1 = (function (){var statearr_35509 = state_35443;
(statearr_35509[(7)] = inst_35306);

(statearr_35509[(8)] = inst_35303);

(statearr_35509[(32)] = inst_35326);

(statearr_35509[(9)] = inst_35305);

(statearr_35509[(10)] = inst_35304);

return statearr_35509;
})();
var statearr_35510_35576 = state_35443__$1;
(statearr_35510_35576[(2)] = null);

(statearr_35510_35576[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (45))){
var state_35443__$1 = state_35443;
var statearr_35511_35577 = state_35443__$1;
(statearr_35511_35577[(2)] = null);

(statearr_35511_35577[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (26))){
var inst_35356 = (state_35443[(19)]);
var inst_35362 = (state_35443[(26)]);
var inst_35360 = (state_35443[(23)]);
var inst_35359 = (state_35443[(24)]);
var inst_35364 = (state_35443[(25)]);
var inst_35379 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35381 = (function (){var all_files = inst_35356;
var res_SINGLEQUOTE_ = inst_35359;
var res = inst_35360;
var files_not_loaded = inst_35362;
var dependencies_that_loaded = inst_35364;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35356,inst_35362,inst_35360,inst_35359,inst_35364,inst_35379,state_val_35444,c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35380){
var map__35512 = p__35380;
var map__35512__$1 = ((((!((map__35512 == null)))?((((map__35512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35512):map__35512);
var namespace = cljs.core.get.call(null,map__35512__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35512__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35356,inst_35362,inst_35360,inst_35359,inst_35364,inst_35379,state_val_35444,c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35382 = cljs.core.map.call(null,inst_35381,inst_35360);
var inst_35383 = cljs.core.pr_str.call(null,inst_35382);
var inst_35384 = figwheel.client.utils.log.call(null,inst_35383);
var inst_35385 = (function (){var all_files = inst_35356;
var res_SINGLEQUOTE_ = inst_35359;
var res = inst_35360;
var files_not_loaded = inst_35362;
var dependencies_that_loaded = inst_35364;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35356,inst_35362,inst_35360,inst_35359,inst_35364,inst_35379,inst_35381,inst_35382,inst_35383,inst_35384,state_val_35444,c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35356,inst_35362,inst_35360,inst_35359,inst_35364,inst_35379,inst_35381,inst_35382,inst_35383,inst_35384,state_val_35444,c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35386 = setTimeout(inst_35385,(10));
var state_35443__$1 = (function (){var statearr_35514 = state_35443;
(statearr_35514[(33)] = inst_35384);

(statearr_35514[(34)] = inst_35379);

return statearr_35514;
})();
var statearr_35515_35578 = state_35443__$1;
(statearr_35515_35578[(2)] = inst_35386);

(statearr_35515_35578[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (16))){
var state_35443__$1 = state_35443;
var statearr_35516_35579 = state_35443__$1;
(statearr_35516_35579[(2)] = reload_dependents);

(statearr_35516_35579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (38))){
var inst_35396 = (state_35443[(16)]);
var inst_35414 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35396);
var state_35443__$1 = state_35443;
var statearr_35517_35580 = state_35443__$1;
(statearr_35517_35580[(2)] = inst_35414);

(statearr_35517_35580[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (30))){
var state_35443__$1 = state_35443;
var statearr_35518_35581 = state_35443__$1;
(statearr_35518_35581[(2)] = null);

(statearr_35518_35581[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (10))){
var inst_35316 = (state_35443[(22)]);
var inst_35318 = cljs.core.chunked_seq_QMARK_.call(null,inst_35316);
var state_35443__$1 = state_35443;
if(inst_35318){
var statearr_35519_35582 = state_35443__$1;
(statearr_35519_35582[(1)] = (13));

} else {
var statearr_35520_35583 = state_35443__$1;
(statearr_35520_35583[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (18))){
var inst_35350 = (state_35443[(2)]);
var state_35443__$1 = state_35443;
if(cljs.core.truth_(inst_35350)){
var statearr_35521_35584 = state_35443__$1;
(statearr_35521_35584[(1)] = (19));

} else {
var statearr_35522_35585 = state_35443__$1;
(statearr_35522_35585[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (42))){
var state_35443__$1 = state_35443;
var statearr_35523_35586 = state_35443__$1;
(statearr_35523_35586[(2)] = null);

(statearr_35523_35586[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (37))){
var inst_35409 = (state_35443[(2)]);
var state_35443__$1 = state_35443;
var statearr_35524_35587 = state_35443__$1;
(statearr_35524_35587[(2)] = inst_35409);

(statearr_35524_35587[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (8))){
var inst_35303 = (state_35443[(8)]);
var inst_35316 = (state_35443[(22)]);
var inst_35316__$1 = cljs.core.seq.call(null,inst_35303);
var state_35443__$1 = (function (){var statearr_35525 = state_35443;
(statearr_35525[(22)] = inst_35316__$1);

return statearr_35525;
})();
if(inst_35316__$1){
var statearr_35526_35588 = state_35443__$1;
(statearr_35526_35588[(1)] = (10));

} else {
var statearr_35527_35589 = state_35443__$1;
(statearr_35527_35589[(1)] = (11));

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
});})(c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31828__auto__,c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31829__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31829__auto____0 = (function (){
var statearr_35528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35528[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31829__auto__);

(statearr_35528[(1)] = (1));

return statearr_35528;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31829__auto____1 = (function (state_35443){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_35443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e35529){if((e35529 instanceof Object)){
var ex__31832__auto__ = e35529;
var statearr_35530_35590 = state_35443;
(statearr_35530_35590[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35591 = state_35443;
state_35443 = G__35591;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31829__auto__ = function(state_35443){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31829__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31829__auto____1.call(this,state_35443);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31829__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31829__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31918__auto__ = (function (){var statearr_35531 = f__31917__auto__.call(null);
(statearr_35531[(6)] = c__31916__auto__);

return statearr_35531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto__,map__35288,map__35288__$1,opts,before_jsload,on_jsload,reload_dependents,map__35289,map__35289__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31916__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35594,link){
var map__35595 = p__35594;
var map__35595__$1 = ((((!((map__35595 == null)))?((((map__35595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35595):map__35595);
var file = cljs.core.get.call(null,map__35595__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35595,map__35595__$1,file){
return (function (p1__35592_SHARP_,p2__35593_SHARP_){
if(cljs.core._EQ_.call(null,p1__35592_SHARP_,p2__35593_SHARP_)){
return p1__35592_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35595,map__35595__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35598){
var map__35599 = p__35598;
var map__35599__$1 = ((((!((map__35599 == null)))?((((map__35599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35599):map__35599);
var match_length = cljs.core.get.call(null,map__35599__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35599__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35597_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35597_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35601_SHARP_,p2__35602_SHARP_){
return cljs.core.assoc.call(null,p1__35601_SHARP_,cljs.core.get.call(null,p2__35602_SHARP_,key),p2__35602_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35603 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35603);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35603);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35604,p__35605){
var map__35606 = p__35604;
var map__35606__$1 = ((((!((map__35606 == null)))?((((map__35606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35606):map__35606);
var on_cssload = cljs.core.get.call(null,map__35606__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35607 = p__35605;
var map__35607__$1 = ((((!((map__35607 == null)))?((((map__35607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35607):map__35607);
var files_msg = map__35607__$1;
var files = cljs.core.get.call(null,map__35607__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1511212150749
