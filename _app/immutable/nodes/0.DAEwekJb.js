import { A as pop, C as first_child, a as rest_props, c as snippet, d as append, f as comment, j as push } from "../chunks/r8v3FEZp.js";
import "../chunks/N1gyZNZa.js";
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
