import { E as effect, b as from_html, d as head, j as $document, v as append } from "../chunks/Dn23lfvP.js";
import "../chunks/CDN_62Z6.js";
//#region source/routes/uslugi/+page.svelte
var root_1 = from_html(`<meta content="Usługi logopedyczne – zajęcia z nauki czytania, diagnozy logopedyczne, terapia wad wymowy, zajęcia ogólnorozwojowe." name="description"/>`);
var root = from_html(`<main class="svelte-vqe5z7"><section class="hero svelte-vqe5z7"><h1 class="svelte-vqe5z7">Usługi</h1></section> <section class="content svelte-vqe5z7"><ul class="svelte-vqe5z7"><li class="svelte-vqe5z7">Zajęcia z nauki czytania ze zrozumieniem</li> <li class="svelte-vqe5z7">Diagnozy logopedyczne</li> <li class="svelte-vqe5z7">Terapia dzieci z wadami wymowy, opóźnionym rozwojem mowy i
				seplenieniem</li> <li class="svelte-vqe5z7">Zajęcia ogólnorozwojowe grupowe i indywidualne</li> <li class="svelte-vqe5z7">Ćwiczenia motoryki małej i sprawności ręki</li></ul> <img alt="Zajęcia logopedyczne z dzieckiem" class="image svelte-vqe5z7" src="/images/uslugi-zajecia-logopedyczne.jpeg"/></section> <section class="cta svelte-vqe5z7"><h2 class="svelte-vqe5z7">Zapisz swoje dziecko</h2> <p>Skontaktuj się z nami, aby umówić się na bezpłatną konsultację i poznać
			szczegóły zajęć.</p> <a class="button svelte-vqe5z7" href="/kontakt">Skontaktuj się</a></section></main>`);
function _page($$anchor) {
	var main = root();
	head("vqe5z7", ($$anchor) => {
		var meta = root_1();
		effect(() => {
			$document.title = "Usługi | ABC pięknej wymowy";
		});
		append($$anchor, meta);
	});
	append($$anchor, main);
}
//#endregion
export { _page as component };
