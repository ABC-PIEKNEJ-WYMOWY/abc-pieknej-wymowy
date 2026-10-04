import { E as effect, b as from_html, d as head, j as $document, v as append } from "../chunks/Dn23lfvP.js";
import "../chunks/CDN_62Z6.js";
//#region source/routes/o-mnie/+page.svelte
var root_1 = from_html(`<meta content="O mnie – Aleksandra Danylec, logopeda i nauczycielka. Pomagam dzieciom na każdym etapie rozwoju mowy." name="description"/>`);
var root = from_html(`<main class="svelte-11f8kxh"><section class="hero svelte-11f8kxh"><h1 class="svelte-11f8kxh">O mnie</h1></section> <section class="content svelte-11f8kxh"><p>Nazywam się Aleksandra Danylec. Jestem nauczycielką i logopedą. Ukończyłam
			studia na Uniwersytecie Gdańskim na kierunku Filologia Polska oraz
			Podyplomowe Studia na kierunku Logopedia, również na Uniwersytecie
			Gdańskim.</p> <p>Pomagam dzieciom na każdym etapie rozwoju mowy. Uczę dzieci czytać,
			prowadzę zajęcia poprawiające sprawność manualną oraz zajęcia
			ogólnorozwojowe dla dzieci młodszych i starszych.</p> <p>Dzięki indywidualnemu podejściu do każdego dziecka osiągam bardzo dobre
			efekty i mogę cieszyć się zadowoleniem moich klientów.</p></section> <section class="cta svelte-11f8kxh"><h2 class="svelte-11f8kxh">Zapisz swoje dziecko</h2> <p>Skontaktuj się z nami, aby umówić się na bezpłatną konsultację i poznać
			szczegóły zajęć.</p> <a class="button svelte-11f8kxh" href="/kontakt">Skontaktuj się</a></section></main>`);
function _page($$anchor) {
	var main = root();
	head("11f8kxh", ($$anchor) => {
		var meta = root_1();
		effect(() => {
			$document.title = "O mnie | ABC pięknej wymowy";
		});
		append($$anchor, meta);
	});
	append($$anchor, main);
}
//#endregion
export { _page as component };
