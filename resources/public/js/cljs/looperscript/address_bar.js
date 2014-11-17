// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.looperscript.address_bar');
goog.require('cljs.core');
goog.require('domina');
goog.require('domina');
cljs.looperscript.address_bar.default_loop_text = "part 1\ntime 30/240 2 3 1 2 1\nsound k 0 s 3.14\n  volume 1 0.3 0.3";
cljs.looperscript.address_bar.put_text_in_get = (function put_text_in_get(s){var preface = ((document["location"])["pathname"]);return history.pushState((new Object()),"",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(preface)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
cljs.looperscript.address_bar.text__GT_link = (function text__GT_link(){var text = escape(btoa(domina.value.call(null,domina.by_id.call(null,"looper-text"))));return cljs.looperscript.address_bar.put_text_in_get.call(null,("?loop="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)));
});
cljs.looperscript.address_bar.get_text_from_get = (function get_text_from_get(){var t = cljs.core.last.call(null,cljs.core.re_find.call(null,/^\?loop=([\s\S]*)/,((document["location"])["search"])));if(cljs.core.truth_(t))
{return atob(unescape(t));
} else
{return null;
}
});
cljs.looperscript.address_bar.set_loop_text = (function set_loop_text(s){return domina.set_value_BANG_.call(null,domina.by_id.call(null,"looper-text"),s);
});
cljs.looperscript.address_bar.load_link__GT_text = (function load_link__GT_text(default$){var get_text = cljs.looperscript.address_bar.get_text_from_get.call(null);var loop_text = (function (){var or__3640__auto__ = get_text;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return default$;
}
})();return cljs.looperscript.address_bar.set_loop_text.call(null,loop_text);
});
cljs.looperscript.address_bar.load_link__GT_text.call(null,cljs.looperscript.address_bar.default_loop_text);
