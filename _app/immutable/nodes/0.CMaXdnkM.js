import { D as first_child, F as push, P as pop, a as rest_props, m as comment, p as append, u as snippet } from "../chunks/Om5-tcGe.js";
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
