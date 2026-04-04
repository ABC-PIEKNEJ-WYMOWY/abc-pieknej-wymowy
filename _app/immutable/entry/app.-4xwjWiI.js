const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_app/immutable/nodes/0.DMaFTBto.js","_app/immutable/chunks/DWMM-_IK.js","_app/immutable/chunks/3hvZFEVc.js","_app/immutable/nodes/1.Brl9xprw.js","_app/immutable/chunks/CNbdRLCk.js","_app/immutable/nodes/2.BTF83V23.js","_app/immutable/assets/2.KqANZTYR.css","_app/immutable/nodes/3.isSt96ZK.js","_app/immutable/assets/3.DuVCae7D.css"])))=>i.map(i=>d[i]);
import { A as child, C as tick, D as user_effect, E as template_effect, F as user_derived, H as reset, M as sibling, N as set, O as user_pre_effect, P as state, R as pop, _ as append, b as text, d as component, g as set_text, h as if_block, i as prop, j as first_child, n as onMount, o as bind_this, r as asClassComponent, v as comment, x as get, y as from_html, z as push } from "../chunks/DWMM-_IK.js";
import { t as __vitePreload } from "../chunks/C8I8W0M4.js";
import "../chunks/3hvZFEVc.js";
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
	() => __vitePreload(() => import("../nodes/0.DMaFTBto.js"), __vite__mapDeps([0,1,2])),
	() => __vitePreload(() => import("../nodes/1.Brl9xprw.js"), __vite__mapDeps([3,1,4,2])),
	() => __vitePreload(() => import("../nodes/2.BTF83V23.js"), __vite__mapDeps([5,1,2,6])),
	() => __vitePreload(() => import("../nodes/3.isSt96ZK.js"), __vite__mapDeps([7,1,2,8]))
];
var server_loads = [0];
var dictionary = {
	"/": [-3],
	"/table": [3]
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
