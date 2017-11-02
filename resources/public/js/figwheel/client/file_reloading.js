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
var or__27989__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27989__auto__){
return or__27989__auto__;
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
var or__27989__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
var or__27989__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27989__auto____$1)){
return or__27989__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33751_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33751_SHARP_));
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
var seq__33752 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33753 = null;
var count__33754 = (0);
var i__33755 = (0);
while(true){
if((i__33755 < count__33754)){
var n = cljs.core._nth.call(null,chunk__33753,i__33755);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33756 = seq__33752;
var G__33757 = chunk__33753;
var G__33758 = count__33754;
var G__33759 = (i__33755 + (1));
seq__33752 = G__33756;
chunk__33753 = G__33757;
count__33754 = G__33758;
i__33755 = G__33759;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33752);
if(temp__4657__auto__){
var seq__33752__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33752__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__33752__$1);
var G__33760 = cljs.core.chunk_rest.call(null,seq__33752__$1);
var G__33761 = c__28828__auto__;
var G__33762 = cljs.core.count.call(null,c__28828__auto__);
var G__33763 = (0);
seq__33752 = G__33760;
chunk__33753 = G__33761;
count__33754 = G__33762;
i__33755 = G__33763;
continue;
} else {
var n = cljs.core.first.call(null,seq__33752__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33764 = cljs.core.next.call(null,seq__33752__$1);
var G__33765 = null;
var G__33766 = (0);
var G__33767 = (0);
seq__33752 = G__33764;
chunk__33753 = G__33765;
count__33754 = G__33766;
i__33755 = G__33767;
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

var seq__33777_33785 = cljs.core.seq.call(null,deps);
var chunk__33778_33786 = null;
var count__33779_33787 = (0);
var i__33780_33788 = (0);
while(true){
if((i__33780_33788 < count__33779_33787)){
var dep_33789 = cljs.core._nth.call(null,chunk__33778_33786,i__33780_33788);
topo_sort_helper_STAR_.call(null,dep_33789,(depth + (1)),state);

var G__33790 = seq__33777_33785;
var G__33791 = chunk__33778_33786;
var G__33792 = count__33779_33787;
var G__33793 = (i__33780_33788 + (1));
seq__33777_33785 = G__33790;
chunk__33778_33786 = G__33791;
count__33779_33787 = G__33792;
i__33780_33788 = G__33793;
continue;
} else {
var temp__4657__auto___33794 = cljs.core.seq.call(null,seq__33777_33785);
if(temp__4657__auto___33794){
var seq__33777_33795__$1 = temp__4657__auto___33794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33777_33795__$1)){
var c__28828__auto___33796 = cljs.core.chunk_first.call(null,seq__33777_33795__$1);
var G__33797 = cljs.core.chunk_rest.call(null,seq__33777_33795__$1);
var G__33798 = c__28828__auto___33796;
var G__33799 = cljs.core.count.call(null,c__28828__auto___33796);
var G__33800 = (0);
seq__33777_33785 = G__33797;
chunk__33778_33786 = G__33798;
count__33779_33787 = G__33799;
i__33780_33788 = G__33800;
continue;
} else {
var dep_33801 = cljs.core.first.call(null,seq__33777_33795__$1);
topo_sort_helper_STAR_.call(null,dep_33801,(depth + (1)),state);

var G__33802 = cljs.core.next.call(null,seq__33777_33795__$1);
var G__33803 = null;
var G__33804 = (0);
var G__33805 = (0);
seq__33777_33785 = G__33802;
chunk__33778_33786 = G__33803;
count__33779_33787 = G__33804;
i__33780_33788 = G__33805;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33781){
var vec__33782 = p__33781;
var seq__33783 = cljs.core.seq.call(null,vec__33782);
var first__33784 = cljs.core.first.call(null,seq__33783);
var seq__33783__$1 = cljs.core.next.call(null,seq__33783);
var x = first__33784;
var xs = seq__33783__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33782,seq__33783,first__33784,seq__33783__$1,x,xs,get_deps__$1){
return (function (p1__33768_SHARP_){
return clojure.set.difference.call(null,p1__33768_SHARP_,x);
});})(vec__33782,seq__33783,first__33784,seq__33783__$1,x,xs,get_deps__$1))
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
var seq__33806 = cljs.core.seq.call(null,provides);
var chunk__33807 = null;
var count__33808 = (0);
var i__33809 = (0);
while(true){
if((i__33809 < count__33808)){
var prov = cljs.core._nth.call(null,chunk__33807,i__33809);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33810_33818 = cljs.core.seq.call(null,requires);
var chunk__33811_33819 = null;
var count__33812_33820 = (0);
var i__33813_33821 = (0);
while(true){
if((i__33813_33821 < count__33812_33820)){
var req_33822 = cljs.core._nth.call(null,chunk__33811_33819,i__33813_33821);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33822,prov);

var G__33823 = seq__33810_33818;
var G__33824 = chunk__33811_33819;
var G__33825 = count__33812_33820;
var G__33826 = (i__33813_33821 + (1));
seq__33810_33818 = G__33823;
chunk__33811_33819 = G__33824;
count__33812_33820 = G__33825;
i__33813_33821 = G__33826;
continue;
} else {
var temp__4657__auto___33827 = cljs.core.seq.call(null,seq__33810_33818);
if(temp__4657__auto___33827){
var seq__33810_33828__$1 = temp__4657__auto___33827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33810_33828__$1)){
var c__28828__auto___33829 = cljs.core.chunk_first.call(null,seq__33810_33828__$1);
var G__33830 = cljs.core.chunk_rest.call(null,seq__33810_33828__$1);
var G__33831 = c__28828__auto___33829;
var G__33832 = cljs.core.count.call(null,c__28828__auto___33829);
var G__33833 = (0);
seq__33810_33818 = G__33830;
chunk__33811_33819 = G__33831;
count__33812_33820 = G__33832;
i__33813_33821 = G__33833;
continue;
} else {
var req_33834 = cljs.core.first.call(null,seq__33810_33828__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33834,prov);

var G__33835 = cljs.core.next.call(null,seq__33810_33828__$1);
var G__33836 = null;
var G__33837 = (0);
var G__33838 = (0);
seq__33810_33818 = G__33835;
chunk__33811_33819 = G__33836;
count__33812_33820 = G__33837;
i__33813_33821 = G__33838;
continue;
}
} else {
}
}
break;
}

var G__33839 = seq__33806;
var G__33840 = chunk__33807;
var G__33841 = count__33808;
var G__33842 = (i__33809 + (1));
seq__33806 = G__33839;
chunk__33807 = G__33840;
count__33808 = G__33841;
i__33809 = G__33842;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33806);
if(temp__4657__auto__){
var seq__33806__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33806__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__33806__$1);
var G__33843 = cljs.core.chunk_rest.call(null,seq__33806__$1);
var G__33844 = c__28828__auto__;
var G__33845 = cljs.core.count.call(null,c__28828__auto__);
var G__33846 = (0);
seq__33806 = G__33843;
chunk__33807 = G__33844;
count__33808 = G__33845;
i__33809 = G__33846;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33806__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33814_33847 = cljs.core.seq.call(null,requires);
var chunk__33815_33848 = null;
var count__33816_33849 = (0);
var i__33817_33850 = (0);
while(true){
if((i__33817_33850 < count__33816_33849)){
var req_33851 = cljs.core._nth.call(null,chunk__33815_33848,i__33817_33850);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33851,prov);

var G__33852 = seq__33814_33847;
var G__33853 = chunk__33815_33848;
var G__33854 = count__33816_33849;
var G__33855 = (i__33817_33850 + (1));
seq__33814_33847 = G__33852;
chunk__33815_33848 = G__33853;
count__33816_33849 = G__33854;
i__33817_33850 = G__33855;
continue;
} else {
var temp__4657__auto___33856__$1 = cljs.core.seq.call(null,seq__33814_33847);
if(temp__4657__auto___33856__$1){
var seq__33814_33857__$1 = temp__4657__auto___33856__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33814_33857__$1)){
var c__28828__auto___33858 = cljs.core.chunk_first.call(null,seq__33814_33857__$1);
var G__33859 = cljs.core.chunk_rest.call(null,seq__33814_33857__$1);
var G__33860 = c__28828__auto___33858;
var G__33861 = cljs.core.count.call(null,c__28828__auto___33858);
var G__33862 = (0);
seq__33814_33847 = G__33859;
chunk__33815_33848 = G__33860;
count__33816_33849 = G__33861;
i__33817_33850 = G__33862;
continue;
} else {
var req_33863 = cljs.core.first.call(null,seq__33814_33857__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33863,prov);

var G__33864 = cljs.core.next.call(null,seq__33814_33857__$1);
var G__33865 = null;
var G__33866 = (0);
var G__33867 = (0);
seq__33814_33847 = G__33864;
chunk__33815_33848 = G__33865;
count__33816_33849 = G__33866;
i__33817_33850 = G__33867;
continue;
}
} else {
}
}
break;
}

var G__33868 = cljs.core.next.call(null,seq__33806__$1);
var G__33869 = null;
var G__33870 = (0);
var G__33871 = (0);
seq__33806 = G__33868;
chunk__33807 = G__33869;
count__33808 = G__33870;
i__33809 = G__33871;
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
var seq__33872_33876 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33873_33877 = null;
var count__33874_33878 = (0);
var i__33875_33879 = (0);
while(true){
if((i__33875_33879 < count__33874_33878)){
var ns_33880 = cljs.core._nth.call(null,chunk__33873_33877,i__33875_33879);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33880);

var G__33881 = seq__33872_33876;
var G__33882 = chunk__33873_33877;
var G__33883 = count__33874_33878;
var G__33884 = (i__33875_33879 + (1));
seq__33872_33876 = G__33881;
chunk__33873_33877 = G__33882;
count__33874_33878 = G__33883;
i__33875_33879 = G__33884;
continue;
} else {
var temp__4657__auto___33885 = cljs.core.seq.call(null,seq__33872_33876);
if(temp__4657__auto___33885){
var seq__33872_33886__$1 = temp__4657__auto___33885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33872_33886__$1)){
var c__28828__auto___33887 = cljs.core.chunk_first.call(null,seq__33872_33886__$1);
var G__33888 = cljs.core.chunk_rest.call(null,seq__33872_33886__$1);
var G__33889 = c__28828__auto___33887;
var G__33890 = cljs.core.count.call(null,c__28828__auto___33887);
var G__33891 = (0);
seq__33872_33876 = G__33888;
chunk__33873_33877 = G__33889;
count__33874_33878 = G__33890;
i__33875_33879 = G__33891;
continue;
} else {
var ns_33892 = cljs.core.first.call(null,seq__33872_33886__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33892);

var G__33893 = cljs.core.next.call(null,seq__33872_33886__$1);
var G__33894 = null;
var G__33895 = (0);
var G__33896 = (0);
seq__33872_33876 = G__33893;
chunk__33873_33877 = G__33894;
count__33874_33878 = G__33895;
i__33875_33879 = G__33896;
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
goog.require_figwheel_backup_ = (function (){var or__27989__auto__ = goog.require__;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
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
var G__33897__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33898__i = 0, G__33898__a = new Array(arguments.length -  0);
while (G__33898__i < G__33898__a.length) {G__33898__a[G__33898__i] = arguments[G__33898__i + 0]; ++G__33898__i;}
  args = new cljs.core.IndexedSeq(G__33898__a,0,null);
} 
return G__33897__delegate.call(this,args);};
G__33897.cljs$lang$maxFixedArity = 0;
G__33897.cljs$lang$applyTo = (function (arglist__33899){
var args = cljs.core.seq(arglist__33899);
return G__33897__delegate(args);
});
G__33897.cljs$core$IFn$_invoke$arity$variadic = G__33897__delegate;
return G__33897;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__33900_SHARP_,p2__33901_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33900_SHARP_)].join('')),p2__33901_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__33902_SHARP_,p2__33903_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33902_SHARP_)].join(''),p2__33903_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__33904 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__33904.addCallback(((function (G__33904){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__33904))
);

G__33904.addErrback(((function (G__33904){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__33904))
);

return G__33904;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33905 = cljs.core._EQ_;
var expr__33906 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33905.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33906))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33905,expr__33906){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33905,expr__33906))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33905,expr__33906){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33908){if((e33908 instanceof Error)){
var e = e33908;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33908;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33905,expr__33906))
} else {
if(cljs.core.truth_(pred__33905.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33906))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33905.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__33906))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33905.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33906))){
return ((function (pred__33905,expr__33906){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33909){if((e33909 instanceof Error)){
var e = e33909;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33909;

}
}})());
});
;})(pred__33905,expr__33906))
} else {
return ((function (pred__33905,expr__33906){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33905,expr__33906))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33910,callback){
var map__33911 = p__33910;
var map__33911__$1 = ((((!((map__33911 == null)))?((((map__33911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33911):map__33911);
var file_msg = map__33911__$1;
var request_url = cljs.core.get.call(null,map__33911__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33911,map__33911__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33911,map__33911__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto__){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto__){
return (function (state_33935){
var state_val_33936 = (state_33935[(1)]);
if((state_val_33936 === (7))){
var inst_33931 = (state_33935[(2)]);
var state_33935__$1 = state_33935;
var statearr_33937_33954 = state_33935__$1;
(statearr_33937_33954[(2)] = inst_33931);

(statearr_33937_33954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (1))){
var state_33935__$1 = state_33935;
var statearr_33938_33955 = state_33935__$1;
(statearr_33938_33955[(2)] = null);

(statearr_33938_33955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (4))){
var inst_33915 = (state_33935[(7)]);
var inst_33915__$1 = (state_33935[(2)]);
var state_33935__$1 = (function (){var statearr_33939 = state_33935;
(statearr_33939[(7)] = inst_33915__$1);

return statearr_33939;
})();
if(cljs.core.truth_(inst_33915__$1)){
var statearr_33940_33956 = state_33935__$1;
(statearr_33940_33956[(1)] = (5));

} else {
var statearr_33941_33957 = state_33935__$1;
(statearr_33941_33957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (6))){
var state_33935__$1 = state_33935;
var statearr_33942_33958 = state_33935__$1;
(statearr_33942_33958[(2)] = null);

(statearr_33942_33958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (3))){
var inst_33933 = (state_33935[(2)]);
var state_33935__$1 = state_33935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33935__$1,inst_33933);
} else {
if((state_val_33936 === (2))){
var state_33935__$1 = state_33935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33935__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33936 === (11))){
var inst_33927 = (state_33935[(2)]);
var state_33935__$1 = (function (){var statearr_33943 = state_33935;
(statearr_33943[(8)] = inst_33927);

return statearr_33943;
})();
var statearr_33944_33959 = state_33935__$1;
(statearr_33944_33959[(2)] = null);

(statearr_33944_33959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (9))){
var inst_33921 = (state_33935[(9)]);
var inst_33919 = (state_33935[(10)]);
var inst_33923 = inst_33921.call(null,inst_33919);
var state_33935__$1 = state_33935;
var statearr_33945_33960 = state_33935__$1;
(statearr_33945_33960[(2)] = inst_33923);

(statearr_33945_33960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (5))){
var inst_33915 = (state_33935[(7)]);
var inst_33917 = figwheel.client.file_reloading.blocking_load.call(null,inst_33915);
var state_33935__$1 = state_33935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33935__$1,(8),inst_33917);
} else {
if((state_val_33936 === (10))){
var inst_33919 = (state_33935[(10)]);
var inst_33925 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33919);
var state_33935__$1 = state_33935;
var statearr_33946_33961 = state_33935__$1;
(statearr_33946_33961[(2)] = inst_33925);

(statearr_33946_33961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (8))){
var inst_33921 = (state_33935[(9)]);
var inst_33915 = (state_33935[(7)]);
var inst_33919 = (state_33935[(2)]);
var inst_33920 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33921__$1 = cljs.core.get.call(null,inst_33920,inst_33915);
var state_33935__$1 = (function (){var statearr_33947 = state_33935;
(statearr_33947[(9)] = inst_33921__$1);

(statearr_33947[(10)] = inst_33919);

return statearr_33947;
})();
if(cljs.core.truth_(inst_33921__$1)){
var statearr_33948_33962 = state_33935__$1;
(statearr_33948_33962[(1)] = (9));

} else {
var statearr_33949_33963 = state_33935__$1;
(statearr_33949_33963[(1)] = (10));

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
});})(c__30588__auto__))
;
return ((function (switch__30500__auto__,c__30588__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30501__auto__ = null;
var figwheel$client$file_reloading$state_machine__30501__auto____0 = (function (){
var statearr_33950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33950[(0)] = figwheel$client$file_reloading$state_machine__30501__auto__);

(statearr_33950[(1)] = (1));

return statearr_33950;
});
var figwheel$client$file_reloading$state_machine__30501__auto____1 = (function (state_33935){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_33935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e33951){if((e33951 instanceof Object)){
var ex__30504__auto__ = e33951;
var statearr_33952_33964 = state_33935;
(statearr_33952_33964[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33965 = state_33935;
state_33935 = G__33965;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30501__auto__ = function(state_33935){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30501__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30501__auto____1.call(this,state_33935);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30501__auto____0;
figwheel$client$file_reloading$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30501__auto____1;
return figwheel$client$file_reloading$state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto__))
})();
var state__30590__auto__ = (function (){var statearr_33953 = f__30589__auto__.call(null);
(statearr_33953[(6)] = c__30588__auto__);

return statearr_33953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto__))
);

return c__30588__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33966,callback){
var map__33967 = p__33966;
var map__33967__$1 = ((((!((map__33967 == null)))?((((map__33967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33967):map__33967);
var file_msg = map__33967__$1;
var namespace = cljs.core.get.call(null,map__33967__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33967,map__33967__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33967,map__33967__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33969){
var map__33970 = p__33969;
var map__33970__$1 = ((((!((map__33970 == null)))?((((map__33970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33970):map__33970);
var file_msg = map__33970__$1;
var namespace = cljs.core.get.call(null,map__33970__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33972){
var map__33973 = p__33972;
var map__33973__$1 = ((((!((map__33973 == null)))?((((map__33973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33973):map__33973);
var file_msg = map__33973__$1;
var namespace = cljs.core.get.call(null,map__33973__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27977__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27977__auto__){
var or__27989__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
var or__27989__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27989__auto____$1)){
return or__27989__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27977__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33975,callback){
var map__33976 = p__33975;
var map__33976__$1 = ((((!((map__33976 == null)))?((((map__33976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33976):map__33976);
var file_msg = map__33976__$1;
var request_url = cljs.core.get.call(null,map__33976__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33976__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30588__auto___34026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___34026,out){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___34026,out){
return (function (state_34011){
var state_val_34012 = (state_34011[(1)]);
if((state_val_34012 === (1))){
var inst_33985 = cljs.core.seq.call(null,files);
var inst_33986 = cljs.core.first.call(null,inst_33985);
var inst_33987 = cljs.core.next.call(null,inst_33985);
var inst_33988 = files;
var state_34011__$1 = (function (){var statearr_34013 = state_34011;
(statearr_34013[(7)] = inst_33988);

(statearr_34013[(8)] = inst_33987);

(statearr_34013[(9)] = inst_33986);

return statearr_34013;
})();
var statearr_34014_34027 = state_34011__$1;
(statearr_34014_34027[(2)] = null);

(statearr_34014_34027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (2))){
var inst_33988 = (state_34011[(7)]);
var inst_33994 = (state_34011[(10)]);
var inst_33993 = cljs.core.seq.call(null,inst_33988);
var inst_33994__$1 = cljs.core.first.call(null,inst_33993);
var inst_33995 = cljs.core.next.call(null,inst_33993);
var inst_33996 = (inst_33994__$1 == null);
var inst_33997 = cljs.core.not.call(null,inst_33996);
var state_34011__$1 = (function (){var statearr_34015 = state_34011;
(statearr_34015[(11)] = inst_33995);

(statearr_34015[(10)] = inst_33994__$1);

return statearr_34015;
})();
if(inst_33997){
var statearr_34016_34028 = state_34011__$1;
(statearr_34016_34028[(1)] = (4));

} else {
var statearr_34017_34029 = state_34011__$1;
(statearr_34017_34029[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (3))){
var inst_34009 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34011__$1,inst_34009);
} else {
if((state_val_34012 === (4))){
var inst_33994 = (state_34011[(10)]);
var inst_33999 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33994);
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34011__$1,(7),inst_33999);
} else {
if((state_val_34012 === (5))){
var inst_34005 = cljs.core.async.close_BANG_.call(null,out);
var state_34011__$1 = state_34011;
var statearr_34018_34030 = state_34011__$1;
(statearr_34018_34030[(2)] = inst_34005);

(statearr_34018_34030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (6))){
var inst_34007 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
var statearr_34019_34031 = state_34011__$1;
(statearr_34019_34031[(2)] = inst_34007);

(statearr_34019_34031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (7))){
var inst_33995 = (state_34011[(11)]);
var inst_34001 = (state_34011[(2)]);
var inst_34002 = cljs.core.async.put_BANG_.call(null,out,inst_34001);
var inst_33988 = inst_33995;
var state_34011__$1 = (function (){var statearr_34020 = state_34011;
(statearr_34020[(7)] = inst_33988);

(statearr_34020[(12)] = inst_34002);

return statearr_34020;
})();
var statearr_34021_34032 = state_34011__$1;
(statearr_34021_34032[(2)] = null);

(statearr_34021_34032[(1)] = (2));


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
});})(c__30588__auto___34026,out))
;
return ((function (switch__30500__auto__,c__30588__auto___34026,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto____0 = (function (){
var statearr_34022 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34022[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto__);

(statearr_34022[(1)] = (1));

return statearr_34022;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto____1 = (function (state_34011){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_34011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e34023){if((e34023 instanceof Object)){
var ex__30504__auto__ = e34023;
var statearr_34024_34033 = state_34011;
(statearr_34024_34033[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34034 = state_34011;
state_34011 = G__34034;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto__ = function(state_34011){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto____1.call(this,state_34011);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___34026,out))
})();
var state__30590__auto__ = (function (){var statearr_34025 = f__30589__auto__.call(null);
(statearr_34025[(6)] = c__30588__auto___34026);

return statearr_34025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___34026,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34035,opts){
var map__34036 = p__34035;
var map__34036__$1 = ((((!((map__34036 == null)))?((((map__34036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34036):map__34036);
var eval_body = cljs.core.get.call(null,map__34036__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34036__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27977__auto__ = eval_body;
if(cljs.core.truth_(and__27977__auto__)){
return typeof eval_body === 'string';
} else {
return and__27977__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34038){var e = e34038;
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
return (function (p1__34039_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34039_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34040){
var vec__34041 = p__34040;
var k = cljs.core.nth.call(null,vec__34041,(0),null);
var v = cljs.core.nth.call(null,vec__34041,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34044){
var vec__34045 = p__34044;
var k = cljs.core.nth.call(null,vec__34045,(0),null);
var v = cljs.core.nth.call(null,vec__34045,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34051,p__34052){
var map__34053 = p__34051;
var map__34053__$1 = ((((!((map__34053 == null)))?((((map__34053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34053):map__34053);
var opts = map__34053__$1;
var before_jsload = cljs.core.get.call(null,map__34053__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34053__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34053__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34054 = p__34052;
var map__34054__$1 = ((((!((map__34054 == null)))?((((map__34054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34054):map__34054);
var msg = map__34054__$1;
var files = cljs.core.get.call(null,map__34054__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34054__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34054__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34208){
var state_val_34209 = (state_34208[(1)]);
if((state_val_34209 === (7))){
var inst_34068 = (state_34208[(7)]);
var inst_34071 = (state_34208[(8)]);
var inst_34069 = (state_34208[(9)]);
var inst_34070 = (state_34208[(10)]);
var inst_34076 = cljs.core._nth.call(null,inst_34069,inst_34071);
var inst_34077 = figwheel.client.file_reloading.eval_body.call(null,inst_34076,opts);
var inst_34078 = (inst_34071 + (1));
var tmp34210 = inst_34068;
var tmp34211 = inst_34069;
var tmp34212 = inst_34070;
var inst_34068__$1 = tmp34210;
var inst_34069__$1 = tmp34211;
var inst_34070__$1 = tmp34212;
var inst_34071__$1 = inst_34078;
var state_34208__$1 = (function (){var statearr_34213 = state_34208;
(statearr_34213[(7)] = inst_34068__$1);

(statearr_34213[(8)] = inst_34071__$1);

(statearr_34213[(11)] = inst_34077);

(statearr_34213[(9)] = inst_34069__$1);

(statearr_34213[(10)] = inst_34070__$1);

return statearr_34213;
})();
var statearr_34214_34297 = state_34208__$1;
(statearr_34214_34297[(2)] = null);

(statearr_34214_34297[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (20))){
var inst_34111 = (state_34208[(12)]);
var inst_34119 = figwheel.client.file_reloading.sort_files.call(null,inst_34111);
var state_34208__$1 = state_34208;
var statearr_34215_34298 = state_34208__$1;
(statearr_34215_34298[(2)] = inst_34119);

(statearr_34215_34298[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (27))){
var state_34208__$1 = state_34208;
var statearr_34216_34299 = state_34208__$1;
(statearr_34216_34299[(2)] = null);

(statearr_34216_34299[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (1))){
var inst_34060 = (state_34208[(13)]);
var inst_34057 = before_jsload.call(null,files);
var inst_34058 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34059 = (function (){return ((function (inst_34060,inst_34057,inst_34058,state_val_34209,c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34048_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34048_SHARP_);
});
;})(inst_34060,inst_34057,inst_34058,state_val_34209,c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34060__$1 = cljs.core.filter.call(null,inst_34059,files);
var inst_34061 = cljs.core.not_empty.call(null,inst_34060__$1);
var state_34208__$1 = (function (){var statearr_34217 = state_34208;
(statearr_34217[(13)] = inst_34060__$1);

(statearr_34217[(14)] = inst_34057);

(statearr_34217[(15)] = inst_34058);

return statearr_34217;
})();
if(cljs.core.truth_(inst_34061)){
var statearr_34218_34300 = state_34208__$1;
(statearr_34218_34300[(1)] = (2));

} else {
var statearr_34219_34301 = state_34208__$1;
(statearr_34219_34301[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (24))){
var state_34208__$1 = state_34208;
var statearr_34220_34302 = state_34208__$1;
(statearr_34220_34302[(2)] = null);

(statearr_34220_34302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (39))){
var inst_34161 = (state_34208[(16)]);
var state_34208__$1 = state_34208;
var statearr_34221_34303 = state_34208__$1;
(statearr_34221_34303[(2)] = inst_34161);

(statearr_34221_34303[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (46))){
var inst_34203 = (state_34208[(2)]);
var state_34208__$1 = state_34208;
var statearr_34222_34304 = state_34208__$1;
(statearr_34222_34304[(2)] = inst_34203);

(statearr_34222_34304[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (4))){
var inst_34105 = (state_34208[(2)]);
var inst_34106 = cljs.core.List.EMPTY;
var inst_34107 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34106);
var inst_34108 = (function (){return ((function (inst_34105,inst_34106,inst_34107,state_val_34209,c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34049_SHARP_){
var and__27977__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34049_SHARP_);
if(cljs.core.truth_(and__27977__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34049_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34049_SHARP_)));
} else {
return and__27977__auto__;
}
});
;})(inst_34105,inst_34106,inst_34107,state_val_34209,c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34109 = cljs.core.filter.call(null,inst_34108,files);
var inst_34110 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34111 = cljs.core.concat.call(null,inst_34109,inst_34110);
var state_34208__$1 = (function (){var statearr_34223 = state_34208;
(statearr_34223[(12)] = inst_34111);

(statearr_34223[(17)] = inst_34107);

(statearr_34223[(18)] = inst_34105);

return statearr_34223;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34224_34305 = state_34208__$1;
(statearr_34224_34305[(1)] = (16));

} else {
var statearr_34225_34306 = state_34208__$1;
(statearr_34225_34306[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (15))){
var inst_34095 = (state_34208[(2)]);
var state_34208__$1 = state_34208;
var statearr_34226_34307 = state_34208__$1;
(statearr_34226_34307[(2)] = inst_34095);

(statearr_34226_34307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (21))){
var inst_34121 = (state_34208[(19)]);
var inst_34121__$1 = (state_34208[(2)]);
var inst_34122 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34121__$1);
var state_34208__$1 = (function (){var statearr_34227 = state_34208;
(statearr_34227[(19)] = inst_34121__$1);

return statearr_34227;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34208__$1,(22),inst_34122);
} else {
if((state_val_34209 === (31))){
var inst_34206 = (state_34208[(2)]);
var state_34208__$1 = state_34208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34208__$1,inst_34206);
} else {
if((state_val_34209 === (32))){
var inst_34161 = (state_34208[(16)]);
var inst_34166 = inst_34161.cljs$lang$protocol_mask$partition0$;
var inst_34167 = (inst_34166 & (64));
var inst_34168 = inst_34161.cljs$core$ISeq$;
var inst_34169 = (cljs.core.PROTOCOL_SENTINEL === inst_34168);
var inst_34170 = (inst_34167) || (inst_34169);
var state_34208__$1 = state_34208;
if(cljs.core.truth_(inst_34170)){
var statearr_34228_34308 = state_34208__$1;
(statearr_34228_34308[(1)] = (35));

} else {
var statearr_34229_34309 = state_34208__$1;
(statearr_34229_34309[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (40))){
var inst_34183 = (state_34208[(20)]);
var inst_34182 = (state_34208[(2)]);
var inst_34183__$1 = cljs.core.get.call(null,inst_34182,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34184 = cljs.core.get.call(null,inst_34182,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34185 = cljs.core.not_empty.call(null,inst_34183__$1);
var state_34208__$1 = (function (){var statearr_34230 = state_34208;
(statearr_34230[(20)] = inst_34183__$1);

(statearr_34230[(21)] = inst_34184);

return statearr_34230;
})();
if(cljs.core.truth_(inst_34185)){
var statearr_34231_34310 = state_34208__$1;
(statearr_34231_34310[(1)] = (41));

} else {
var statearr_34232_34311 = state_34208__$1;
(statearr_34232_34311[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (33))){
var state_34208__$1 = state_34208;
var statearr_34233_34312 = state_34208__$1;
(statearr_34233_34312[(2)] = false);

(statearr_34233_34312[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (13))){
var inst_34081 = (state_34208[(22)]);
var inst_34085 = cljs.core.chunk_first.call(null,inst_34081);
var inst_34086 = cljs.core.chunk_rest.call(null,inst_34081);
var inst_34087 = cljs.core.count.call(null,inst_34085);
var inst_34068 = inst_34086;
var inst_34069 = inst_34085;
var inst_34070 = inst_34087;
var inst_34071 = (0);
var state_34208__$1 = (function (){var statearr_34234 = state_34208;
(statearr_34234[(7)] = inst_34068);

(statearr_34234[(8)] = inst_34071);

(statearr_34234[(9)] = inst_34069);

(statearr_34234[(10)] = inst_34070);

return statearr_34234;
})();
var statearr_34235_34313 = state_34208__$1;
(statearr_34235_34313[(2)] = null);

(statearr_34235_34313[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (22))){
var inst_34121 = (state_34208[(19)]);
var inst_34124 = (state_34208[(23)]);
var inst_34125 = (state_34208[(24)]);
var inst_34129 = (state_34208[(25)]);
var inst_34124__$1 = (state_34208[(2)]);
var inst_34125__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34124__$1);
var inst_34126 = (function (){var all_files = inst_34121;
var res_SINGLEQUOTE_ = inst_34124__$1;
var res = inst_34125__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34121,inst_34124,inst_34125,inst_34129,inst_34124__$1,inst_34125__$1,state_val_34209,c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34050_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34050_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34121,inst_34124,inst_34125,inst_34129,inst_34124__$1,inst_34125__$1,state_val_34209,c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34127 = cljs.core.filter.call(null,inst_34126,inst_34124__$1);
var inst_34128 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34129__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34128);
var inst_34130 = cljs.core.not_empty.call(null,inst_34129__$1);
var state_34208__$1 = (function (){var statearr_34236 = state_34208;
(statearr_34236[(26)] = inst_34127);

(statearr_34236[(23)] = inst_34124__$1);

(statearr_34236[(24)] = inst_34125__$1);

(statearr_34236[(25)] = inst_34129__$1);

return statearr_34236;
})();
if(cljs.core.truth_(inst_34130)){
var statearr_34237_34314 = state_34208__$1;
(statearr_34237_34314[(1)] = (23));

} else {
var statearr_34238_34315 = state_34208__$1;
(statearr_34238_34315[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (36))){
var state_34208__$1 = state_34208;
var statearr_34239_34316 = state_34208__$1;
(statearr_34239_34316[(2)] = false);

(statearr_34239_34316[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (41))){
var inst_34183 = (state_34208[(20)]);
var inst_34187 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34188 = cljs.core.map.call(null,inst_34187,inst_34183);
var inst_34189 = cljs.core.pr_str.call(null,inst_34188);
var inst_34190 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34189)].join('');
var inst_34191 = figwheel.client.utils.log.call(null,inst_34190);
var state_34208__$1 = state_34208;
var statearr_34240_34317 = state_34208__$1;
(statearr_34240_34317[(2)] = inst_34191);

(statearr_34240_34317[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (43))){
var inst_34184 = (state_34208[(21)]);
var inst_34194 = (state_34208[(2)]);
var inst_34195 = cljs.core.not_empty.call(null,inst_34184);
var state_34208__$1 = (function (){var statearr_34241 = state_34208;
(statearr_34241[(27)] = inst_34194);

return statearr_34241;
})();
if(cljs.core.truth_(inst_34195)){
var statearr_34242_34318 = state_34208__$1;
(statearr_34242_34318[(1)] = (44));

} else {
var statearr_34243_34319 = state_34208__$1;
(statearr_34243_34319[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (29))){
var inst_34121 = (state_34208[(19)]);
var inst_34161 = (state_34208[(16)]);
var inst_34127 = (state_34208[(26)]);
var inst_34124 = (state_34208[(23)]);
var inst_34125 = (state_34208[(24)]);
var inst_34129 = (state_34208[(25)]);
var inst_34157 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34160 = (function (){var all_files = inst_34121;
var res_SINGLEQUOTE_ = inst_34124;
var res = inst_34125;
var files_not_loaded = inst_34127;
var dependencies_that_loaded = inst_34129;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34121,inst_34161,inst_34127,inst_34124,inst_34125,inst_34129,inst_34157,state_val_34209,c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34159){
var map__34244 = p__34159;
var map__34244__$1 = ((((!((map__34244 == null)))?((((map__34244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34244):map__34244);
var namespace = cljs.core.get.call(null,map__34244__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34121,inst_34161,inst_34127,inst_34124,inst_34125,inst_34129,inst_34157,state_val_34209,c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34161__$1 = cljs.core.group_by.call(null,inst_34160,inst_34127);
var inst_34163 = (inst_34161__$1 == null);
var inst_34164 = cljs.core.not.call(null,inst_34163);
var state_34208__$1 = (function (){var statearr_34246 = state_34208;
(statearr_34246[(16)] = inst_34161__$1);

(statearr_34246[(28)] = inst_34157);

return statearr_34246;
})();
if(inst_34164){
var statearr_34247_34320 = state_34208__$1;
(statearr_34247_34320[(1)] = (32));

} else {
var statearr_34248_34321 = state_34208__$1;
(statearr_34248_34321[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (44))){
var inst_34184 = (state_34208[(21)]);
var inst_34197 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34184);
var inst_34198 = cljs.core.pr_str.call(null,inst_34197);
var inst_34199 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34198)].join('');
var inst_34200 = figwheel.client.utils.log.call(null,inst_34199);
var state_34208__$1 = state_34208;
var statearr_34249_34322 = state_34208__$1;
(statearr_34249_34322[(2)] = inst_34200);

(statearr_34249_34322[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (6))){
var inst_34102 = (state_34208[(2)]);
var state_34208__$1 = state_34208;
var statearr_34250_34323 = state_34208__$1;
(statearr_34250_34323[(2)] = inst_34102);

(statearr_34250_34323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (28))){
var inst_34127 = (state_34208[(26)]);
var inst_34154 = (state_34208[(2)]);
var inst_34155 = cljs.core.not_empty.call(null,inst_34127);
var state_34208__$1 = (function (){var statearr_34251 = state_34208;
(statearr_34251[(29)] = inst_34154);

return statearr_34251;
})();
if(cljs.core.truth_(inst_34155)){
var statearr_34252_34324 = state_34208__$1;
(statearr_34252_34324[(1)] = (29));

} else {
var statearr_34253_34325 = state_34208__$1;
(statearr_34253_34325[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (25))){
var inst_34125 = (state_34208[(24)]);
var inst_34141 = (state_34208[(2)]);
var inst_34142 = cljs.core.not_empty.call(null,inst_34125);
var state_34208__$1 = (function (){var statearr_34254 = state_34208;
(statearr_34254[(30)] = inst_34141);

return statearr_34254;
})();
if(cljs.core.truth_(inst_34142)){
var statearr_34255_34326 = state_34208__$1;
(statearr_34255_34326[(1)] = (26));

} else {
var statearr_34256_34327 = state_34208__$1;
(statearr_34256_34327[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (34))){
var inst_34177 = (state_34208[(2)]);
var state_34208__$1 = state_34208;
if(cljs.core.truth_(inst_34177)){
var statearr_34257_34328 = state_34208__$1;
(statearr_34257_34328[(1)] = (38));

} else {
var statearr_34258_34329 = state_34208__$1;
(statearr_34258_34329[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (17))){
var state_34208__$1 = state_34208;
var statearr_34259_34330 = state_34208__$1;
(statearr_34259_34330[(2)] = recompile_dependents);

(statearr_34259_34330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (3))){
var state_34208__$1 = state_34208;
var statearr_34260_34331 = state_34208__$1;
(statearr_34260_34331[(2)] = null);

(statearr_34260_34331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (12))){
var inst_34098 = (state_34208[(2)]);
var state_34208__$1 = state_34208;
var statearr_34261_34332 = state_34208__$1;
(statearr_34261_34332[(2)] = inst_34098);

(statearr_34261_34332[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (2))){
var inst_34060 = (state_34208[(13)]);
var inst_34067 = cljs.core.seq.call(null,inst_34060);
var inst_34068 = inst_34067;
var inst_34069 = null;
var inst_34070 = (0);
var inst_34071 = (0);
var state_34208__$1 = (function (){var statearr_34262 = state_34208;
(statearr_34262[(7)] = inst_34068);

(statearr_34262[(8)] = inst_34071);

(statearr_34262[(9)] = inst_34069);

(statearr_34262[(10)] = inst_34070);

return statearr_34262;
})();
var statearr_34263_34333 = state_34208__$1;
(statearr_34263_34333[(2)] = null);

(statearr_34263_34333[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (23))){
var inst_34121 = (state_34208[(19)]);
var inst_34127 = (state_34208[(26)]);
var inst_34124 = (state_34208[(23)]);
var inst_34125 = (state_34208[(24)]);
var inst_34129 = (state_34208[(25)]);
var inst_34132 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34134 = (function (){var all_files = inst_34121;
var res_SINGLEQUOTE_ = inst_34124;
var res = inst_34125;
var files_not_loaded = inst_34127;
var dependencies_that_loaded = inst_34129;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34121,inst_34127,inst_34124,inst_34125,inst_34129,inst_34132,state_val_34209,c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34133){
var map__34264 = p__34133;
var map__34264__$1 = ((((!((map__34264 == null)))?((((map__34264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34264):map__34264);
var request_url = cljs.core.get.call(null,map__34264__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34121,inst_34127,inst_34124,inst_34125,inst_34129,inst_34132,state_val_34209,c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34135 = cljs.core.reverse.call(null,inst_34129);
var inst_34136 = cljs.core.map.call(null,inst_34134,inst_34135);
var inst_34137 = cljs.core.pr_str.call(null,inst_34136);
var inst_34138 = figwheel.client.utils.log.call(null,inst_34137);
var state_34208__$1 = (function (){var statearr_34266 = state_34208;
(statearr_34266[(31)] = inst_34132);

return statearr_34266;
})();
var statearr_34267_34334 = state_34208__$1;
(statearr_34267_34334[(2)] = inst_34138);

(statearr_34267_34334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (35))){
var state_34208__$1 = state_34208;
var statearr_34268_34335 = state_34208__$1;
(statearr_34268_34335[(2)] = true);

(statearr_34268_34335[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (19))){
var inst_34111 = (state_34208[(12)]);
var inst_34117 = figwheel.client.file_reloading.expand_files.call(null,inst_34111);
var state_34208__$1 = state_34208;
var statearr_34269_34336 = state_34208__$1;
(statearr_34269_34336[(2)] = inst_34117);

(statearr_34269_34336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (11))){
var state_34208__$1 = state_34208;
var statearr_34270_34337 = state_34208__$1;
(statearr_34270_34337[(2)] = null);

(statearr_34270_34337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (9))){
var inst_34100 = (state_34208[(2)]);
var state_34208__$1 = state_34208;
var statearr_34271_34338 = state_34208__$1;
(statearr_34271_34338[(2)] = inst_34100);

(statearr_34271_34338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (5))){
var inst_34071 = (state_34208[(8)]);
var inst_34070 = (state_34208[(10)]);
var inst_34073 = (inst_34071 < inst_34070);
var inst_34074 = inst_34073;
var state_34208__$1 = state_34208;
if(cljs.core.truth_(inst_34074)){
var statearr_34272_34339 = state_34208__$1;
(statearr_34272_34339[(1)] = (7));

} else {
var statearr_34273_34340 = state_34208__$1;
(statearr_34273_34340[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (14))){
var inst_34081 = (state_34208[(22)]);
var inst_34090 = cljs.core.first.call(null,inst_34081);
var inst_34091 = figwheel.client.file_reloading.eval_body.call(null,inst_34090,opts);
var inst_34092 = cljs.core.next.call(null,inst_34081);
var inst_34068 = inst_34092;
var inst_34069 = null;
var inst_34070 = (0);
var inst_34071 = (0);
var state_34208__$1 = (function (){var statearr_34274 = state_34208;
(statearr_34274[(32)] = inst_34091);

(statearr_34274[(7)] = inst_34068);

(statearr_34274[(8)] = inst_34071);

(statearr_34274[(9)] = inst_34069);

(statearr_34274[(10)] = inst_34070);

return statearr_34274;
})();
var statearr_34275_34341 = state_34208__$1;
(statearr_34275_34341[(2)] = null);

(statearr_34275_34341[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (45))){
var state_34208__$1 = state_34208;
var statearr_34276_34342 = state_34208__$1;
(statearr_34276_34342[(2)] = null);

(statearr_34276_34342[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (26))){
var inst_34121 = (state_34208[(19)]);
var inst_34127 = (state_34208[(26)]);
var inst_34124 = (state_34208[(23)]);
var inst_34125 = (state_34208[(24)]);
var inst_34129 = (state_34208[(25)]);
var inst_34144 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34146 = (function (){var all_files = inst_34121;
var res_SINGLEQUOTE_ = inst_34124;
var res = inst_34125;
var files_not_loaded = inst_34127;
var dependencies_that_loaded = inst_34129;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34121,inst_34127,inst_34124,inst_34125,inst_34129,inst_34144,state_val_34209,c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34145){
var map__34277 = p__34145;
var map__34277__$1 = ((((!((map__34277 == null)))?((((map__34277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34277):map__34277);
var namespace = cljs.core.get.call(null,map__34277__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34277__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34121,inst_34127,inst_34124,inst_34125,inst_34129,inst_34144,state_val_34209,c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34147 = cljs.core.map.call(null,inst_34146,inst_34125);
var inst_34148 = cljs.core.pr_str.call(null,inst_34147);
var inst_34149 = figwheel.client.utils.log.call(null,inst_34148);
var inst_34150 = (function (){var all_files = inst_34121;
var res_SINGLEQUOTE_ = inst_34124;
var res = inst_34125;
var files_not_loaded = inst_34127;
var dependencies_that_loaded = inst_34129;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34121,inst_34127,inst_34124,inst_34125,inst_34129,inst_34144,inst_34146,inst_34147,inst_34148,inst_34149,state_val_34209,c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34121,inst_34127,inst_34124,inst_34125,inst_34129,inst_34144,inst_34146,inst_34147,inst_34148,inst_34149,state_val_34209,c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34151 = setTimeout(inst_34150,(10));
var state_34208__$1 = (function (){var statearr_34279 = state_34208;
(statearr_34279[(33)] = inst_34149);

(statearr_34279[(34)] = inst_34144);

return statearr_34279;
})();
var statearr_34280_34343 = state_34208__$1;
(statearr_34280_34343[(2)] = inst_34151);

(statearr_34280_34343[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (16))){
var state_34208__$1 = state_34208;
var statearr_34281_34344 = state_34208__$1;
(statearr_34281_34344[(2)] = reload_dependents);

(statearr_34281_34344[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (38))){
var inst_34161 = (state_34208[(16)]);
var inst_34179 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34161);
var state_34208__$1 = state_34208;
var statearr_34282_34345 = state_34208__$1;
(statearr_34282_34345[(2)] = inst_34179);

(statearr_34282_34345[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (30))){
var state_34208__$1 = state_34208;
var statearr_34283_34346 = state_34208__$1;
(statearr_34283_34346[(2)] = null);

(statearr_34283_34346[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (10))){
var inst_34081 = (state_34208[(22)]);
var inst_34083 = cljs.core.chunked_seq_QMARK_.call(null,inst_34081);
var state_34208__$1 = state_34208;
if(inst_34083){
var statearr_34284_34347 = state_34208__$1;
(statearr_34284_34347[(1)] = (13));

} else {
var statearr_34285_34348 = state_34208__$1;
(statearr_34285_34348[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (18))){
var inst_34115 = (state_34208[(2)]);
var state_34208__$1 = state_34208;
if(cljs.core.truth_(inst_34115)){
var statearr_34286_34349 = state_34208__$1;
(statearr_34286_34349[(1)] = (19));

} else {
var statearr_34287_34350 = state_34208__$1;
(statearr_34287_34350[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (42))){
var state_34208__$1 = state_34208;
var statearr_34288_34351 = state_34208__$1;
(statearr_34288_34351[(2)] = null);

(statearr_34288_34351[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (37))){
var inst_34174 = (state_34208[(2)]);
var state_34208__$1 = state_34208;
var statearr_34289_34352 = state_34208__$1;
(statearr_34289_34352[(2)] = inst_34174);

(statearr_34289_34352[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (8))){
var inst_34068 = (state_34208[(7)]);
var inst_34081 = (state_34208[(22)]);
var inst_34081__$1 = cljs.core.seq.call(null,inst_34068);
var state_34208__$1 = (function (){var statearr_34290 = state_34208;
(statearr_34290[(22)] = inst_34081__$1);

return statearr_34290;
})();
if(inst_34081__$1){
var statearr_34291_34353 = state_34208__$1;
(statearr_34291_34353[(1)] = (10));

} else {
var statearr_34292_34354 = state_34208__$1;
(statearr_34292_34354[(1)] = (11));

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
});})(c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30500__auto__,c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto____0 = (function (){
var statearr_34293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34293[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto__);

(statearr_34293[(1)] = (1));

return statearr_34293;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto____1 = (function (state_34208){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_34208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e34294){if((e34294 instanceof Object)){
var ex__30504__auto__ = e34294;
var statearr_34295_34355 = state_34208;
(statearr_34295_34355[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34356 = state_34208;
state_34208 = G__34356;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto__ = function(state_34208){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto____1.call(this,state_34208);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30590__auto__ = (function (){var statearr_34296 = f__30589__auto__.call(null);
(statearr_34296[(6)] = c__30588__auto__);

return statearr_34296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto__,map__34053,map__34053__$1,opts,before_jsload,on_jsload,reload_dependents,map__34054,map__34054__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30588__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34359,link){
var map__34360 = p__34359;
var map__34360__$1 = ((((!((map__34360 == null)))?((((map__34360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34360):map__34360);
var file = cljs.core.get.call(null,map__34360__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34360,map__34360__$1,file){
return (function (p1__34357_SHARP_,p2__34358_SHARP_){
if(cljs.core._EQ_.call(null,p1__34357_SHARP_,p2__34358_SHARP_)){
return p1__34357_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34360,map__34360__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34363){
var map__34364 = p__34363;
var map__34364__$1 = ((((!((map__34364 == null)))?((((map__34364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34364):map__34364);
var match_length = cljs.core.get.call(null,map__34364__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34364__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34362_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34362_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34366_SHARP_,p2__34367_SHARP_){
return cljs.core.assoc.call(null,p1__34366_SHARP_,cljs.core.get.call(null,p2__34367_SHARP_,key),p2__34367_SHARP_);
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
var loaded_f_datas_34368 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34368);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34368);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34369,p__34370){
var map__34371 = p__34369;
var map__34371__$1 = ((((!((map__34371 == null)))?((((map__34371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34371):map__34371);
var on_cssload = cljs.core.get.call(null,map__34371__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34372 = p__34370;
var map__34372__$1 = ((((!((map__34372 == null)))?((((map__34372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34372):map__34372);
var files_msg = map__34372__$1;
var files = cljs.core.get.call(null,map__34372__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1509593232713
