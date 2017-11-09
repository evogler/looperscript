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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36740_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36740_SHARP_));
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
var seq__36741 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36742 = null;
var count__36743 = (0);
var i__36744 = (0);
while(true){
if((i__36744 < count__36743)){
var n = cljs.core._nth.call(null,chunk__36742,i__36744);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36745 = seq__36741;
var G__36746 = chunk__36742;
var G__36747 = count__36743;
var G__36748 = (i__36744 + (1));
seq__36741 = G__36745;
chunk__36742 = G__36746;
count__36743 = G__36747;
i__36744 = G__36748;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36741);
if(temp__4657__auto__){
var seq__36741__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36741__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__36741__$1);
var G__36749 = cljs.core.chunk_rest.call(null,seq__36741__$1);
var G__36750 = c__28775__auto__;
var G__36751 = cljs.core.count.call(null,c__28775__auto__);
var G__36752 = (0);
seq__36741 = G__36749;
chunk__36742 = G__36750;
count__36743 = G__36751;
i__36744 = G__36752;
continue;
} else {
var n = cljs.core.first.call(null,seq__36741__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36753 = cljs.core.next.call(null,seq__36741__$1);
var G__36754 = null;
var G__36755 = (0);
var G__36756 = (0);
seq__36741 = G__36753;
chunk__36742 = G__36754;
count__36743 = G__36755;
i__36744 = G__36756;
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

var seq__36766_36774 = cljs.core.seq.call(null,deps);
var chunk__36767_36775 = null;
var count__36768_36776 = (0);
var i__36769_36777 = (0);
while(true){
if((i__36769_36777 < count__36768_36776)){
var dep_36778 = cljs.core._nth.call(null,chunk__36767_36775,i__36769_36777);
topo_sort_helper_STAR_.call(null,dep_36778,(depth + (1)),state);

var G__36779 = seq__36766_36774;
var G__36780 = chunk__36767_36775;
var G__36781 = count__36768_36776;
var G__36782 = (i__36769_36777 + (1));
seq__36766_36774 = G__36779;
chunk__36767_36775 = G__36780;
count__36768_36776 = G__36781;
i__36769_36777 = G__36782;
continue;
} else {
var temp__4657__auto___36783 = cljs.core.seq.call(null,seq__36766_36774);
if(temp__4657__auto___36783){
var seq__36766_36784__$1 = temp__4657__auto___36783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36766_36784__$1)){
var c__28775__auto___36785 = cljs.core.chunk_first.call(null,seq__36766_36784__$1);
var G__36786 = cljs.core.chunk_rest.call(null,seq__36766_36784__$1);
var G__36787 = c__28775__auto___36785;
var G__36788 = cljs.core.count.call(null,c__28775__auto___36785);
var G__36789 = (0);
seq__36766_36774 = G__36786;
chunk__36767_36775 = G__36787;
count__36768_36776 = G__36788;
i__36769_36777 = G__36789;
continue;
} else {
var dep_36790 = cljs.core.first.call(null,seq__36766_36784__$1);
topo_sort_helper_STAR_.call(null,dep_36790,(depth + (1)),state);

var G__36791 = cljs.core.next.call(null,seq__36766_36784__$1);
var G__36792 = null;
var G__36793 = (0);
var G__36794 = (0);
seq__36766_36774 = G__36791;
chunk__36767_36775 = G__36792;
count__36768_36776 = G__36793;
i__36769_36777 = G__36794;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36770){
var vec__36771 = p__36770;
var seq__36772 = cljs.core.seq.call(null,vec__36771);
var first__36773 = cljs.core.first.call(null,seq__36772);
var seq__36772__$1 = cljs.core.next.call(null,seq__36772);
var x = first__36773;
var xs = seq__36772__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36771,seq__36772,first__36773,seq__36772__$1,x,xs,get_deps__$1){
return (function (p1__36757_SHARP_){
return clojure.set.difference.call(null,p1__36757_SHARP_,x);
});})(vec__36771,seq__36772,first__36773,seq__36772__$1,x,xs,get_deps__$1))
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
var seq__36795 = cljs.core.seq.call(null,provides);
var chunk__36796 = null;
var count__36797 = (0);
var i__36798 = (0);
while(true){
if((i__36798 < count__36797)){
var prov = cljs.core._nth.call(null,chunk__36796,i__36798);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36799_36807 = cljs.core.seq.call(null,requires);
var chunk__36800_36808 = null;
var count__36801_36809 = (0);
var i__36802_36810 = (0);
while(true){
if((i__36802_36810 < count__36801_36809)){
var req_36811 = cljs.core._nth.call(null,chunk__36800_36808,i__36802_36810);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36811,prov);

var G__36812 = seq__36799_36807;
var G__36813 = chunk__36800_36808;
var G__36814 = count__36801_36809;
var G__36815 = (i__36802_36810 + (1));
seq__36799_36807 = G__36812;
chunk__36800_36808 = G__36813;
count__36801_36809 = G__36814;
i__36802_36810 = G__36815;
continue;
} else {
var temp__4657__auto___36816 = cljs.core.seq.call(null,seq__36799_36807);
if(temp__4657__auto___36816){
var seq__36799_36817__$1 = temp__4657__auto___36816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36799_36817__$1)){
var c__28775__auto___36818 = cljs.core.chunk_first.call(null,seq__36799_36817__$1);
var G__36819 = cljs.core.chunk_rest.call(null,seq__36799_36817__$1);
var G__36820 = c__28775__auto___36818;
var G__36821 = cljs.core.count.call(null,c__28775__auto___36818);
var G__36822 = (0);
seq__36799_36807 = G__36819;
chunk__36800_36808 = G__36820;
count__36801_36809 = G__36821;
i__36802_36810 = G__36822;
continue;
} else {
var req_36823 = cljs.core.first.call(null,seq__36799_36817__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36823,prov);

var G__36824 = cljs.core.next.call(null,seq__36799_36817__$1);
var G__36825 = null;
var G__36826 = (0);
var G__36827 = (0);
seq__36799_36807 = G__36824;
chunk__36800_36808 = G__36825;
count__36801_36809 = G__36826;
i__36802_36810 = G__36827;
continue;
}
} else {
}
}
break;
}

var G__36828 = seq__36795;
var G__36829 = chunk__36796;
var G__36830 = count__36797;
var G__36831 = (i__36798 + (1));
seq__36795 = G__36828;
chunk__36796 = G__36829;
count__36797 = G__36830;
i__36798 = G__36831;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36795);
if(temp__4657__auto__){
var seq__36795__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36795__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__36795__$1);
var G__36832 = cljs.core.chunk_rest.call(null,seq__36795__$1);
var G__36833 = c__28775__auto__;
var G__36834 = cljs.core.count.call(null,c__28775__auto__);
var G__36835 = (0);
seq__36795 = G__36832;
chunk__36796 = G__36833;
count__36797 = G__36834;
i__36798 = G__36835;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36795__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36803_36836 = cljs.core.seq.call(null,requires);
var chunk__36804_36837 = null;
var count__36805_36838 = (0);
var i__36806_36839 = (0);
while(true){
if((i__36806_36839 < count__36805_36838)){
var req_36840 = cljs.core._nth.call(null,chunk__36804_36837,i__36806_36839);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36840,prov);

var G__36841 = seq__36803_36836;
var G__36842 = chunk__36804_36837;
var G__36843 = count__36805_36838;
var G__36844 = (i__36806_36839 + (1));
seq__36803_36836 = G__36841;
chunk__36804_36837 = G__36842;
count__36805_36838 = G__36843;
i__36806_36839 = G__36844;
continue;
} else {
var temp__4657__auto___36845__$1 = cljs.core.seq.call(null,seq__36803_36836);
if(temp__4657__auto___36845__$1){
var seq__36803_36846__$1 = temp__4657__auto___36845__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36803_36846__$1)){
var c__28775__auto___36847 = cljs.core.chunk_first.call(null,seq__36803_36846__$1);
var G__36848 = cljs.core.chunk_rest.call(null,seq__36803_36846__$1);
var G__36849 = c__28775__auto___36847;
var G__36850 = cljs.core.count.call(null,c__28775__auto___36847);
var G__36851 = (0);
seq__36803_36836 = G__36848;
chunk__36804_36837 = G__36849;
count__36805_36838 = G__36850;
i__36806_36839 = G__36851;
continue;
} else {
var req_36852 = cljs.core.first.call(null,seq__36803_36846__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36852,prov);

var G__36853 = cljs.core.next.call(null,seq__36803_36846__$1);
var G__36854 = null;
var G__36855 = (0);
var G__36856 = (0);
seq__36803_36836 = G__36853;
chunk__36804_36837 = G__36854;
count__36805_36838 = G__36855;
i__36806_36839 = G__36856;
continue;
}
} else {
}
}
break;
}

var G__36857 = cljs.core.next.call(null,seq__36795__$1);
var G__36858 = null;
var G__36859 = (0);
var G__36860 = (0);
seq__36795 = G__36857;
chunk__36796 = G__36858;
count__36797 = G__36859;
i__36798 = G__36860;
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
var seq__36861_36865 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36862_36866 = null;
var count__36863_36867 = (0);
var i__36864_36868 = (0);
while(true){
if((i__36864_36868 < count__36863_36867)){
var ns_36869 = cljs.core._nth.call(null,chunk__36862_36866,i__36864_36868);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36869);

var G__36870 = seq__36861_36865;
var G__36871 = chunk__36862_36866;
var G__36872 = count__36863_36867;
var G__36873 = (i__36864_36868 + (1));
seq__36861_36865 = G__36870;
chunk__36862_36866 = G__36871;
count__36863_36867 = G__36872;
i__36864_36868 = G__36873;
continue;
} else {
var temp__4657__auto___36874 = cljs.core.seq.call(null,seq__36861_36865);
if(temp__4657__auto___36874){
var seq__36861_36875__$1 = temp__4657__auto___36874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36861_36875__$1)){
var c__28775__auto___36876 = cljs.core.chunk_first.call(null,seq__36861_36875__$1);
var G__36877 = cljs.core.chunk_rest.call(null,seq__36861_36875__$1);
var G__36878 = c__28775__auto___36876;
var G__36879 = cljs.core.count.call(null,c__28775__auto___36876);
var G__36880 = (0);
seq__36861_36865 = G__36877;
chunk__36862_36866 = G__36878;
count__36863_36867 = G__36879;
i__36864_36868 = G__36880;
continue;
} else {
var ns_36881 = cljs.core.first.call(null,seq__36861_36875__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36881);

var G__36882 = cljs.core.next.call(null,seq__36861_36875__$1);
var G__36883 = null;
var G__36884 = (0);
var G__36885 = (0);
seq__36861_36865 = G__36882;
chunk__36862_36866 = G__36883;
count__36863_36867 = G__36884;
i__36864_36868 = G__36885;
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
var G__36886__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36887__i = 0, G__36887__a = new Array(arguments.length -  0);
while (G__36887__i < G__36887__a.length) {G__36887__a[G__36887__i] = arguments[G__36887__i + 0]; ++G__36887__i;}
  args = new cljs.core.IndexedSeq(G__36887__a,0,null);
} 
return G__36886__delegate.call(this,args);};
G__36886.cljs$lang$maxFixedArity = 0;
G__36886.cljs$lang$applyTo = (function (arglist__36888){
var args = cljs.core.seq(arglist__36888);
return G__36886__delegate(args);
});
G__36886.cljs$core$IFn$_invoke$arity$variadic = G__36886__delegate;
return G__36886;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36889_SHARP_,p2__36890_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36889_SHARP_)].join('')),p2__36890_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36891_SHARP_,p2__36892_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36891_SHARP_)].join(''),p2__36892_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36893 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36893.addCallback(((function (G__36893){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36893))
);

G__36893.addErrback(((function (G__36893){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36893))
);

return G__36893;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36894 = cljs.core._EQ_;
var expr__36895 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36894.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36895))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36894,expr__36895){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36894,expr__36895))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36894,expr__36895){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36897){if((e36897 instanceof Error)){
var e = e36897;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36897;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36894,expr__36895))
} else {
if(cljs.core.truth_(pred__36894.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36895))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36894.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36895))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36894.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36895))){
return ((function (pred__36894,expr__36895){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36898){if((e36898 instanceof Error)){
var e = e36898;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36898;

}
}})());
});
;})(pred__36894,expr__36895))
} else {
return ((function (pred__36894,expr__36895){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36894,expr__36895))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36899,callback){
var map__36900 = p__36899;
var map__36900__$1 = ((((!((map__36900 == null)))?((((map__36900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36900):map__36900);
var file_msg = map__36900__$1;
var request_url = cljs.core.get.call(null,map__36900__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36900,map__36900__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36900,map__36900__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__33612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto__){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto__){
return (function (state_36924){
var state_val_36925 = (state_36924[(1)]);
if((state_val_36925 === (7))){
var inst_36920 = (state_36924[(2)]);
var state_36924__$1 = state_36924;
var statearr_36926_36943 = state_36924__$1;
(statearr_36926_36943[(2)] = inst_36920);

(statearr_36926_36943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36925 === (1))){
var state_36924__$1 = state_36924;
var statearr_36927_36944 = state_36924__$1;
(statearr_36927_36944[(2)] = null);

(statearr_36927_36944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36925 === (4))){
var inst_36904 = (state_36924[(7)]);
var inst_36904__$1 = (state_36924[(2)]);
var state_36924__$1 = (function (){var statearr_36928 = state_36924;
(statearr_36928[(7)] = inst_36904__$1);

return statearr_36928;
})();
if(cljs.core.truth_(inst_36904__$1)){
var statearr_36929_36945 = state_36924__$1;
(statearr_36929_36945[(1)] = (5));

} else {
var statearr_36930_36946 = state_36924__$1;
(statearr_36930_36946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36925 === (6))){
var state_36924__$1 = state_36924;
var statearr_36931_36947 = state_36924__$1;
(statearr_36931_36947[(2)] = null);

(statearr_36931_36947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36925 === (3))){
var inst_36922 = (state_36924[(2)]);
var state_36924__$1 = state_36924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36924__$1,inst_36922);
} else {
if((state_val_36925 === (2))){
var state_36924__$1 = state_36924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36924__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36925 === (11))){
var inst_36916 = (state_36924[(2)]);
var state_36924__$1 = (function (){var statearr_36932 = state_36924;
(statearr_36932[(8)] = inst_36916);

return statearr_36932;
})();
var statearr_36933_36948 = state_36924__$1;
(statearr_36933_36948[(2)] = null);

(statearr_36933_36948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36925 === (9))){
var inst_36910 = (state_36924[(9)]);
var inst_36908 = (state_36924[(10)]);
var inst_36912 = inst_36910.call(null,inst_36908);
var state_36924__$1 = state_36924;
var statearr_36934_36949 = state_36924__$1;
(statearr_36934_36949[(2)] = inst_36912);

(statearr_36934_36949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36925 === (5))){
var inst_36904 = (state_36924[(7)]);
var inst_36906 = figwheel.client.file_reloading.blocking_load.call(null,inst_36904);
var state_36924__$1 = state_36924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36924__$1,(8),inst_36906);
} else {
if((state_val_36925 === (10))){
var inst_36908 = (state_36924[(10)]);
var inst_36914 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36908);
var state_36924__$1 = state_36924;
var statearr_36935_36950 = state_36924__$1;
(statearr_36935_36950[(2)] = inst_36914);

(statearr_36935_36950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36925 === (8))){
var inst_36910 = (state_36924[(9)]);
var inst_36904 = (state_36924[(7)]);
var inst_36908 = (state_36924[(2)]);
var inst_36909 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36910__$1 = cljs.core.get.call(null,inst_36909,inst_36904);
var state_36924__$1 = (function (){var statearr_36936 = state_36924;
(statearr_36936[(9)] = inst_36910__$1);

(statearr_36936[(10)] = inst_36908);

return statearr_36936;
})();
if(cljs.core.truth_(inst_36910__$1)){
var statearr_36937_36951 = state_36924__$1;
(statearr_36937_36951[(1)] = (9));

} else {
var statearr_36938_36952 = state_36924__$1;
(statearr_36938_36952[(1)] = (10));

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
});})(c__33612__auto__))
;
return ((function (switch__33524__auto__,c__33612__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33525__auto__ = null;
var figwheel$client$file_reloading$state_machine__33525__auto____0 = (function (){
var statearr_36939 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36939[(0)] = figwheel$client$file_reloading$state_machine__33525__auto__);

(statearr_36939[(1)] = (1));

return statearr_36939;
});
var figwheel$client$file_reloading$state_machine__33525__auto____1 = (function (state_36924){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_36924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e36940){if((e36940 instanceof Object)){
var ex__33528__auto__ = e36940;
var statearr_36941_36953 = state_36924;
(statearr_36941_36953[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36954 = state_36924;
state_36924 = G__36954;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33525__auto__ = function(state_36924){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33525__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33525__auto____1.call(this,state_36924);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33525__auto____0;
figwheel$client$file_reloading$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33525__auto____1;
return figwheel$client$file_reloading$state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto__))
})();
var state__33614__auto__ = (function (){var statearr_36942 = f__33613__auto__.call(null);
(statearr_36942[(6)] = c__33612__auto__);

return statearr_36942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto__))
);

return c__33612__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36955,callback){
var map__36956 = p__36955;
var map__36956__$1 = ((((!((map__36956 == null)))?((((map__36956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36956):map__36956);
var file_msg = map__36956__$1;
var namespace = cljs.core.get.call(null,map__36956__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36956,map__36956__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36956,map__36956__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36958){
var map__36959 = p__36958;
var map__36959__$1 = ((((!((map__36959 == null)))?((((map__36959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36959):map__36959);
var file_msg = map__36959__$1;
var namespace = cljs.core.get.call(null,map__36959__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36961){
var map__36962 = p__36961;
var map__36962__$1 = ((((!((map__36962 == null)))?((((map__36962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36962):map__36962);
var file_msg = map__36962__$1;
var namespace = cljs.core.get.call(null,map__36962__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36964,callback){
var map__36965 = p__36964;
var map__36965__$1 = ((((!((map__36965 == null)))?((((map__36965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36965):map__36965);
var file_msg = map__36965__$1;
var request_url = cljs.core.get.call(null,map__36965__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36965__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33612__auto___37015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___37015,out){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___37015,out){
return (function (state_37000){
var state_val_37001 = (state_37000[(1)]);
if((state_val_37001 === (1))){
var inst_36974 = cljs.core.seq.call(null,files);
var inst_36975 = cljs.core.first.call(null,inst_36974);
var inst_36976 = cljs.core.next.call(null,inst_36974);
var inst_36977 = files;
var state_37000__$1 = (function (){var statearr_37002 = state_37000;
(statearr_37002[(7)] = inst_36976);

(statearr_37002[(8)] = inst_36977);

(statearr_37002[(9)] = inst_36975);

return statearr_37002;
})();
var statearr_37003_37016 = state_37000__$1;
(statearr_37003_37016[(2)] = null);

(statearr_37003_37016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (2))){
var inst_36977 = (state_37000[(8)]);
var inst_36983 = (state_37000[(10)]);
var inst_36982 = cljs.core.seq.call(null,inst_36977);
var inst_36983__$1 = cljs.core.first.call(null,inst_36982);
var inst_36984 = cljs.core.next.call(null,inst_36982);
var inst_36985 = (inst_36983__$1 == null);
var inst_36986 = cljs.core.not.call(null,inst_36985);
var state_37000__$1 = (function (){var statearr_37004 = state_37000;
(statearr_37004[(11)] = inst_36984);

(statearr_37004[(10)] = inst_36983__$1);

return statearr_37004;
})();
if(inst_36986){
var statearr_37005_37017 = state_37000__$1;
(statearr_37005_37017[(1)] = (4));

} else {
var statearr_37006_37018 = state_37000__$1;
(statearr_37006_37018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (3))){
var inst_36998 = (state_37000[(2)]);
var state_37000__$1 = state_37000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37000__$1,inst_36998);
} else {
if((state_val_37001 === (4))){
var inst_36983 = (state_37000[(10)]);
var inst_36988 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36983);
var state_37000__$1 = state_37000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37000__$1,(7),inst_36988);
} else {
if((state_val_37001 === (5))){
var inst_36994 = cljs.core.async.close_BANG_.call(null,out);
var state_37000__$1 = state_37000;
var statearr_37007_37019 = state_37000__$1;
(statearr_37007_37019[(2)] = inst_36994);

(statearr_37007_37019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (6))){
var inst_36996 = (state_37000[(2)]);
var state_37000__$1 = state_37000;
var statearr_37008_37020 = state_37000__$1;
(statearr_37008_37020[(2)] = inst_36996);

(statearr_37008_37020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (7))){
var inst_36984 = (state_37000[(11)]);
var inst_36990 = (state_37000[(2)]);
var inst_36991 = cljs.core.async.put_BANG_.call(null,out,inst_36990);
var inst_36977 = inst_36984;
var state_37000__$1 = (function (){var statearr_37009 = state_37000;
(statearr_37009[(8)] = inst_36977);

(statearr_37009[(12)] = inst_36991);

return statearr_37009;
})();
var statearr_37010_37021 = state_37000__$1;
(statearr_37010_37021[(2)] = null);

(statearr_37010_37021[(1)] = (2));


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
});})(c__33612__auto___37015,out))
;
return ((function (switch__33524__auto__,c__33612__auto___37015,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33525__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33525__auto____0 = (function (){
var statearr_37011 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37011[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33525__auto__);

(statearr_37011[(1)] = (1));

return statearr_37011;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33525__auto____1 = (function (state_37000){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_37000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e37012){if((e37012 instanceof Object)){
var ex__33528__auto__ = e37012;
var statearr_37013_37022 = state_37000;
(statearr_37013_37022[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37023 = state_37000;
state_37000 = G__37023;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33525__auto__ = function(state_37000){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33525__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33525__auto____1.call(this,state_37000);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33525__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33525__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___37015,out))
})();
var state__33614__auto__ = (function (){var statearr_37014 = f__33613__auto__.call(null);
(statearr_37014[(6)] = c__33612__auto___37015);

return statearr_37014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___37015,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37024,opts){
var map__37025 = p__37024;
var map__37025__$1 = ((((!((map__37025 == null)))?((((map__37025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37025):map__37025);
var eval_body = cljs.core.get.call(null,map__37025__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37025__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37027){var e = e37027;
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
return (function (p1__37028_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37028_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37029){
var vec__37030 = p__37029;
var k = cljs.core.nth.call(null,vec__37030,(0),null);
var v = cljs.core.nth.call(null,vec__37030,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37033){
var vec__37034 = p__37033;
var k = cljs.core.nth.call(null,vec__37034,(0),null);
var v = cljs.core.nth.call(null,vec__37034,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37040,p__37041){
var map__37042 = p__37040;
var map__37042__$1 = ((((!((map__37042 == null)))?((((map__37042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37042):map__37042);
var opts = map__37042__$1;
var before_jsload = cljs.core.get.call(null,map__37042__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37042__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37042__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37043 = p__37041;
var map__37043__$1 = ((((!((map__37043 == null)))?((((map__37043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37043):map__37043);
var msg = map__37043__$1;
var files = cljs.core.get.call(null,map__37043__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37043__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37043__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37197){
var state_val_37198 = (state_37197[(1)]);
if((state_val_37198 === (7))){
var inst_37059 = (state_37197[(7)]);
var inst_37057 = (state_37197[(8)]);
var inst_37060 = (state_37197[(9)]);
var inst_37058 = (state_37197[(10)]);
var inst_37065 = cljs.core._nth.call(null,inst_37058,inst_37060);
var inst_37066 = figwheel.client.file_reloading.eval_body.call(null,inst_37065,opts);
var inst_37067 = (inst_37060 + (1));
var tmp37199 = inst_37059;
var tmp37200 = inst_37057;
var tmp37201 = inst_37058;
var inst_37057__$1 = tmp37200;
var inst_37058__$1 = tmp37201;
var inst_37059__$1 = tmp37199;
var inst_37060__$1 = inst_37067;
var state_37197__$1 = (function (){var statearr_37202 = state_37197;
(statearr_37202[(7)] = inst_37059__$1);

(statearr_37202[(8)] = inst_37057__$1);

(statearr_37202[(9)] = inst_37060__$1);

(statearr_37202[(10)] = inst_37058__$1);

(statearr_37202[(11)] = inst_37066);

return statearr_37202;
})();
var statearr_37203_37286 = state_37197__$1;
(statearr_37203_37286[(2)] = null);

(statearr_37203_37286[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (20))){
var inst_37100 = (state_37197[(12)]);
var inst_37108 = figwheel.client.file_reloading.sort_files.call(null,inst_37100);
var state_37197__$1 = state_37197;
var statearr_37204_37287 = state_37197__$1;
(statearr_37204_37287[(2)] = inst_37108);

(statearr_37204_37287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (27))){
var state_37197__$1 = state_37197;
var statearr_37205_37288 = state_37197__$1;
(statearr_37205_37288[(2)] = null);

(statearr_37205_37288[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (1))){
var inst_37049 = (state_37197[(13)]);
var inst_37046 = before_jsload.call(null,files);
var inst_37047 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37048 = (function (){return ((function (inst_37049,inst_37046,inst_37047,state_val_37198,c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37037_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37037_SHARP_);
});
;})(inst_37049,inst_37046,inst_37047,state_val_37198,c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37049__$1 = cljs.core.filter.call(null,inst_37048,files);
var inst_37050 = cljs.core.not_empty.call(null,inst_37049__$1);
var state_37197__$1 = (function (){var statearr_37206 = state_37197;
(statearr_37206[(13)] = inst_37049__$1);

(statearr_37206[(14)] = inst_37046);

(statearr_37206[(15)] = inst_37047);

return statearr_37206;
})();
if(cljs.core.truth_(inst_37050)){
var statearr_37207_37289 = state_37197__$1;
(statearr_37207_37289[(1)] = (2));

} else {
var statearr_37208_37290 = state_37197__$1;
(statearr_37208_37290[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (24))){
var state_37197__$1 = state_37197;
var statearr_37209_37291 = state_37197__$1;
(statearr_37209_37291[(2)] = null);

(statearr_37209_37291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (39))){
var inst_37150 = (state_37197[(16)]);
var state_37197__$1 = state_37197;
var statearr_37210_37292 = state_37197__$1;
(statearr_37210_37292[(2)] = inst_37150);

(statearr_37210_37292[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (46))){
var inst_37192 = (state_37197[(2)]);
var state_37197__$1 = state_37197;
var statearr_37211_37293 = state_37197__$1;
(statearr_37211_37293[(2)] = inst_37192);

(statearr_37211_37293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (4))){
var inst_37094 = (state_37197[(2)]);
var inst_37095 = cljs.core.List.EMPTY;
var inst_37096 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37095);
var inst_37097 = (function (){return ((function (inst_37094,inst_37095,inst_37096,state_val_37198,c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37038_SHARP_){
var and__27924__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37038_SHARP_);
if(cljs.core.truth_(and__27924__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37038_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37038_SHARP_)));
} else {
return and__27924__auto__;
}
});
;})(inst_37094,inst_37095,inst_37096,state_val_37198,c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37098 = cljs.core.filter.call(null,inst_37097,files);
var inst_37099 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37100 = cljs.core.concat.call(null,inst_37098,inst_37099);
var state_37197__$1 = (function (){var statearr_37212 = state_37197;
(statearr_37212[(17)] = inst_37096);

(statearr_37212[(18)] = inst_37094);

(statearr_37212[(12)] = inst_37100);

return statearr_37212;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37213_37294 = state_37197__$1;
(statearr_37213_37294[(1)] = (16));

} else {
var statearr_37214_37295 = state_37197__$1;
(statearr_37214_37295[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (15))){
var inst_37084 = (state_37197[(2)]);
var state_37197__$1 = state_37197;
var statearr_37215_37296 = state_37197__$1;
(statearr_37215_37296[(2)] = inst_37084);

(statearr_37215_37296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (21))){
var inst_37110 = (state_37197[(19)]);
var inst_37110__$1 = (state_37197[(2)]);
var inst_37111 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37110__$1);
var state_37197__$1 = (function (){var statearr_37216 = state_37197;
(statearr_37216[(19)] = inst_37110__$1);

return statearr_37216;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37197__$1,(22),inst_37111);
} else {
if((state_val_37198 === (31))){
var inst_37195 = (state_37197[(2)]);
var state_37197__$1 = state_37197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37197__$1,inst_37195);
} else {
if((state_val_37198 === (32))){
var inst_37150 = (state_37197[(16)]);
var inst_37155 = inst_37150.cljs$lang$protocol_mask$partition0$;
var inst_37156 = (inst_37155 & (64));
var inst_37157 = inst_37150.cljs$core$ISeq$;
var inst_37158 = (cljs.core.PROTOCOL_SENTINEL === inst_37157);
var inst_37159 = (inst_37156) || (inst_37158);
var state_37197__$1 = state_37197;
if(cljs.core.truth_(inst_37159)){
var statearr_37217_37297 = state_37197__$1;
(statearr_37217_37297[(1)] = (35));

} else {
var statearr_37218_37298 = state_37197__$1;
(statearr_37218_37298[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (40))){
var inst_37172 = (state_37197[(20)]);
var inst_37171 = (state_37197[(2)]);
var inst_37172__$1 = cljs.core.get.call(null,inst_37171,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37173 = cljs.core.get.call(null,inst_37171,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37174 = cljs.core.not_empty.call(null,inst_37172__$1);
var state_37197__$1 = (function (){var statearr_37219 = state_37197;
(statearr_37219[(21)] = inst_37173);

(statearr_37219[(20)] = inst_37172__$1);

return statearr_37219;
})();
if(cljs.core.truth_(inst_37174)){
var statearr_37220_37299 = state_37197__$1;
(statearr_37220_37299[(1)] = (41));

} else {
var statearr_37221_37300 = state_37197__$1;
(statearr_37221_37300[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (33))){
var state_37197__$1 = state_37197;
var statearr_37222_37301 = state_37197__$1;
(statearr_37222_37301[(2)] = false);

(statearr_37222_37301[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (13))){
var inst_37070 = (state_37197[(22)]);
var inst_37074 = cljs.core.chunk_first.call(null,inst_37070);
var inst_37075 = cljs.core.chunk_rest.call(null,inst_37070);
var inst_37076 = cljs.core.count.call(null,inst_37074);
var inst_37057 = inst_37075;
var inst_37058 = inst_37074;
var inst_37059 = inst_37076;
var inst_37060 = (0);
var state_37197__$1 = (function (){var statearr_37223 = state_37197;
(statearr_37223[(7)] = inst_37059);

(statearr_37223[(8)] = inst_37057);

(statearr_37223[(9)] = inst_37060);

(statearr_37223[(10)] = inst_37058);

return statearr_37223;
})();
var statearr_37224_37302 = state_37197__$1;
(statearr_37224_37302[(2)] = null);

(statearr_37224_37302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (22))){
var inst_37113 = (state_37197[(23)]);
var inst_37118 = (state_37197[(24)]);
var inst_37114 = (state_37197[(25)]);
var inst_37110 = (state_37197[(19)]);
var inst_37113__$1 = (state_37197[(2)]);
var inst_37114__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37113__$1);
var inst_37115 = (function (){var all_files = inst_37110;
var res_SINGLEQUOTE_ = inst_37113__$1;
var res = inst_37114__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37113,inst_37118,inst_37114,inst_37110,inst_37113__$1,inst_37114__$1,state_val_37198,c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37039_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37039_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37113,inst_37118,inst_37114,inst_37110,inst_37113__$1,inst_37114__$1,state_val_37198,c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37116 = cljs.core.filter.call(null,inst_37115,inst_37113__$1);
var inst_37117 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37118__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37117);
var inst_37119 = cljs.core.not_empty.call(null,inst_37118__$1);
var state_37197__$1 = (function (){var statearr_37225 = state_37197;
(statearr_37225[(23)] = inst_37113__$1);

(statearr_37225[(24)] = inst_37118__$1);

(statearr_37225[(25)] = inst_37114__$1);

(statearr_37225[(26)] = inst_37116);

return statearr_37225;
})();
if(cljs.core.truth_(inst_37119)){
var statearr_37226_37303 = state_37197__$1;
(statearr_37226_37303[(1)] = (23));

} else {
var statearr_37227_37304 = state_37197__$1;
(statearr_37227_37304[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (36))){
var state_37197__$1 = state_37197;
var statearr_37228_37305 = state_37197__$1;
(statearr_37228_37305[(2)] = false);

(statearr_37228_37305[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (41))){
var inst_37172 = (state_37197[(20)]);
var inst_37176 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37177 = cljs.core.map.call(null,inst_37176,inst_37172);
var inst_37178 = cljs.core.pr_str.call(null,inst_37177);
var inst_37179 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37178)].join('');
var inst_37180 = figwheel.client.utils.log.call(null,inst_37179);
var state_37197__$1 = state_37197;
var statearr_37229_37306 = state_37197__$1;
(statearr_37229_37306[(2)] = inst_37180);

(statearr_37229_37306[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (43))){
var inst_37173 = (state_37197[(21)]);
var inst_37183 = (state_37197[(2)]);
var inst_37184 = cljs.core.not_empty.call(null,inst_37173);
var state_37197__$1 = (function (){var statearr_37230 = state_37197;
(statearr_37230[(27)] = inst_37183);

return statearr_37230;
})();
if(cljs.core.truth_(inst_37184)){
var statearr_37231_37307 = state_37197__$1;
(statearr_37231_37307[(1)] = (44));

} else {
var statearr_37232_37308 = state_37197__$1;
(statearr_37232_37308[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (29))){
var inst_37113 = (state_37197[(23)]);
var inst_37118 = (state_37197[(24)]);
var inst_37114 = (state_37197[(25)]);
var inst_37150 = (state_37197[(16)]);
var inst_37110 = (state_37197[(19)]);
var inst_37116 = (state_37197[(26)]);
var inst_37146 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37149 = (function (){var all_files = inst_37110;
var res_SINGLEQUOTE_ = inst_37113;
var res = inst_37114;
var files_not_loaded = inst_37116;
var dependencies_that_loaded = inst_37118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37113,inst_37118,inst_37114,inst_37150,inst_37110,inst_37116,inst_37146,state_val_37198,c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37148){
var map__37233 = p__37148;
var map__37233__$1 = ((((!((map__37233 == null)))?((((map__37233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37233):map__37233);
var namespace = cljs.core.get.call(null,map__37233__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37113,inst_37118,inst_37114,inst_37150,inst_37110,inst_37116,inst_37146,state_val_37198,c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37150__$1 = cljs.core.group_by.call(null,inst_37149,inst_37116);
var inst_37152 = (inst_37150__$1 == null);
var inst_37153 = cljs.core.not.call(null,inst_37152);
var state_37197__$1 = (function (){var statearr_37235 = state_37197;
(statearr_37235[(28)] = inst_37146);

(statearr_37235[(16)] = inst_37150__$1);

return statearr_37235;
})();
if(inst_37153){
var statearr_37236_37309 = state_37197__$1;
(statearr_37236_37309[(1)] = (32));

} else {
var statearr_37237_37310 = state_37197__$1;
(statearr_37237_37310[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (44))){
var inst_37173 = (state_37197[(21)]);
var inst_37186 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37173);
var inst_37187 = cljs.core.pr_str.call(null,inst_37186);
var inst_37188 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37187)].join('');
var inst_37189 = figwheel.client.utils.log.call(null,inst_37188);
var state_37197__$1 = state_37197;
var statearr_37238_37311 = state_37197__$1;
(statearr_37238_37311[(2)] = inst_37189);

(statearr_37238_37311[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (6))){
var inst_37091 = (state_37197[(2)]);
var state_37197__$1 = state_37197;
var statearr_37239_37312 = state_37197__$1;
(statearr_37239_37312[(2)] = inst_37091);

(statearr_37239_37312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (28))){
var inst_37116 = (state_37197[(26)]);
var inst_37143 = (state_37197[(2)]);
var inst_37144 = cljs.core.not_empty.call(null,inst_37116);
var state_37197__$1 = (function (){var statearr_37240 = state_37197;
(statearr_37240[(29)] = inst_37143);

return statearr_37240;
})();
if(cljs.core.truth_(inst_37144)){
var statearr_37241_37313 = state_37197__$1;
(statearr_37241_37313[(1)] = (29));

} else {
var statearr_37242_37314 = state_37197__$1;
(statearr_37242_37314[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (25))){
var inst_37114 = (state_37197[(25)]);
var inst_37130 = (state_37197[(2)]);
var inst_37131 = cljs.core.not_empty.call(null,inst_37114);
var state_37197__$1 = (function (){var statearr_37243 = state_37197;
(statearr_37243[(30)] = inst_37130);

return statearr_37243;
})();
if(cljs.core.truth_(inst_37131)){
var statearr_37244_37315 = state_37197__$1;
(statearr_37244_37315[(1)] = (26));

} else {
var statearr_37245_37316 = state_37197__$1;
(statearr_37245_37316[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (34))){
var inst_37166 = (state_37197[(2)]);
var state_37197__$1 = state_37197;
if(cljs.core.truth_(inst_37166)){
var statearr_37246_37317 = state_37197__$1;
(statearr_37246_37317[(1)] = (38));

} else {
var statearr_37247_37318 = state_37197__$1;
(statearr_37247_37318[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (17))){
var state_37197__$1 = state_37197;
var statearr_37248_37319 = state_37197__$1;
(statearr_37248_37319[(2)] = recompile_dependents);

(statearr_37248_37319[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (3))){
var state_37197__$1 = state_37197;
var statearr_37249_37320 = state_37197__$1;
(statearr_37249_37320[(2)] = null);

(statearr_37249_37320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (12))){
var inst_37087 = (state_37197[(2)]);
var state_37197__$1 = state_37197;
var statearr_37250_37321 = state_37197__$1;
(statearr_37250_37321[(2)] = inst_37087);

(statearr_37250_37321[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (2))){
var inst_37049 = (state_37197[(13)]);
var inst_37056 = cljs.core.seq.call(null,inst_37049);
var inst_37057 = inst_37056;
var inst_37058 = null;
var inst_37059 = (0);
var inst_37060 = (0);
var state_37197__$1 = (function (){var statearr_37251 = state_37197;
(statearr_37251[(7)] = inst_37059);

(statearr_37251[(8)] = inst_37057);

(statearr_37251[(9)] = inst_37060);

(statearr_37251[(10)] = inst_37058);

return statearr_37251;
})();
var statearr_37252_37322 = state_37197__$1;
(statearr_37252_37322[(2)] = null);

(statearr_37252_37322[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (23))){
var inst_37113 = (state_37197[(23)]);
var inst_37118 = (state_37197[(24)]);
var inst_37114 = (state_37197[(25)]);
var inst_37110 = (state_37197[(19)]);
var inst_37116 = (state_37197[(26)]);
var inst_37121 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37123 = (function (){var all_files = inst_37110;
var res_SINGLEQUOTE_ = inst_37113;
var res = inst_37114;
var files_not_loaded = inst_37116;
var dependencies_that_loaded = inst_37118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37113,inst_37118,inst_37114,inst_37110,inst_37116,inst_37121,state_val_37198,c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37122){
var map__37253 = p__37122;
var map__37253__$1 = ((((!((map__37253 == null)))?((((map__37253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37253):map__37253);
var request_url = cljs.core.get.call(null,map__37253__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37113,inst_37118,inst_37114,inst_37110,inst_37116,inst_37121,state_val_37198,c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37124 = cljs.core.reverse.call(null,inst_37118);
var inst_37125 = cljs.core.map.call(null,inst_37123,inst_37124);
var inst_37126 = cljs.core.pr_str.call(null,inst_37125);
var inst_37127 = figwheel.client.utils.log.call(null,inst_37126);
var state_37197__$1 = (function (){var statearr_37255 = state_37197;
(statearr_37255[(31)] = inst_37121);

return statearr_37255;
})();
var statearr_37256_37323 = state_37197__$1;
(statearr_37256_37323[(2)] = inst_37127);

(statearr_37256_37323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (35))){
var state_37197__$1 = state_37197;
var statearr_37257_37324 = state_37197__$1;
(statearr_37257_37324[(2)] = true);

(statearr_37257_37324[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (19))){
var inst_37100 = (state_37197[(12)]);
var inst_37106 = figwheel.client.file_reloading.expand_files.call(null,inst_37100);
var state_37197__$1 = state_37197;
var statearr_37258_37325 = state_37197__$1;
(statearr_37258_37325[(2)] = inst_37106);

(statearr_37258_37325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (11))){
var state_37197__$1 = state_37197;
var statearr_37259_37326 = state_37197__$1;
(statearr_37259_37326[(2)] = null);

(statearr_37259_37326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (9))){
var inst_37089 = (state_37197[(2)]);
var state_37197__$1 = state_37197;
var statearr_37260_37327 = state_37197__$1;
(statearr_37260_37327[(2)] = inst_37089);

(statearr_37260_37327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (5))){
var inst_37059 = (state_37197[(7)]);
var inst_37060 = (state_37197[(9)]);
var inst_37062 = (inst_37060 < inst_37059);
var inst_37063 = inst_37062;
var state_37197__$1 = state_37197;
if(cljs.core.truth_(inst_37063)){
var statearr_37261_37328 = state_37197__$1;
(statearr_37261_37328[(1)] = (7));

} else {
var statearr_37262_37329 = state_37197__$1;
(statearr_37262_37329[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (14))){
var inst_37070 = (state_37197[(22)]);
var inst_37079 = cljs.core.first.call(null,inst_37070);
var inst_37080 = figwheel.client.file_reloading.eval_body.call(null,inst_37079,opts);
var inst_37081 = cljs.core.next.call(null,inst_37070);
var inst_37057 = inst_37081;
var inst_37058 = null;
var inst_37059 = (0);
var inst_37060 = (0);
var state_37197__$1 = (function (){var statearr_37263 = state_37197;
(statearr_37263[(7)] = inst_37059);

(statearr_37263[(8)] = inst_37057);

(statearr_37263[(32)] = inst_37080);

(statearr_37263[(9)] = inst_37060);

(statearr_37263[(10)] = inst_37058);

return statearr_37263;
})();
var statearr_37264_37330 = state_37197__$1;
(statearr_37264_37330[(2)] = null);

(statearr_37264_37330[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (45))){
var state_37197__$1 = state_37197;
var statearr_37265_37331 = state_37197__$1;
(statearr_37265_37331[(2)] = null);

(statearr_37265_37331[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (26))){
var inst_37113 = (state_37197[(23)]);
var inst_37118 = (state_37197[(24)]);
var inst_37114 = (state_37197[(25)]);
var inst_37110 = (state_37197[(19)]);
var inst_37116 = (state_37197[(26)]);
var inst_37133 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37135 = (function (){var all_files = inst_37110;
var res_SINGLEQUOTE_ = inst_37113;
var res = inst_37114;
var files_not_loaded = inst_37116;
var dependencies_that_loaded = inst_37118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37113,inst_37118,inst_37114,inst_37110,inst_37116,inst_37133,state_val_37198,c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37134){
var map__37266 = p__37134;
var map__37266__$1 = ((((!((map__37266 == null)))?((((map__37266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37266):map__37266);
var namespace = cljs.core.get.call(null,map__37266__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37266__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37113,inst_37118,inst_37114,inst_37110,inst_37116,inst_37133,state_val_37198,c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37136 = cljs.core.map.call(null,inst_37135,inst_37114);
var inst_37137 = cljs.core.pr_str.call(null,inst_37136);
var inst_37138 = figwheel.client.utils.log.call(null,inst_37137);
var inst_37139 = (function (){var all_files = inst_37110;
var res_SINGLEQUOTE_ = inst_37113;
var res = inst_37114;
var files_not_loaded = inst_37116;
var dependencies_that_loaded = inst_37118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37113,inst_37118,inst_37114,inst_37110,inst_37116,inst_37133,inst_37135,inst_37136,inst_37137,inst_37138,state_val_37198,c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37113,inst_37118,inst_37114,inst_37110,inst_37116,inst_37133,inst_37135,inst_37136,inst_37137,inst_37138,state_val_37198,c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37140 = setTimeout(inst_37139,(10));
var state_37197__$1 = (function (){var statearr_37268 = state_37197;
(statearr_37268[(33)] = inst_37138);

(statearr_37268[(34)] = inst_37133);

return statearr_37268;
})();
var statearr_37269_37332 = state_37197__$1;
(statearr_37269_37332[(2)] = inst_37140);

(statearr_37269_37332[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (16))){
var state_37197__$1 = state_37197;
var statearr_37270_37333 = state_37197__$1;
(statearr_37270_37333[(2)] = reload_dependents);

(statearr_37270_37333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (38))){
var inst_37150 = (state_37197[(16)]);
var inst_37168 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37150);
var state_37197__$1 = state_37197;
var statearr_37271_37334 = state_37197__$1;
(statearr_37271_37334[(2)] = inst_37168);

(statearr_37271_37334[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (30))){
var state_37197__$1 = state_37197;
var statearr_37272_37335 = state_37197__$1;
(statearr_37272_37335[(2)] = null);

(statearr_37272_37335[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (10))){
var inst_37070 = (state_37197[(22)]);
var inst_37072 = cljs.core.chunked_seq_QMARK_.call(null,inst_37070);
var state_37197__$1 = state_37197;
if(inst_37072){
var statearr_37273_37336 = state_37197__$1;
(statearr_37273_37336[(1)] = (13));

} else {
var statearr_37274_37337 = state_37197__$1;
(statearr_37274_37337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (18))){
var inst_37104 = (state_37197[(2)]);
var state_37197__$1 = state_37197;
if(cljs.core.truth_(inst_37104)){
var statearr_37275_37338 = state_37197__$1;
(statearr_37275_37338[(1)] = (19));

} else {
var statearr_37276_37339 = state_37197__$1;
(statearr_37276_37339[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (42))){
var state_37197__$1 = state_37197;
var statearr_37277_37340 = state_37197__$1;
(statearr_37277_37340[(2)] = null);

(statearr_37277_37340[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (37))){
var inst_37163 = (state_37197[(2)]);
var state_37197__$1 = state_37197;
var statearr_37278_37341 = state_37197__$1;
(statearr_37278_37341[(2)] = inst_37163);

(statearr_37278_37341[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (8))){
var inst_37070 = (state_37197[(22)]);
var inst_37057 = (state_37197[(8)]);
var inst_37070__$1 = cljs.core.seq.call(null,inst_37057);
var state_37197__$1 = (function (){var statearr_37279 = state_37197;
(statearr_37279[(22)] = inst_37070__$1);

return statearr_37279;
})();
if(inst_37070__$1){
var statearr_37280_37342 = state_37197__$1;
(statearr_37280_37342[(1)] = (10));

} else {
var statearr_37281_37343 = state_37197__$1;
(statearr_37281_37343[(1)] = (11));

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
});})(c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33524__auto__,c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33525__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33525__auto____0 = (function (){
var statearr_37282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37282[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33525__auto__);

(statearr_37282[(1)] = (1));

return statearr_37282;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33525__auto____1 = (function (state_37197){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_37197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e37283){if((e37283 instanceof Object)){
var ex__33528__auto__ = e37283;
var statearr_37284_37344 = state_37197;
(statearr_37284_37344[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37345 = state_37197;
state_37197 = G__37345;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33525__auto__ = function(state_37197){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33525__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33525__auto____1.call(this,state_37197);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33525__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33525__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33614__auto__ = (function (){var statearr_37285 = f__33613__auto__.call(null);
(statearr_37285[(6)] = c__33612__auto__);

return statearr_37285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto__,map__37042,map__37042__$1,opts,before_jsload,on_jsload,reload_dependents,map__37043,map__37043__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33612__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37348,link){
var map__37349 = p__37348;
var map__37349__$1 = ((((!((map__37349 == null)))?((((map__37349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37349):map__37349);
var file = cljs.core.get.call(null,map__37349__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37349,map__37349__$1,file){
return (function (p1__37346_SHARP_,p2__37347_SHARP_){
if(cljs.core._EQ_.call(null,p1__37346_SHARP_,p2__37347_SHARP_)){
return p1__37346_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37349,map__37349__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37352){
var map__37353 = p__37352;
var map__37353__$1 = ((((!((map__37353 == null)))?((((map__37353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37353):map__37353);
var match_length = cljs.core.get.call(null,map__37353__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37353__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37351_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37351_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37355_SHARP_,p2__37356_SHARP_){
return cljs.core.assoc.call(null,p1__37355_SHARP_,cljs.core.get.call(null,p2__37356_SHARP_,key),p2__37356_SHARP_);
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
var loaded_f_datas_37357 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37357);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37357);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37358,p__37359){
var map__37360 = p__37358;
var map__37360__$1 = ((((!((map__37360 == null)))?((((map__37360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37360):map__37360);
var on_cssload = cljs.core.get.call(null,map__37360__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37361 = p__37359;
var map__37361__$1 = ((((!((map__37361 == null)))?((((map__37361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37361):map__37361);
var files_msg = map__37361__$1;
var files = cljs.core.get.call(null,map__37361__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1509845015526
