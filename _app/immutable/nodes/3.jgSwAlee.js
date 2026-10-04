import { E as effect, b as from_html, d as head, j as $document, v as append } from "../chunks/Dn23lfvP.js";
import "../chunks/CDN_62Z6.js";
//#region source/routes/cennik/+page.svelte
var root_1 = from_html(`<meta content="Cennik – cena zajęć dostosowywana indywidualnie w zależności od wieku, potrzeb i etapu rozwoju dziecka." name="description"/>`);
var root = from_html(`<main class="svelte-h3s0m8"><section class="hero svelte-h3s0m8"><h1 class="svelte-h3s0m8">Cennik</h1></section> <section class="content svelte-h3s0m8"><p>Cena jest dostosowywana indywidualnie w zależności od wieku, potrzeb i
			etapu rozwoju dziecka.</p></section> <section class="cta svelte-h3s0m8"><h2 class="svelte-h3s0m8">Zapytaj o cenę</h2> <p>Skontaktuj się z nami, aby poznać szczegóły cenowe i umówić się na
			bezpłatną konsultację.</p> <a class="button svelte-h3s0m8" href="/kontakt">Skontaktuj się</a></section></main>`);
function _page($$anchor) {
	var main = root();
	head("h3s0m8", ($$anchor) => {
		var meta = root_1();
		effect(() => {
			$document.title = "Cennik | ABC pięknej wymowy";
		});
		append($$anchor, meta);
	});
	append($$anchor, main);
}
//#endregion
export { _page as component };
