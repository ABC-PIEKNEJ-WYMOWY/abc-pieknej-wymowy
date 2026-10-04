import { B as pop, M as child, P as sibling, U as reset, V as push, a as rest_props, b as from_html, p as snippet, v as append } from "../chunks/Dn23lfvP.js";
import "../chunks/CDN_62Z6.js";
//#region source/routes/+layout.svelte
var root = from_html(`<div class="layout svelte-3zkj8s"><nav class="main-nav svelte-3zkj8s"><a href="/" class="svelte-3zkj8s">ABC pięknej wymowy</a> <ul class="svelte-3zkj8s"><li class="svelte-3zkj8s"><a href="/o-mnie" class="svelte-3zkj8s">O mnie</a></li> <li class="svelte-3zkj8s"><a href="/uslugi" class="svelte-3zkj8s">Usługi</a></li> <li class="svelte-3zkj8s"><a href="/nauka-czytania" class="svelte-3zkj8s">Nauka czytania</a></li> <li class="svelte-3zkj8s"><a href="/kontakt" class="svelte-3zkj8s">Kontakt</a></li> <li class="svelte-3zkj8s"><a href="/cennik" class="svelte-3zkj8s">Cennik</a></li></ul></nav> <!></div>`);
function _layout($$anchor, $$props) {
	push($$props, true);
	rest_props($$props, [
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	var div = root();
	snippet(sibling(child(div), 2), () => $$props.children);
	reset(div);
	append($$anchor, div);
	pop();
}
//#endregion
export { _layout as component };
