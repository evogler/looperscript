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
var or__27936__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27936__auto__){
return or__27936__auto__;
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
var or__27936__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
var or__27936__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27936__auto____$1)){
return or__27936__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36739_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36739_SHARP_));
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
var seq__36740 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36741 = null;
var count__36742 = (0);
var i__36743 = (0);
while(true){
if((i__36743 < count__36742)){
var n = cljs.core._nth.call(null,chunk__36741,i__36743);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36744 = seq__36740;
var G__36745 = chunk__36741;
var G__36746 = count__36742;
var G__36747 = (i__36743 + (1));
seq__36740 = G__36744;
chunk__36741 = G__36745;
count__36742 = G__36746;
i__36743 = G__36747;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36740);
if(temp__4657__auto__){
var seq__36740__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36740__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__36740__$1);
var G__36748 = cljs.core.chunk_rest.call(null,seq__36740__$1);
var G__36749 = c__28775__auto__;
var G__36750 = cljs.core.count.call(null,c__28775__auto__);
var G__36751 = (0);
seq__36740 = G__36748;
chunk__36741 = G__36749;
count__36742 = G__36750;
i__36743 = G__36751;
continue;
} else {
var n = cljs.core.first.call(null,seq__36740__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36752 = cljs.core.next.call(null,seq__36740__$1);
var G__36753 = null;
var G__36754 = (0);
var G__36755 = (0);
seq__36740 = G__36752;
chunk__36741 = G__36753;
count__36742 = G__36754;
i__36743 = G__36755;
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

var seq__36765_36773 = cljs.core.seq.call(null,deps);
var chunk__36766_36774 = null;
var count__36767_36775 = (0);
var i__36768_36776 = (0);
while(true){
if((i__36768_36776 < count__36767_36775)){
var dep_36777 = cljs.core._nth.call(null,chunk__36766_36774,i__36768_36776);
topo_sort_helper_STAR_.call(null,dep_36777,(depth + (1)),state);

var G__36778 = seq__36765_36773;
var G__36779 = chunk__36766_36774;
var G__36780 = count__36767_36775;
var G__36781 = (i__36768_36776 + (1));
seq__36765_36773 = G__36778;
chunk__36766_36774 = G__36779;
count__36767_36775 = G__36780;
i__36768_36776 = G__36781;
continue;
} else {
var temp__4657__auto___36782 = cljs.core.seq.call(null,seq__36765_36773);
if(temp__4657__auto___36782){
var seq__36765_36783__$1 = temp__4657__auto___36782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36765_36783__$1)){
var c__28775__auto___36784 = cljs.core.chunk_first.call(null,seq__36765_36783__$1);
var G__36785 = cljs.core.chunk_rest.call(null,seq__36765_36783__$1);
var G__36786 = c__28775__auto___36784;
var G__36787 = cljs.core.count.call(null,c__28775__auto___36784);
var G__36788 = (0);
seq__36765_36773 = G__36785;
chunk__36766_36774 = G__36786;
count__36767_36775 = G__36787;
i__36768_36776 = G__36788;
continue;
} else {
var dep_36789 = cljs.core.first.call(null,seq__36765_36783__$1);
topo_sort_helper_STAR_.call(null,dep_36789,(depth + (1)),state);

var G__36790 = cljs.core.next.call(null,seq__36765_36783__$1);
var G__36791 = null;
var G__36792 = (0);
var G__36793 = (0);
seq__36765_36773 = G__36790;
chunk__36766_36774 = G__36791;
count__36767_36775 = G__36792;
i__36768_36776 = G__36793;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36769){
var vec__36770 = p__36769;
var seq__36771 = cljs.core.seq.call(null,vec__36770);
var first__36772 = cljs.core.first.call(null,seq__36771);
var seq__36771__$1 = cljs.core.next.call(null,seq__36771);
var x = first__36772;
var xs = seq__36771__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36770,seq__36771,first__36772,seq__36771__$1,x,xs,get_deps__$1){
return (function (p1__36756_SHARP_){
return clojure.set.difference.call(null,p1__36756_SHARP_,x);
});})(vec__36770,seq__36771,first__36772,seq__36771__$1,x,xs,get_deps__$1))
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
var seq__36794 = cljs.core.seq.call(null,provides);
var chunk__36795 = null;
var count__36796 = (0);
var i__36797 = (0);
while(true){
if((i__36797 < count__36796)){
var prov = cljs.core._nth.call(null,chunk__36795,i__36797);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36798_36806 = cljs.core.seq.call(null,requires);
var chunk__36799_36807 = null;
var count__36800_36808 = (0);
var i__36801_36809 = (0);
while(true){
if((i__36801_36809 < count__36800_36808)){
var req_36810 = cljs.core._nth.call(null,chunk__36799_36807,i__36801_36809);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36810,prov);

var G__36811 = seq__36798_36806;
var G__36812 = chunk__36799_36807;
var G__36813 = count__36800_36808;
var G__36814 = (i__36801_36809 + (1));
seq__36798_36806 = G__36811;
chunk__36799_36807 = G__36812;
count__36800_36808 = G__36813;
i__36801_36809 = G__36814;
continue;
} else {
var temp__4657__auto___36815 = cljs.core.seq.call(null,seq__36798_36806);
if(temp__4657__auto___36815){
var seq__36798_36816__$1 = temp__4657__auto___36815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36798_36816__$1)){
var c__28775__auto___36817 = cljs.core.chunk_first.call(null,seq__36798_36816__$1);
var G__36818 = cljs.core.chunk_rest.call(null,seq__36798_36816__$1);
var G__36819 = c__28775__auto___36817;
var G__36820 = cljs.core.count.call(null,c__28775__auto___36817);
var G__36821 = (0);
seq__36798_36806 = G__36818;
chunk__36799_36807 = G__36819;
count__36800_36808 = G__36820;
i__36801_36809 = G__36821;
continue;
} else {
var req_36822 = cljs.core.first.call(null,seq__36798_36816__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36822,prov);

var G__36823 = cljs.core.next.call(null,seq__36798_36816__$1);
var G__36824 = null;
var G__36825 = (0);
var G__36826 = (0);
seq__36798_36806 = G__36823;
chunk__36799_36807 = G__36824;
count__36800_36808 = G__36825;
i__36801_36809 = G__36826;
continue;
}
} else {
}
}
break;
}

var G__36827 = seq__36794;
var G__36828 = chunk__36795;
var G__36829 = count__36796;
var G__36830 = (i__36797 + (1));
seq__36794 = G__36827;
chunk__36795 = G__36828;
count__36796 = G__36829;
i__36797 = G__36830;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36794);
if(temp__4657__auto__){
var seq__36794__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36794__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__36794__$1);
var G__36831 = cljs.core.chunk_rest.call(null,seq__36794__$1);
var G__36832 = c__28775__auto__;
var G__36833 = cljs.core.count.call(null,c__28775__auto__);
var G__36834 = (0);
seq__36794 = G__36831;
chunk__36795 = G__36832;
count__36796 = G__36833;
i__36797 = G__36834;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36794__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36802_36835 = cljs.core.seq.call(null,requires);
var chunk__36803_36836 = null;
var count__36804_36837 = (0);
var i__36805_36838 = (0);
while(true){
if((i__36805_36838 < count__36804_36837)){
var req_36839 = cljs.core._nth.call(null,chunk__36803_36836,i__36805_36838);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36839,prov);

var G__36840 = seq__36802_36835;
var G__36841 = chunk__36803_36836;
var G__36842 = count__36804_36837;
var G__36843 = (i__36805_36838 + (1));
seq__36802_36835 = G__36840;
chunk__36803_36836 = G__36841;
count__36804_36837 = G__36842;
i__36805_36838 = G__36843;
continue;
} else {
var temp__4657__auto___36844__$1 = cljs.core.seq.call(null,seq__36802_36835);
if(temp__4657__auto___36844__$1){
var seq__36802_36845__$1 = temp__4657__auto___36844__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36802_36845__$1)){
var c__28775__auto___36846 = cljs.core.chunk_first.call(null,seq__36802_36845__$1);
var G__36847 = cljs.core.chunk_rest.call(null,seq__36802_36845__$1);
var G__36848 = c__28775__auto___36846;
var G__36849 = cljs.core.count.call(null,c__28775__auto___36846);
var G__36850 = (0);
seq__36802_36835 = G__36847;
chunk__36803_36836 = G__36848;
count__36804_36837 = G__36849;
i__36805_36838 = G__36850;
continue;
} else {
var req_36851 = cljs.core.first.call(null,seq__36802_36845__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36851,prov);

var G__36852 = cljs.core.next.call(null,seq__36802_36845__$1);
var G__36853 = null;
var G__36854 = (0);
var G__36855 = (0);
seq__36802_36835 = G__36852;
chunk__36803_36836 = G__36853;
count__36804_36837 = G__36854;
i__36805_36838 = G__36855;
continue;
}
} else {
}
}
break;
}

var G__36856 = cljs.core.next.call(null,seq__36794__$1);
var G__36857 = null;
var G__36858 = (0);
var G__36859 = (0);
seq__36794 = G__36856;
chunk__36795 = G__36857;
count__36796 = G__36858;
i__36797 = G__36859;
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
var seq__36860_36864 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36861_36865 = null;
var count__36862_36866 = (0);
var i__36863_36867 = (0);
while(true){
if((i__36863_36867 < count__36862_36866)){
var ns_36868 = cljs.core._nth.call(null,chunk__36861_36865,i__36863_36867);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36868);

var G__36869 = seq__36860_36864;
var G__36870 = chunk__36861_36865;
var G__36871 = count__36862_36866;
var G__36872 = (i__36863_36867 + (1));
seq__36860_36864 = G__36869;
chunk__36861_36865 = G__36870;
count__36862_36866 = G__36871;
i__36863_36867 = G__36872;
continue;
} else {
var temp__4657__auto___36873 = cljs.core.seq.call(null,seq__36860_36864);
if(temp__4657__auto___36873){
var seq__36860_36874__$1 = temp__4657__auto___36873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36860_36874__$1)){
var c__28775__auto___36875 = cljs.core.chunk_first.call(null,seq__36860_36874__$1);
var G__36876 = cljs.core.chunk_rest.call(null,seq__36860_36874__$1);
var G__36877 = c__28775__auto___36875;
var G__36878 = cljs.core.count.call(null,c__28775__auto___36875);
var G__36879 = (0);
seq__36860_36864 = G__36876;
chunk__36861_36865 = G__36877;
count__36862_36866 = G__36878;
i__36863_36867 = G__36879;
continue;
} else {
var ns_36880 = cljs.core.first.call(null,seq__36860_36874__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36880);

var G__36881 = cljs.core.next.call(null,seq__36860_36874__$1);
var G__36882 = null;
var G__36883 = (0);
var G__36884 = (0);
seq__36860_36864 = G__36881;
chunk__36861_36865 = G__36882;
count__36862_36866 = G__36883;
i__36863_36867 = G__36884;
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
goog.require_figwheel_backup_ = (function (){var or__27936__auto__ = goog.require__;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
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
var G__36885__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36886__i = 0, G__36886__a = new Array(arguments.length -  0);
while (G__36886__i < G__36886__a.length) {G__36886__a[G__36886__i] = arguments[G__36886__i + 0]; ++G__36886__i;}
  args = new cljs.core.IndexedSeq(G__36886__a,0,null);
} 
return G__36885__delegate.call(this,args);};
G__36885.cljs$lang$maxFixedArity = 0;
G__36885.cljs$lang$applyTo = (function (arglist__36887){
var args = cljs.core.seq(arglist__36887);
return G__36885__delegate(args);
});
G__36885.cljs$core$IFn$_invoke$arity$variadic = G__36885__delegate;
return G__36885;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36888_SHARP_,p2__36889_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36888_SHARP_)].join('')),p2__36889_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36890_SHARP_,p2__36891_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36890_SHARP_)].join(''),p2__36891_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36892 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36892.addCallback(((function (G__36892){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36892))
);

G__36892.addErrback(((function (G__36892){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36892))
);

return G__36892;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36893 = cljs.core._EQ_;
var expr__36894 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36893.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36894))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36893,expr__36894){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36893,expr__36894))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36893,expr__36894){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36896){if((e36896 instanceof Error)){
var e = e36896;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36896;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36893,expr__36894))
} else {
if(cljs.core.truth_(pred__36893.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36894))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36893.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36894))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36893.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36894))){
return ((function (pred__36893,expr__36894){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36897){if((e36897 instanceof Error)){
var e = e36897;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36897;

}
}})());
});
;})(pred__36893,expr__36894))
} else {
return ((function (pred__36893,expr__36894){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36893,expr__36894))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36898,callback){
var map__36899 = p__36898;
var map__36899__$1 = ((((!((map__36899 == null)))?((((map__36899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36899):map__36899);
var file_msg = map__36899__$1;
var request_url = cljs.core.get.call(null,map__36899__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36899,map__36899__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36899,map__36899__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__33611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto__){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto__){
return (function (state_36923){
var state_val_36924 = (state_36923[(1)]);
if((state_val_36924 === (7))){
var inst_36919 = (state_36923[(2)]);
var state_36923__$1 = state_36923;
var statearr_36925_36942 = state_36923__$1;
(statearr_36925_36942[(2)] = inst_36919);

(statearr_36925_36942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36924 === (1))){
var state_36923__$1 = state_36923;
var statearr_36926_36943 = state_36923__$1;
(statearr_36926_36943[(2)] = null);

(statearr_36926_36943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36924 === (4))){
var inst_36903 = (state_36923[(7)]);
var inst_36903__$1 = (state_36923[(2)]);
var state_36923__$1 = (function (){var statearr_36927 = state_36923;
(statearr_36927[(7)] = inst_36903__$1);

return statearr_36927;
})();
if(cljs.core.truth_(inst_36903__$1)){
var statearr_36928_36944 = state_36923__$1;
(statearr_36928_36944[(1)] = (5));

} else {
var statearr_36929_36945 = state_36923__$1;
(statearr_36929_36945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36924 === (6))){
var state_36923__$1 = state_36923;
var statearr_36930_36946 = state_36923__$1;
(statearr_36930_36946[(2)] = null);

(statearr_36930_36946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36924 === (3))){
var inst_36921 = (state_36923[(2)]);
var state_36923__$1 = state_36923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36923__$1,inst_36921);
} else {
if((state_val_36924 === (2))){
var state_36923__$1 = state_36923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36923__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36924 === (11))){
var inst_36915 = (state_36923[(2)]);
var state_36923__$1 = (function (){var statearr_36931 = state_36923;
(statearr_36931[(8)] = inst_36915);

return statearr_36931;
})();
var statearr_36932_36947 = state_36923__$1;
(statearr_36932_36947[(2)] = null);

(statearr_36932_36947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36924 === (9))){
var inst_36909 = (state_36923[(9)]);
var inst_36907 = (state_36923[(10)]);
var inst_36911 = inst_36909.call(null,inst_36907);
var state_36923__$1 = state_36923;
var statearr_36933_36948 = state_36923__$1;
(statearr_36933_36948[(2)] = inst_36911);

(statearr_36933_36948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36924 === (5))){
var inst_36903 = (state_36923[(7)]);
var inst_36905 = figwheel.client.file_reloading.blocking_load.call(null,inst_36903);
var state_36923__$1 = state_36923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36923__$1,(8),inst_36905);
} else {
if((state_val_36924 === (10))){
var inst_36907 = (state_36923[(10)]);
var inst_36913 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36907);
var state_36923__$1 = state_36923;
var statearr_36934_36949 = state_36923__$1;
(statearr_36934_36949[(2)] = inst_36913);

(statearr_36934_36949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36924 === (8))){
var inst_36909 = (state_36923[(9)]);
var inst_36903 = (state_36923[(7)]);
var inst_36907 = (state_36923[(2)]);
var inst_36908 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36909__$1 = cljs.core.get.call(null,inst_36908,inst_36903);
var state_36923__$1 = (function (){var statearr_36935 = state_36923;
(statearr_36935[(9)] = inst_36909__$1);

(statearr_36935[(10)] = inst_36907);

return statearr_36935;
})();
if(cljs.core.truth_(inst_36909__$1)){
var statearr_36936_36950 = state_36923__$1;
(statearr_36936_36950[(1)] = (9));

} else {
var statearr_36937_36951 = state_36923__$1;
(statearr_36937_36951[(1)] = (10));

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
});})(c__33611__auto__))
;
return ((function (switch__33523__auto__,c__33611__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33524__auto__ = null;
var figwheel$client$file_reloading$state_machine__33524__auto____0 = (function (){
var statearr_36938 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36938[(0)] = figwheel$client$file_reloading$state_machine__33524__auto__);

(statearr_36938[(1)] = (1));

return statearr_36938;
});
var figwheel$client$file_reloading$state_machine__33524__auto____1 = (function (state_36923){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_36923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e36939){if((e36939 instanceof Object)){
var ex__33527__auto__ = e36939;
var statearr_36940_36952 = state_36923;
(statearr_36940_36952[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36953 = state_36923;
state_36923 = G__36953;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33524__auto__ = function(state_36923){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33524__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33524__auto____1.call(this,state_36923);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33524__auto____0;
figwheel$client$file_reloading$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33524__auto____1;
return figwheel$client$file_reloading$state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto__))
})();
var state__33613__auto__ = (function (){var statearr_36941 = f__33612__auto__.call(null);
(statearr_36941[(6)] = c__33611__auto__);

return statearr_36941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto__))
);

return c__33611__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36954,callback){
var map__36955 = p__36954;
var map__36955__$1 = ((((!((map__36955 == null)))?((((map__36955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36955):map__36955);
var file_msg = map__36955__$1;
var namespace = cljs.core.get.call(null,map__36955__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36955,map__36955__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36955,map__36955__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36957){
var map__36958 = p__36957;
var map__36958__$1 = ((((!((map__36958 == null)))?((((map__36958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36958):map__36958);
var file_msg = map__36958__$1;
var namespace = cljs.core.get.call(null,map__36958__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36960){
var map__36961 = p__36960;
var map__36961__$1 = ((((!((map__36961 == null)))?((((map__36961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36961):map__36961);
var file_msg = map__36961__$1;
var namespace = cljs.core.get.call(null,map__36961__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27924__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27924__auto__){
var or__27936__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
var or__27936__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27936__auto____$1)){
return or__27936__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27924__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36963,callback){
var map__36964 = p__36963;
var map__36964__$1 = ((((!((map__36964 == null)))?((((map__36964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36964):map__36964);
var file_msg = map__36964__$1;
var request_url = cljs.core.get.call(null,map__36964__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36964__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33611__auto___37014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___37014,out){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___37014,out){
return (function (state_36999){
var state_val_37000 = (state_36999[(1)]);
if((state_val_37000 === (1))){
var inst_36973 = cljs.core.seq.call(null,files);
var inst_36974 = cljs.core.first.call(null,inst_36973);
var inst_36975 = cljs.core.next.call(null,inst_36973);
var inst_36976 = files;
var state_36999__$1 = (function (){var statearr_37001 = state_36999;
(statearr_37001[(7)] = inst_36976);

(statearr_37001[(8)] = inst_36975);

(statearr_37001[(9)] = inst_36974);

return statearr_37001;
})();
var statearr_37002_37015 = state_36999__$1;
(statearr_37002_37015[(2)] = null);

(statearr_37002_37015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (2))){
var inst_36976 = (state_36999[(7)]);
var inst_36982 = (state_36999[(10)]);
var inst_36981 = cljs.core.seq.call(null,inst_36976);
var inst_36982__$1 = cljs.core.first.call(null,inst_36981);
var inst_36983 = cljs.core.next.call(null,inst_36981);
var inst_36984 = (inst_36982__$1 == null);
var inst_36985 = cljs.core.not.call(null,inst_36984);
var state_36999__$1 = (function (){var statearr_37003 = state_36999;
(statearr_37003[(10)] = inst_36982__$1);

(statearr_37003[(11)] = inst_36983);

return statearr_37003;
})();
if(inst_36985){
var statearr_37004_37016 = state_36999__$1;
(statearr_37004_37016[(1)] = (4));

} else {
var statearr_37005_37017 = state_36999__$1;
(statearr_37005_37017[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (3))){
var inst_36997 = (state_36999[(2)]);
var state_36999__$1 = state_36999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36999__$1,inst_36997);
} else {
if((state_val_37000 === (4))){
var inst_36982 = (state_36999[(10)]);
var inst_36987 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36982);
var state_36999__$1 = state_36999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36999__$1,(7),inst_36987);
} else {
if((state_val_37000 === (5))){
var inst_36993 = cljs.core.async.close_BANG_.call(null,out);
var state_36999__$1 = state_36999;
var statearr_37006_37018 = state_36999__$1;
(statearr_37006_37018[(2)] = inst_36993);

(statearr_37006_37018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (6))){
var inst_36995 = (state_36999[(2)]);
var state_36999__$1 = state_36999;
var statearr_37007_37019 = state_36999__$1;
(statearr_37007_37019[(2)] = inst_36995);

(statearr_37007_37019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (7))){
var inst_36983 = (state_36999[(11)]);
var inst_36989 = (state_36999[(2)]);
var inst_36990 = cljs.core.async.put_BANG_.call(null,out,inst_36989);
var inst_36976 = inst_36983;
var state_36999__$1 = (function (){var statearr_37008 = state_36999;
(statearr_37008[(7)] = inst_36976);

(statearr_37008[(12)] = inst_36990);

return statearr_37008;
})();
var statearr_37009_37020 = state_36999__$1;
(statearr_37009_37020[(2)] = null);

(statearr_37009_37020[(1)] = (2));


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
});})(c__33611__auto___37014,out))
;
return ((function (switch__33523__auto__,c__33611__auto___37014,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33524__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33524__auto____0 = (function (){
var statearr_37010 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37010[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33524__auto__);

(statearr_37010[(1)] = (1));

return statearr_37010;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33524__auto____1 = (function (state_36999){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_36999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e37011){if((e37011 instanceof Object)){
var ex__33527__auto__ = e37011;
var statearr_37012_37021 = state_36999;
(statearr_37012_37021[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37022 = state_36999;
state_36999 = G__37022;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33524__auto__ = function(state_36999){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33524__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33524__auto____1.call(this,state_36999);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33524__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33524__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___37014,out))
})();
var state__33613__auto__ = (function (){var statearr_37013 = f__33612__auto__.call(null);
(statearr_37013[(6)] = c__33611__auto___37014);

return statearr_37013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___37014,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37023,opts){
var map__37024 = p__37023;
var map__37024__$1 = ((((!((map__37024 == null)))?((((map__37024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37024):map__37024);
var eval_body = cljs.core.get.call(null,map__37024__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37024__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27924__auto__ = eval_body;
if(cljs.core.truth_(and__27924__auto__)){
return typeof eval_body === 'string';
} else {
return and__27924__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37026){var e = e37026;
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
return (function (p1__37027_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37027_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37028){
var vec__37029 = p__37028;
var k = cljs.core.nth.call(null,vec__37029,(0),null);
var v = cljs.core.nth.call(null,vec__37029,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37032){
var vec__37033 = p__37032;
var k = cljs.core.nth.call(null,vec__37033,(0),null);
var v = cljs.core.nth.call(null,vec__37033,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37039,p__37040){
var map__37041 = p__37039;
var map__37041__$1 = ((((!((map__37041 == null)))?((((map__37041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37041):map__37041);
var opts = map__37041__$1;
var before_jsload = cljs.core.get.call(null,map__37041__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37041__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37041__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37042 = p__37040;
var map__37042__$1 = ((((!((map__37042 == null)))?((((map__37042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37042):map__37042);
var msg = map__37042__$1;
var files = cljs.core.get.call(null,map__37042__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37042__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37042__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37196){
var state_val_37197 = (state_37196[(1)]);
if((state_val_37197 === (7))){
var inst_37059 = (state_37196[(7)]);
var inst_37057 = (state_37196[(8)]);
var inst_37058 = (state_37196[(9)]);
var inst_37056 = (state_37196[(10)]);
var inst_37064 = cljs.core._nth.call(null,inst_37057,inst_37059);
var inst_37065 = figwheel.client.file_reloading.eval_body.call(null,inst_37064,opts);
var inst_37066 = (inst_37059 + (1));
var tmp37198 = inst_37057;
var tmp37199 = inst_37058;
var tmp37200 = inst_37056;
var inst_37056__$1 = tmp37200;
var inst_37057__$1 = tmp37198;
var inst_37058__$1 = tmp37199;
var inst_37059__$1 = inst_37066;
var state_37196__$1 = (function (){var statearr_37201 = state_37196;
(statearr_37201[(7)] = inst_37059__$1);

(statearr_37201[(11)] = inst_37065);

(statearr_37201[(8)] = inst_37057__$1);

(statearr_37201[(9)] = inst_37058__$1);

(statearr_37201[(10)] = inst_37056__$1);

return statearr_37201;
})();
var statearr_37202_37285 = state_37196__$1;
(statearr_37202_37285[(2)] = null);

(statearr_37202_37285[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (20))){
var inst_37099 = (state_37196[(12)]);
var inst_37107 = figwheel.client.file_reloading.sort_files.call(null,inst_37099);
var state_37196__$1 = state_37196;
var statearr_37203_37286 = state_37196__$1;
(statearr_37203_37286[(2)] = inst_37107);

(statearr_37203_37286[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (27))){
var state_37196__$1 = state_37196;
var statearr_37204_37287 = state_37196__$1;
(statearr_37204_37287[(2)] = null);

(statearr_37204_37287[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (1))){
var inst_37048 = (state_37196[(13)]);
var inst_37045 = before_jsload.call(null,files);
var inst_37046 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37047 = (function (){return ((function (inst_37048,inst_37045,inst_37046,state_val_37197,c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37036_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37036_SHARP_);
});
;})(inst_37048,inst_37045,inst_37046,state_val_37197,c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37048__$1 = cljs.core.filter.call(null,inst_37047,files);
var inst_37049 = cljs.core.not_empty.call(null,inst_37048__$1);
var state_37196__$1 = (function (){var statearr_37205 = state_37196;
(statearr_37205[(14)] = inst_37046);

(statearr_37205[(15)] = inst_37045);

(statearr_37205[(13)] = inst_37048__$1);

return statearr_37205;
})();
if(cljs.core.truth_(inst_37049)){
var statearr_37206_37288 = state_37196__$1;
(statearr_37206_37288[(1)] = (2));

} else {
var statearr_37207_37289 = state_37196__$1;
(statearr_37207_37289[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (24))){
var state_37196__$1 = state_37196;
var statearr_37208_37290 = state_37196__$1;
(statearr_37208_37290[(2)] = null);

(statearr_37208_37290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (39))){
var inst_37149 = (state_37196[(16)]);
var state_37196__$1 = state_37196;
var statearr_37209_37291 = state_37196__$1;
(statearr_37209_37291[(2)] = inst_37149);

(statearr_37209_37291[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (46))){
var inst_37191 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
var statearr_37210_37292 = state_37196__$1;
(statearr_37210_37292[(2)] = inst_37191);

(statearr_37210_37292[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (4))){
var inst_37093 = (state_37196[(2)]);
var inst_37094 = cljs.core.List.EMPTY;
var inst_37095 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37094);
var inst_37096 = (function (){return ((function (inst_37093,inst_37094,inst_37095,state_val_37197,c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37037_SHARP_){
var and__27924__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37037_SHARP_);
if(cljs.core.truth_(and__27924__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37037_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37037_SHARP_)));
} else {
return and__27924__auto__;
}
});
;})(inst_37093,inst_37094,inst_37095,state_val_37197,c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37097 = cljs.core.filter.call(null,inst_37096,files);
var inst_37098 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37099 = cljs.core.concat.call(null,inst_37097,inst_37098);
var state_37196__$1 = (function (){var statearr_37211 = state_37196;
(statearr_37211[(17)] = inst_37095);

(statearr_37211[(18)] = inst_37093);

(statearr_37211[(12)] = inst_37099);

return statearr_37211;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37212_37293 = state_37196__$1;
(statearr_37212_37293[(1)] = (16));

} else {
var statearr_37213_37294 = state_37196__$1;
(statearr_37213_37294[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (15))){
var inst_37083 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
var statearr_37214_37295 = state_37196__$1;
(statearr_37214_37295[(2)] = inst_37083);

(statearr_37214_37295[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (21))){
var inst_37109 = (state_37196[(19)]);
var inst_37109__$1 = (state_37196[(2)]);
var inst_37110 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37109__$1);
var state_37196__$1 = (function (){var statearr_37215 = state_37196;
(statearr_37215[(19)] = inst_37109__$1);

return statearr_37215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37196__$1,(22),inst_37110);
} else {
if((state_val_37197 === (31))){
var inst_37194 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37196__$1,inst_37194);
} else {
if((state_val_37197 === (32))){
var inst_37149 = (state_37196[(16)]);
var inst_37154 = inst_37149.cljs$lang$protocol_mask$partition0$;
var inst_37155 = (inst_37154 & (64));
var inst_37156 = inst_37149.cljs$core$ISeq$;
var inst_37157 = (cljs.core.PROTOCOL_SENTINEL === inst_37156);
var inst_37158 = (inst_37155) || (inst_37157);
var state_37196__$1 = state_37196;
if(cljs.core.truth_(inst_37158)){
var statearr_37216_37296 = state_37196__$1;
(statearr_37216_37296[(1)] = (35));

} else {
var statearr_37217_37297 = state_37196__$1;
(statearr_37217_37297[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (40))){
var inst_37171 = (state_37196[(20)]);
var inst_37170 = (state_37196[(2)]);
var inst_37171__$1 = cljs.core.get.call(null,inst_37170,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37172 = cljs.core.get.call(null,inst_37170,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37173 = cljs.core.not_empty.call(null,inst_37171__$1);
var state_37196__$1 = (function (){var statearr_37218 = state_37196;
(statearr_37218[(21)] = inst_37172);

(statearr_37218[(20)] = inst_37171__$1);

return statearr_37218;
})();
if(cljs.core.truth_(inst_37173)){
var statearr_37219_37298 = state_37196__$1;
(statearr_37219_37298[(1)] = (41));

} else {
var statearr_37220_37299 = state_37196__$1;
(statearr_37220_37299[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (33))){
var state_37196__$1 = state_37196;
var statearr_37221_37300 = state_37196__$1;
(statearr_37221_37300[(2)] = false);

(statearr_37221_37300[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (13))){
var inst_37069 = (state_37196[(22)]);
var inst_37073 = cljs.core.chunk_first.call(null,inst_37069);
var inst_37074 = cljs.core.chunk_rest.call(null,inst_37069);
var inst_37075 = cljs.core.count.call(null,inst_37073);
var inst_37056 = inst_37074;
var inst_37057 = inst_37073;
var inst_37058 = inst_37075;
var inst_37059 = (0);
var state_37196__$1 = (function (){var statearr_37222 = state_37196;
(statearr_37222[(7)] = inst_37059);

(statearr_37222[(8)] = inst_37057);

(statearr_37222[(9)] = inst_37058);

(statearr_37222[(10)] = inst_37056);

return statearr_37222;
})();
var statearr_37223_37301 = state_37196__$1;
(statearr_37223_37301[(2)] = null);

(statearr_37223_37301[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (22))){
var inst_37113 = (state_37196[(23)]);
var inst_37112 = (state_37196[(24)]);
var inst_37117 = (state_37196[(25)]);
var inst_37109 = (state_37196[(19)]);
var inst_37112__$1 = (state_37196[(2)]);
var inst_37113__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37112__$1);
var inst_37114 = (function (){var all_files = inst_37109;
var res_SINGLEQUOTE_ = inst_37112__$1;
var res = inst_37113__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37113,inst_37112,inst_37117,inst_37109,inst_37112__$1,inst_37113__$1,state_val_37197,c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37038_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37038_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37113,inst_37112,inst_37117,inst_37109,inst_37112__$1,inst_37113__$1,state_val_37197,c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37115 = cljs.core.filter.call(null,inst_37114,inst_37112__$1);
var inst_37116 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37117__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37116);
var inst_37118 = cljs.core.not_empty.call(null,inst_37117__$1);
var state_37196__$1 = (function (){var statearr_37224 = state_37196;
(statearr_37224[(23)] = inst_37113__$1);

(statearr_37224[(24)] = inst_37112__$1);

(statearr_37224[(26)] = inst_37115);

(statearr_37224[(25)] = inst_37117__$1);

return statearr_37224;
})();
if(cljs.core.truth_(inst_37118)){
var statearr_37225_37302 = state_37196__$1;
(statearr_37225_37302[(1)] = (23));

} else {
var statearr_37226_37303 = state_37196__$1;
(statearr_37226_37303[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (36))){
var state_37196__$1 = state_37196;
var statearr_37227_37304 = state_37196__$1;
(statearr_37227_37304[(2)] = false);

(statearr_37227_37304[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (41))){
var inst_37171 = (state_37196[(20)]);
var inst_37175 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37176 = cljs.core.map.call(null,inst_37175,inst_37171);
var inst_37177 = cljs.core.pr_str.call(null,inst_37176);
var inst_37178 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37177)].join('');
var inst_37179 = figwheel.client.utils.log.call(null,inst_37178);
var state_37196__$1 = state_37196;
var statearr_37228_37305 = state_37196__$1;
(statearr_37228_37305[(2)] = inst_37179);

(statearr_37228_37305[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (43))){
var inst_37172 = (state_37196[(21)]);
var inst_37182 = (state_37196[(2)]);
var inst_37183 = cljs.core.not_empty.call(null,inst_37172);
var state_37196__$1 = (function (){var statearr_37229 = state_37196;
(statearr_37229[(27)] = inst_37182);

return statearr_37229;
})();
if(cljs.core.truth_(inst_37183)){
var statearr_37230_37306 = state_37196__$1;
(statearr_37230_37306[(1)] = (44));

} else {
var statearr_37231_37307 = state_37196__$1;
(statearr_37231_37307[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (29))){
var inst_37113 = (state_37196[(23)]);
var inst_37112 = (state_37196[(24)]);
var inst_37149 = (state_37196[(16)]);
var inst_37115 = (state_37196[(26)]);
var inst_37117 = (state_37196[(25)]);
var inst_37109 = (state_37196[(19)]);
var inst_37145 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37148 = (function (){var all_files = inst_37109;
var res_SINGLEQUOTE_ = inst_37112;
var res = inst_37113;
var files_not_loaded = inst_37115;
var dependencies_that_loaded = inst_37117;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37113,inst_37112,inst_37149,inst_37115,inst_37117,inst_37109,inst_37145,state_val_37197,c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37147){
var map__37232 = p__37147;
var map__37232__$1 = ((((!((map__37232 == null)))?((((map__37232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37232):map__37232);
var namespace = cljs.core.get.call(null,map__37232__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37113,inst_37112,inst_37149,inst_37115,inst_37117,inst_37109,inst_37145,state_val_37197,c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37149__$1 = cljs.core.group_by.call(null,inst_37148,inst_37115);
var inst_37151 = (inst_37149__$1 == null);
var inst_37152 = cljs.core.not.call(null,inst_37151);
var state_37196__$1 = (function (){var statearr_37234 = state_37196;
(statearr_37234[(16)] = inst_37149__$1);

(statearr_37234[(28)] = inst_37145);

return statearr_37234;
})();
if(inst_37152){
var statearr_37235_37308 = state_37196__$1;
(statearr_37235_37308[(1)] = (32));

} else {
var statearr_37236_37309 = state_37196__$1;
(statearr_37236_37309[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (44))){
var inst_37172 = (state_37196[(21)]);
var inst_37185 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37172);
var inst_37186 = cljs.core.pr_str.call(null,inst_37185);
var inst_37187 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37186)].join('');
var inst_37188 = figwheel.client.utils.log.call(null,inst_37187);
var state_37196__$1 = state_37196;
var statearr_37237_37310 = state_37196__$1;
(statearr_37237_37310[(2)] = inst_37188);

(statearr_37237_37310[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (6))){
var inst_37090 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
var statearr_37238_37311 = state_37196__$1;
(statearr_37238_37311[(2)] = inst_37090);

(statearr_37238_37311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (28))){
var inst_37115 = (state_37196[(26)]);
var inst_37142 = (state_37196[(2)]);
var inst_37143 = cljs.core.not_empty.call(null,inst_37115);
var state_37196__$1 = (function (){var statearr_37239 = state_37196;
(statearr_37239[(29)] = inst_37142);

return statearr_37239;
})();
if(cljs.core.truth_(inst_37143)){
var statearr_37240_37312 = state_37196__$1;
(statearr_37240_37312[(1)] = (29));

} else {
var statearr_37241_37313 = state_37196__$1;
(statearr_37241_37313[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (25))){
var inst_37113 = (state_37196[(23)]);
var inst_37129 = (state_37196[(2)]);
var inst_37130 = cljs.core.not_empty.call(null,inst_37113);
var state_37196__$1 = (function (){var statearr_37242 = state_37196;
(statearr_37242[(30)] = inst_37129);

return statearr_37242;
})();
if(cljs.core.truth_(inst_37130)){
var statearr_37243_37314 = state_37196__$1;
(statearr_37243_37314[(1)] = (26));

} else {
var statearr_37244_37315 = state_37196__$1;
(statearr_37244_37315[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (34))){
var inst_37165 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
if(cljs.core.truth_(inst_37165)){
var statearr_37245_37316 = state_37196__$1;
(statearr_37245_37316[(1)] = (38));

} else {
var statearr_37246_37317 = state_37196__$1;
(statearr_37246_37317[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (17))){
var state_37196__$1 = state_37196;
var statearr_37247_37318 = state_37196__$1;
(statearr_37247_37318[(2)] = recompile_dependents);

(statearr_37247_37318[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (3))){
var state_37196__$1 = state_37196;
var statearr_37248_37319 = state_37196__$1;
(statearr_37248_37319[(2)] = null);

(statearr_37248_37319[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (12))){
var inst_37086 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
var statearr_37249_37320 = state_37196__$1;
(statearr_37249_37320[(2)] = inst_37086);

(statearr_37249_37320[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (2))){
var inst_37048 = (state_37196[(13)]);
var inst_37055 = cljs.core.seq.call(null,inst_37048);
var inst_37056 = inst_37055;
var inst_37057 = null;
var inst_37058 = (0);
var inst_37059 = (0);
var state_37196__$1 = (function (){var statearr_37250 = state_37196;
(statearr_37250[(7)] = inst_37059);

(statearr_37250[(8)] = inst_37057);

(statearr_37250[(9)] = inst_37058);

(statearr_37250[(10)] = inst_37056);

return statearr_37250;
})();
var statearr_37251_37321 = state_37196__$1;
(statearr_37251_37321[(2)] = null);

(statearr_37251_37321[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (23))){
var inst_37113 = (state_37196[(23)]);
var inst_37112 = (state_37196[(24)]);
var inst_37115 = (state_37196[(26)]);
var inst_37117 = (state_37196[(25)]);
var inst_37109 = (state_37196[(19)]);
var inst_37120 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37122 = (function (){var all_files = inst_37109;
var res_SINGLEQUOTE_ = inst_37112;
var res = inst_37113;
var files_not_loaded = inst_37115;
var dependencies_that_loaded = inst_37117;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37113,inst_37112,inst_37115,inst_37117,inst_37109,inst_37120,state_val_37197,c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37121){
var map__37252 = p__37121;
var map__37252__$1 = ((((!((map__37252 == null)))?((((map__37252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37252):map__37252);
var request_url = cljs.core.get.call(null,map__37252__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37113,inst_37112,inst_37115,inst_37117,inst_37109,inst_37120,state_val_37197,c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37123 = cljs.core.reverse.call(null,inst_37117);
var inst_37124 = cljs.core.map.call(null,inst_37122,inst_37123);
var inst_37125 = cljs.core.pr_str.call(null,inst_37124);
var inst_37126 = figwheel.client.utils.log.call(null,inst_37125);
var state_37196__$1 = (function (){var statearr_37254 = state_37196;
(statearr_37254[(31)] = inst_37120);

return statearr_37254;
})();
var statearr_37255_37322 = state_37196__$1;
(statearr_37255_37322[(2)] = inst_37126);

(statearr_37255_37322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (35))){
var state_37196__$1 = state_37196;
var statearr_37256_37323 = state_37196__$1;
(statearr_37256_37323[(2)] = true);

(statearr_37256_37323[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (19))){
var inst_37099 = (state_37196[(12)]);
var inst_37105 = figwheel.client.file_reloading.expand_files.call(null,inst_37099);
var state_37196__$1 = state_37196;
var statearr_37257_37324 = state_37196__$1;
(statearr_37257_37324[(2)] = inst_37105);

(statearr_37257_37324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (11))){
var state_37196__$1 = state_37196;
var statearr_37258_37325 = state_37196__$1;
(statearr_37258_37325[(2)] = null);

(statearr_37258_37325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (9))){
var inst_37088 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
var statearr_37259_37326 = state_37196__$1;
(statearr_37259_37326[(2)] = inst_37088);

(statearr_37259_37326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (5))){
var inst_37059 = (state_37196[(7)]);
var inst_37058 = (state_37196[(9)]);
var inst_37061 = (inst_37059 < inst_37058);
var inst_37062 = inst_37061;
var state_37196__$1 = state_37196;
if(cljs.core.truth_(inst_37062)){
var statearr_37260_37327 = state_37196__$1;
(statearr_37260_37327[(1)] = (7));

} else {
var statearr_37261_37328 = state_37196__$1;
(statearr_37261_37328[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (14))){
var inst_37069 = (state_37196[(22)]);
var inst_37078 = cljs.core.first.call(null,inst_37069);
var inst_37079 = figwheel.client.file_reloading.eval_body.call(null,inst_37078,opts);
var inst_37080 = cljs.core.next.call(null,inst_37069);
var inst_37056 = inst_37080;
var inst_37057 = null;
var inst_37058 = (0);
var inst_37059 = (0);
var state_37196__$1 = (function (){var statearr_37262 = state_37196;
(statearr_37262[(7)] = inst_37059);

(statearr_37262[(8)] = inst_37057);

(statearr_37262[(9)] = inst_37058);

(statearr_37262[(10)] = inst_37056);

(statearr_37262[(32)] = inst_37079);

return statearr_37262;
})();
var statearr_37263_37329 = state_37196__$1;
(statearr_37263_37329[(2)] = null);

(statearr_37263_37329[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (45))){
var state_37196__$1 = state_37196;
var statearr_37264_37330 = state_37196__$1;
(statearr_37264_37330[(2)] = null);

(statearr_37264_37330[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (26))){
var inst_37113 = (state_37196[(23)]);
var inst_37112 = (state_37196[(24)]);
var inst_37115 = (state_37196[(26)]);
var inst_37117 = (state_37196[(25)]);
var inst_37109 = (state_37196[(19)]);
var inst_37132 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37134 = (function (){var all_files = inst_37109;
var res_SINGLEQUOTE_ = inst_37112;
var res = inst_37113;
var files_not_loaded = inst_37115;
var dependencies_that_loaded = inst_37117;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37113,inst_37112,inst_37115,inst_37117,inst_37109,inst_37132,state_val_37197,c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37133){
var map__37265 = p__37133;
var map__37265__$1 = ((((!((map__37265 == null)))?((((map__37265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37265):map__37265);
var namespace = cljs.core.get.call(null,map__37265__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37265__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37113,inst_37112,inst_37115,inst_37117,inst_37109,inst_37132,state_val_37197,c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37135 = cljs.core.map.call(null,inst_37134,inst_37113);
var inst_37136 = cljs.core.pr_str.call(null,inst_37135);
var inst_37137 = figwheel.client.utils.log.call(null,inst_37136);
var inst_37138 = (function (){var all_files = inst_37109;
var res_SINGLEQUOTE_ = inst_37112;
var res = inst_37113;
var files_not_loaded = inst_37115;
var dependencies_that_loaded = inst_37117;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37113,inst_37112,inst_37115,inst_37117,inst_37109,inst_37132,inst_37134,inst_37135,inst_37136,inst_37137,state_val_37197,c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37113,inst_37112,inst_37115,inst_37117,inst_37109,inst_37132,inst_37134,inst_37135,inst_37136,inst_37137,state_val_37197,c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37139 = setTimeout(inst_37138,(10));
var state_37196__$1 = (function (){var statearr_37267 = state_37196;
(statearr_37267[(33)] = inst_37132);

(statearr_37267[(34)] = inst_37137);

return statearr_37267;
})();
var statearr_37268_37331 = state_37196__$1;
(statearr_37268_37331[(2)] = inst_37139);

(statearr_37268_37331[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (16))){
var state_37196__$1 = state_37196;
var statearr_37269_37332 = state_37196__$1;
(statearr_37269_37332[(2)] = reload_dependents);

(statearr_37269_37332[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (38))){
var inst_37149 = (state_37196[(16)]);
var inst_37167 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37149);
var state_37196__$1 = state_37196;
var statearr_37270_37333 = state_37196__$1;
(statearr_37270_37333[(2)] = inst_37167);

(statearr_37270_37333[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (30))){
var state_37196__$1 = state_37196;
var statearr_37271_37334 = state_37196__$1;
(statearr_37271_37334[(2)] = null);

(statearr_37271_37334[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (10))){
var inst_37069 = (state_37196[(22)]);
var inst_37071 = cljs.core.chunked_seq_QMARK_.call(null,inst_37069);
var state_37196__$1 = state_37196;
if(inst_37071){
var statearr_37272_37335 = state_37196__$1;
(statearr_37272_37335[(1)] = (13));

} else {
var statearr_37273_37336 = state_37196__$1;
(statearr_37273_37336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (18))){
var inst_37103 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
if(cljs.core.truth_(inst_37103)){
var statearr_37274_37337 = state_37196__$1;
(statearr_37274_37337[(1)] = (19));

} else {
var statearr_37275_37338 = state_37196__$1;
(statearr_37275_37338[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (42))){
var state_37196__$1 = state_37196;
var statearr_37276_37339 = state_37196__$1;
(statearr_37276_37339[(2)] = null);

(statearr_37276_37339[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (37))){
var inst_37162 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
var statearr_37277_37340 = state_37196__$1;
(statearr_37277_37340[(2)] = inst_37162);

(statearr_37277_37340[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (8))){
var inst_37069 = (state_37196[(22)]);
var inst_37056 = (state_37196[(10)]);
var inst_37069__$1 = cljs.core.seq.call(null,inst_37056);
var state_37196__$1 = (function (){var statearr_37278 = state_37196;
(statearr_37278[(22)] = inst_37069__$1);

return statearr_37278;
})();
if(inst_37069__$1){
var statearr_37279_37341 = state_37196__$1;
(statearr_37279_37341[(1)] = (10));

} else {
var statearr_37280_37342 = state_37196__$1;
(statearr_37280_37342[(1)] = (11));

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
});})(c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33523__auto__,c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33524__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33524__auto____0 = (function (){
var statearr_37281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37281[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33524__auto__);

(statearr_37281[(1)] = (1));

return statearr_37281;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33524__auto____1 = (function (state_37196){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_37196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e37282){if((e37282 instanceof Object)){
var ex__33527__auto__ = e37282;
var statearr_37283_37343 = state_37196;
(statearr_37283_37343[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37344 = state_37196;
state_37196 = G__37344;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33524__auto__ = function(state_37196){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33524__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33524__auto____1.call(this,state_37196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33524__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33524__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33613__auto__ = (function (){var statearr_37284 = f__33612__auto__.call(null);
(statearr_37284[(6)] = c__33611__auto__);

return statearr_37284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto__,map__37041,map__37041__$1,opts,before_jsload,on_jsload,reload_dependents,map__37042,map__37042__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33611__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37347,link){
var map__37348 = p__37347;
var map__37348__$1 = ((((!((map__37348 == null)))?((((map__37348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37348):map__37348);
var file = cljs.core.get.call(null,map__37348__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37348,map__37348__$1,file){
return (function (p1__37345_SHARP_,p2__37346_SHARP_){
if(cljs.core._EQ_.call(null,p1__37345_SHARP_,p2__37346_SHARP_)){
return p1__37345_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37348,map__37348__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37351){
var map__37352 = p__37351;
var map__37352__$1 = ((((!((map__37352 == null)))?((((map__37352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37352):map__37352);
var match_length = cljs.core.get.call(null,map__37352__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37352__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37350_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37350_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37354_SHARP_,p2__37355_SHARP_){
return cljs.core.assoc.call(null,p1__37354_SHARP_,cljs.core.get.call(null,p2__37355_SHARP_,key),p2__37355_SHARP_);
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
var loaded_f_datas_37356 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37356);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37356);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37357,p__37358){
var map__37359 = p__37357;
var map__37359__$1 = ((((!((map__37359 == null)))?((((map__37359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37359):map__37359);
var on_cssload = cljs.core.get.call(null,map__37359__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37360 = p__37358;
var map__37360__$1 = ((((!((map__37360 == null)))?((((map__37360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37360):map__37360);
var files_msg = map__37360__$1;
var files = cljs.core.get.call(null,map__37360__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1510190758109
