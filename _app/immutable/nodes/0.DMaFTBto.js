import { R as pop, _ as append, a as rest_props, f as snippet, j as first_child, v as comment, z as push } from "../chunks/DWMM-_IK.js";
import "../chunks/3hvZFEVc.js";
//#region source/routes/+layout.svelte
function _layout($$anchor, $$props) {
	push($$props, true);
	rest_props($$props, [
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	var fragment = comment();
	snippet(first_child(fragment), () => $$props.children);
	append($$anchor, fragment);
	pop();
}
//#endregion
export { _layout as component };
