import { E as effect, b as from_html, d as head, j as $document, v as append } from "../chunks/Dn23lfvP.js";
import "../chunks/CDN_62Z6.js";
//#region source/routes/kontakt/+page.svelte
var root_1 = from_html(`<meta content="Kontakt – zapisy telefoniczne lub SMS. 504 119 112. Odpowiadam możliwie najszybciej." name="description"/>`);
var root = from_html(`<main class="svelte-1vixm1i"><section class="hero svelte-1vixm1i"><h1 class="svelte-1vixm1i">Kontakt</h1></section> <section class="content svelte-1vixm1i"><p>Preferowane zapisy telefoniczne lub SMS. Odpowiadam możliwie najszybciej.</p> <p><a class="button svelte-1vixm1i" href="tel:+48504119112">504 119 112</a></p></section></main>`);
function _page($$anchor) {
	var main = root();
	head("1vixm1i", ($$anchor) => {
		var meta = root_1();
		effect(() => {
			$document.title = "Kontakt | ABC pięknej wymowy";
		});
		append($$anchor, meta);
	});
	append($$anchor, main);
}
//#endregion
export { _page as component };
