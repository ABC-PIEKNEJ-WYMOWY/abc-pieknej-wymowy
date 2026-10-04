const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_app/immutable/nodes/0.BIB6V1lP.js","_app/immutable/chunks/Dn23lfvP.js","_app/immutable/chunks/CDN_62Z6.js","_app/immutable/assets/0.6zffBlUP.css","_app/immutable/nodes/1.BoyhH1ZI.js","_app/immutable/chunks/DA0C3yhC.js","_app/immutable/nodes/2.T_uaVB6e.js","_app/immutable/assets/2.QBkY-_PO.css","_app/immutable/nodes/3.jgSwAlee.js","_app/immutable/assets/3.DGsYK1cf.css","_app/immutable/nodes/4.DU1WEpwF.js","_app/immutable/assets/4.BBdQ3csr.css","_app/immutable/nodes/5.CWJGLtoI.js","_app/immutable/assets/5.B0KASR-0.css","_app/immutable/nodes/6.DyNHTHr0.js","_app/immutable/assets/6.CSuiRnp4.css","_app/immutable/nodes/7.CFl3jRhu.js","_app/immutable/assets/7.C4fEGkXI.css","_app/immutable/nodes/8.Dstle2Gj.js","_app/immutable/assets/8.p-4XIb_s.css"])))=>i.map(i=>d[i]);
import { B as pop, D as template_effect, F as set, I as state, L as user_derived, M as child, N as first_child, O as user_effect, P as sibling, S as get, U as reset, V as push, _ as set_text, b as from_html, f as component, g as if_block, i as prop, k as user_pre_effect, n as onMount, o as bind_this, r as asClassComponent, v as append, w as tick, x as text, y as comment } from "../chunks/Dn23lfvP.js";
import { t as __vitePreload } from "../chunks/Bwn52ykm.js";
import "../chunks/CDN_62Z6.js";
//#region .svelte-kit/generated/client-optimized/matchers.js
var matchers = {};
//#endregion
//#region .svelte-kit/generated/root.svelte
var root_4 = from_html(`<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>`);
var root = from_html(`<!> <!>`, 1);
function Root($$anchor, $$props) {
	push($$props, true);
	let components = prop($$props, "components", 23, () => []), data_0 = prop($$props, "data_0", 3, null), data_1 = prop($$props, "data_1", 3, null);
	user_pre_effect(() => $$props.stores.page.set($$props.page));
	user_effect(() => {
		$$props.stores;
		$$props.page;
		$$props.constructors;
		components();
		$$props.form;
		data_0();
		data_1();
		$$props.stores.page.notify();
	});
	let mounted = state(false);
	let navigated = state(false);
	let title = state(null);
	onMount(() => {
		const unsubscribe = $$props.stores.page.subscribe(() => {
			if (get(mounted)) {
				set(navigated, true);
				tick().then(() => {
					set(title, document.title || "untitled page", true);
				});
			}
		});
		set(mounted, true);
		return unsubscribe;
	});
	const Pyramid_1 = user_derived(() => $$props.constructors[1]);
	var fragment = root();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		const Pyramid_0 = user_derived(() => $$props.constructors[0]);
		var fragment_1 = comment();
		component(first_child(fragment_1), () => get(Pyramid_0), ($$anchor, Pyramid_0_1) => {
			bind_this(Pyramid_0_1($$anchor, {
				get data() {
					return data_0();
				},
				get form() {
					return $$props.form;
				},
				get params() {
					return $$props.page.params;
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_2 = comment();
					component(first_child(fragment_2), () => get(Pyramid_1), ($$anchor, Pyramid_1_1) => {
						bind_this(Pyramid_1_1($$anchor, {
							get data() {
								return data_1();
							},
							get form() {
								return $$props.form;
							},
							get params() {
								return $$props.page.params;
							}
						}), ($$value) => components()[1] = $$value, () => components()?.[1]);
					});
					append($$anchor, fragment_2);
				},
				$$slots: { default: true }
			}), ($$value) => components()[0] = $$value, () => components()?.[0]);
		});
		append($$anchor, fragment_1);
	};
	var alternate = ($$anchor) => {
		const Pyramid_0 = user_derived(() => $$props.constructors[0]);
		var fragment_3 = comment();
		component(first_child(fragment_3), () => get(Pyramid_0), ($$anchor, Pyramid_0_2) => {
			bind_this(Pyramid_0_2($$anchor, {
				get data() {
					return data_0();
				},
				get form() {
					return $$props.form;
				},
				get params() {
					return $$props.page.params;
				}
			}), ($$value) => components()[0] = $$value, () => components()?.[0]);
		});
		append($$anchor, fragment_3);
	};
	if_block(node, ($$render) => {
		if ($$props.constructors[1]) $$render(consequent);
		else $$render(alternate, -1);
	});
	var node_4 = sibling(node, 2);
	var consequent_2 = ($$anchor) => {
		var div = root_4();
		var node_5 = child(div);
		var consequent_1 = ($$anchor) => {
			var text$1 = text();
			template_effect(() => set_text(text$1, get(title)));
			append($$anchor, text$1);
		};
		if_block(node_5, ($$render) => {
			if (get(navigated)) $$render(consequent_1);
		});
		reset(div);
		append($$anchor, div);
	};
	if_block(node_4, ($$render) => {
		if (get(mounted)) $$render(consequent_2);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region .svelte-kit/generated/root.js
var root_default = asClassComponent(Root);
//#endregion
//#region .svelte-kit/generated/client-optimized/app.js
var nodes = [
	() => __vitePreload(() => import("../nodes/0.BIB6V1lP.js"), __vite__mapDeps([0,1,2,3])),
	() => __vitePreload(() => import("../nodes/1.BoyhH1ZI.js"), __vite__mapDeps([4,1,5,2])),
	() => __vitePreload(() => import("../nodes/2.T_uaVB6e.js"), __vite__mapDeps([6,1,2,7])),
	() => __vitePreload(() => import("../nodes/3.jgSwAlee.js"), __vite__mapDeps([8,1,2,9])),
	() => __vitePreload(() => import("../nodes/4.DU1WEpwF.js"), __vite__mapDeps([10,1,2,11])),
	() => __vitePreload(() => import("../nodes/5.CWJGLtoI.js"), __vite__mapDeps([12,1,2,13])),
	() => __vitePreload(() => import("../nodes/6.DyNHTHr0.js"), __vite__mapDeps([14,1,2,15])),
	() => __vitePreload(() => import("../nodes/7.CFl3jRhu.js"), __vite__mapDeps([16,1,2,17])),
	() => __vitePreload(() => import("../nodes/8.Dstle2Gj.js"), __vite__mapDeps([18,1,2,19]))
];
var server_loads = [0];
var dictionary = {
	"/": [-3],
	"/cennik": [3],
	"/colors": [4],
	"/kontakt": [5],
	"/nauka-czytania": [6],
	"/o-mnie": [7],
	"/uslugi": [8]
};
var hooks = {
	handleError: (({ error }) => {
		console.error(error);
	}),
	init: void 0,
	reroute: (() => {}),
	transport: {}
};
var decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
var encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));
var hash = false;
var decode = (type, value) => decoders[type](value);
//#endregion
export { decode, decoders, dictionary, encoders, hash, hooks, matchers, nodes, root_default as root, server_loads };
