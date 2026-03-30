import { b as effect, f as append, m as from_html, s as head, w as $document } from "../chunks/K7iJ0g57.js";
import "../chunks/N1gyZNZa.js";
//#region source/client/core/page-for-root/PageForRoot.svelte
var root_1 = from_html(`<meta content="ABC pięknej wymowy — logopeda i nauczycielka Aleksandra Danylec." name="description"/>`);
var root = from_html(`<div class="svelte-ievkcv"><header id="top" class="svelte-ievkcv"><nav aria-label="Nawigacja główna" class="svelte-ievkcv"><a href="#top" class="svelte-ievkcv">ABC pięknej wymowy</a> <ul class="svelte-ievkcv"><li><a href="#o-mnie" class="svelte-ievkcv">O mnie</a></li> <li><a href="#uslugi" class="svelte-ievkcv">Usługi</a></li> <li><a href="#kontakt" class="svelte-ievkcv">Kontakt</a></li> <li><a href="#cennik" class="svelte-ievkcv">Cennik</a></li></ul></nav> <div id="hero-content" class="svelte-ievkcv"><p id="eyebrow" class="svelte-ievkcv">Nauczycielka i logopeda</p> <h1 class="svelte-ievkcv">ABC pięknej wymowy — wsparcie rozwoju mowy u dzieci</h1> <p class="svelte-ievkcv">Indywidualne podejście, profesjonalna diagnoza i zajęcia dopasowane do
				wieku oraz potrzeb dziecka.</p> <p class="svelte-ievkcv">Znajdziesz tutaj najważniejsze informacje o
				ofercie, zapisach i formie współpracy.</p> <a href="#kontakt" id="cta" class="svelte-ievkcv">Umów kontakt</a></div></header> <main class="svelte-ievkcv"><section id="o-mnie" class="svelte-ievkcv"><h2 class="svelte-ievkcv">O mnie</h2> <p class="svelte-ievkcv">Nazywam się Aleksandra Danylec. Jestem nauczycielką i logopedą.
				Ukończyłam studia na Uniwersytecie Gdańskim na kierunku Filologia Polska
				oraz Podyplomowe Studia na kierunku Logopedia, również na Uniwersytecie
				Gdańskim.</p> <p class="svelte-ievkcv">Pomagam dzieciom na każdym etapie rozwoju mowy. Uczę dzieci czytać,
				prowadzę zajęcia poprawiające sprawność manualną oraz zajęcia
				ogólnorozwojowe dla dzieci młodszych i starszych.</p> <p class="svelte-ievkcv">Dzięki indywidualnemu podejściu do każdego dziecka osiągam bardzo dobre
				efekty i mogę cieszyć się zadowoleniem moich klientów.</p></section> <section id="uslugi" class="svelte-ievkcv"><h2 class="svelte-ievkcv">Usługi</h2> <ul class="svelte-ievkcv"><li class="svelte-ievkcv">Zajęcia z nauki czytania ze zrozumieniem</li> <li class="svelte-ievkcv">Diagnozy logopedyczne</li> <li class="svelte-ievkcv">Terapia dzieci z wadami wymowy, opóźnionym rozwojem mowy i
					seplenieniem</li> <li class="svelte-ievkcv">Zajęcia ogólnorozwojowe grupowe i indywidualne</li> <li class="svelte-ievkcv">Ćwiczenia motoryki małej i sprawności ręki</li></ul></section> <section id="kontakt" class="svelte-ievkcv"><h2 class="svelte-ievkcv">Kontakt</h2> <p class="svelte-ievkcv">Preferowane zapisy telefoniczne lub SMS. Odpowiadam możliwie
				najszybciej.</p> <a aria-label="Zadzwoń pod numer 504 119 112" href="tel:+48504119112" class="svelte-ievkcv">504 119 112</a></section> <section id="cennik" class="svelte-ievkcv"><h2 class="svelte-ievkcv">Cennik</h2> <p class="svelte-ievkcv">Cena jest dostosowywana indywidualnie w zależności od wieku, potrzeb i
				etapu rozwoju dziecka.</p></section></main></div>`);
function PageForRoot($$anchor) {
	var div = root();
	head("ievkcv", ($$anchor) => {
		var meta = root_1();
		effect(() => {
			$document.title = "ABC pięknej wymowy | Aleksandra Danylec";
		});
		append($$anchor, meta);
	});
	append($$anchor, div);
}
//#endregion
//#region source/routes/+page.svelte
function _page($$anchor) {
	PageForRoot($$anchor, {});
}
//#endregion
export { _page as component };
