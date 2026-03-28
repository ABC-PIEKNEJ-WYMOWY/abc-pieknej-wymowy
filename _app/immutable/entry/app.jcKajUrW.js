const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_app/immutable/nodes/0.DAEwekJb.js","_app/immutable/chunks/r8v3FEZp.js","_app/immutable/chunks/N1gyZNZa.js","_app/immutable/nodes/1.CAmIBtuM.js","_app/immutable/chunks/Bow1qg0i.js","_app/immutable/nodes/2.Vtn8-nL1.js"])))=>i.map(i=>d[i]);
import { A as pop, C as first_child, D as user_derived, E as state, N as reset, S as child, T as set, _ as tick, b as user_effect, d as append, f as comment, h as get, i as prop, j as push, l as if_block, m as text, n as onMount, o as bind_this, p as from_html, r as asClassComponent, s as component, u as set_text, w as sibling, x as user_pre_effect, y as template_effect } from "../chunks/r8v3FEZp.js";
import { t as __vitePreload } from "../chunks/BMXfM6Mf.js";
import "../chunks/N1gyZNZa.js";
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
	() => __vitePreload(() => import("../nodes/0.DAEwekJb.js"), __vite__mapDeps([0,1,2])),
	() => __vitePreload(() => import("../nodes/1.CAmIBtuM.js"), __vite__mapDeps([3,1,4,2])),
	() => __vitePreload(() => import("../nodes/2.Vtn8-nL1.js"), __vite__mapDeps([5,1,2]))
];
var server_loads = [0];
var dictionary = { "/": [-3] };
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
