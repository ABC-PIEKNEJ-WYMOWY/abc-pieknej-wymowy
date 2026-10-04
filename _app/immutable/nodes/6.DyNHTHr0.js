import { E as effect, b as from_html, d as head, j as $document, v as append } from "../chunks/Dn23lfvP.js";
import "../chunks/CDN_62Z6.js";
//#region source/routes/nauka-czytania/+page.svelte
var root_1 = from_html(`<meta content="Zajęcia z nauki czytania dla dzieci od 3 roku życia. Nauka czytania i pisania w formie zabaj." name="description"/>`);
var root = from_html(`<main class="svelte-1q6x9wu"><section class="hero svelte-1q6x9wu"><h1 class="svelte-1q6x9wu">Zajęcia z nauki czytania</h1> <p class="lead svelte-1q6x9wu">Naukę czytania warto rozpocząć jak najwcześniej, zanim dziecko odkryje, że
			czytanie jest trudną sztuką. Dziecko 4-5 letnie naturalnie przyswaja proces
			nauki liter i czytania, gdy wiedza jest przekazana w jasny i kluczowy
			sposób, najlepiej w formie zabawy.</p></section> <section class="info svelte-1q6x9wu"><h2 class="svelte-1q6x9wu">Dla kogo?</h2> <p>W ABC pięknej wymowy prowadzimy zajęcia z nauki czytania i pisania dla dzieci
			już od 3 roku życia. Pomagamy również dzieciom starszym, w wieku
			przedszkolnym, uczęszczającym do zerówki, wczesnoszkolnym oraz w klasach
			4-7.</p> <img alt="Dziecko uczące się liter w formie zabawy" class="image svelte-1q6x9wu" src="/images/nauka-czytania-dziecko-uczy-sie-liter.png"/></section> <section class="benefits svelte-1q6x9wu"><h2 class="svelte-1q6x9wu">Dlaczego warto?</h2> <ul class="svelte-1q6x9wu"><li class="svelte-1q6x9wu"><strong>Wczesna nauka czytania</strong> – im wcześniej zaczniemy, tym
				łatwiej dziecko przyswoi umiejętność czytania.</li> <li class="svelte-1q6x9wu"><strong>Nauka przez zabawę</strong> – dzieci uczą się najlepiej, gdy
				proces nauki jest przyjemny i angażujący.</li> <li class="svelte-1q6x9wu"><strong>Indywidualne podejście</strong> – każde dziecko ma swój
				tempa nauki, dlatego dostosowujemy metody do potrzeb ucznia.</li> <li class="svelte-1q6x9wu"><strong>Kompleksowa nauka</strong> – łączymy naukę czytania, pisania
				oraz prawidłowej wymowy.</li></ul> <img alt="Zajęcia logopedyczne z dzieckiem" class="image svelte-1q6x9wu" src="/images/nauka-czytania-zajecia-logopedyczne.png"/></section> <section class="ages svelte-1q6x9wu"><h2 class="svelte-1q6x9wu">Grupy wiekowe</h2> <div class="age-grid svelte-1q6x9wu"><div class="age-card svelte-1q6x9wu"><h3 class="svelte-1q6x9wu">3-4 lata</h3> <p>Pierwsze kroki w świecie liter. Poznawanie liter przez zabawę,
					rysowanie, kolorowanie i gry słuchowe.</p></div> <div class="age-card svelte-1q6x9wu"><h3 class="svelte-1q6x9wu">5-7 lat</h3> <p>Nauka czytania i pisania, rozwijanie umiejętności, przygotowanie do
					szkoły.</p></div></div> <img alt="Grupa dzieci uczących się czytania" class="image svelte-1q6x9wu" src="/images/nauka-czytania-grupa-dzieci.jpeg"/></section> <section class="cta svelte-1q6x9wu"><h2 class="svelte-1q6x9wu">Zapisz swoje dziecko</h2> <p>Skontaktuj się z nami, aby umówić się na bezpłatną konsultację i poznać
			szczegóły zajęć.</p> <a class="button svelte-1q6x9wu" href="/kontakt">Skontaktuj się</a></section></main>`);
function _page($$anchor) {
	var main = root();
	head("1q6x9wu", ($$anchor) => {
		var meta = root_1();
		effect(() => {
			$document.title = "Zajęcia z nauki czytania | ABC pięknej wymowy";
		});
		append($$anchor, meta);
	});
	append($$anchor, main);
}
//#endregion
export { _page as component };
