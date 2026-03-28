import { d as append, p as from_html } from "../chunks/r8v3FEZp.js";
import "../chunks/N1gyZNZa.js";
//#region source/client/core/page-for-root/PageForRoot.svelte
var root = from_html(`<h1>ABC Pięknej Wymowy</h1>`);
function PageForRoot($$anchor) {
	append($$anchor, root());
}
//#endregion
//#region source/routes/+page.svelte
function _page($$anchor) {
	PageForRoot($$anchor, {});
}
//#endregion
export { _page as component };
