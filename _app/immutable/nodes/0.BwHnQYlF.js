import { E as first_child, N as pop, P as push, a as rest_props, f as append, l as snippet, p as comment } from "../chunks/K7iJ0g57.js";
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
