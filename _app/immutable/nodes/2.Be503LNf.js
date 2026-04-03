import { E as child, F as push, L as next, O as sibling, P as pop, R as reset, S as template_effect, T as $document, a as rest_props, c as head, f as set_text, h as from_html, p as append, s as set_attribute, u as snippet, x as effect } from "../chunks/Om5-tcGe.js";
import "../chunks/N1gyZNZa.js";
//#region source/client/core/card/Card.svelte
var root$4 = from_html(`<section class="svelte-1hisrib"><div><h2> </h2><!></div></section>`);
function Card($$anchor, $$props) {
	push($$props, true);
	rest_props($$props, [
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	var section = root$4();
	var div = child(section);
	var h2 = child(div);
	var text = child(h2, true);
	reset(h2);
	snippet(sibling(h2), () => $$props.children);
	reset(div);
	reset(section);
	template_effect(() => {
		set_attribute(section, "id", $$props.id);
		set_text(text, $$props.title);
	});
	append($$anchor, section);
	pop();
}
//#endregion
//#region source/client/core/page-for-root/main/cards/about-me/AboutMeCard.svelte
var root_1$4 = from_html(`<p>Nazywam się Aleksandra Danylec. Jestem nauczycielką i logopedą. Ukończyłam
		studia na Uniwersytecie Gdańskim na kierunku Filologia Polska oraz
		Podyplomowe Studia na kierunku Logopedia, również na Uniwersytecie Gdańskim.</p><p>Pomagam dzieciom na każdym etapie rozwoju mowy. Uczę dzieci czytać,
		prowadzę zajęcia poprawiające sprawność manualną oraz zajęcia
		ogólnorozwojowe dla dzieci młodszych i starszych.</p><p>Dzięki indywidualnemu podejściu do każdego dziecka osiągam bardzo dobre
		efekty i mogę cieszyć się zadowoleniem moich klientów.</p>`, 1);
function AboutMeCard($$anchor) {
	Card($$anchor, {
		id: "o-mnie",
		title: "O mnie",
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root_1$4();
			next(2);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
}
//#endregion
//#region source/client/core/page-for-root/main/cards/contact/ContactCard.svelte
var root_1$3 = from_html(`<p>Preferowane zapisy telefoniczne lub SMS. Odpowiadam możliwie najszybciej.</p><p><a href="tel:+48504119112" class="svelte-1ei7iww">504 119 112</a></p>`, 1);
function ContactCard($$anchor) {
	Card($$anchor, {
		id: "kontakt",
		title: "Kontakt",
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root_1$3();
			next();
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
}
//#endregion
//#region source/client/core/page-for-root/main/cards/pricing/PricingCard.svelte
var root_1$2 = from_html(`<p>Cena jest dostosowywana indywidualnie w zależności od wieku, potrzeb i
		etapu rozwoju dziecka.</p>`);
function PricingCard($$anchor) {
	Card($$anchor, {
		id: "cennik",
		title: "Cennik",
		children: ($$anchor, $$slotProps) => {
			append($$anchor, root_1$2());
		},
		$$slots: { default: true }
	});
}
//#endregion
//#region source/client/core/page-for-root/main/cards/services/ServicesCard.svelte
var root_1$1 = from_html(`<ul><li>Zajęcia z nauki czytania ze zrozumieniem</li><li>Diagnozy logopedyczne</li><li>Terapia dzieci z wadami wymowy, opóźnionym rozwojem mowy i seplenieniem</li><li>Zajęcia ogólnorozwojowe grupowe i indywidualne</li><li>Ćwiczenia motoryki małej i sprawności ręki</li></ul>`);
function ServicesCard($$anchor) {
	Card($$anchor, {
		id: "uslugi",
		title: "Usługi",
		children: ($$anchor, $$slotProps) => {
			append($$anchor, root_1$1());
		},
		$$slots: { default: true }
	});
}
//#endregion
//#region source/client/core/page-for-root/main/header/HeaderOfMainOfPageOfRoot.svelte
var root$3 = from_html(`<header id="abc-pieknej-wymowy" class="svelte-wgnsv7"><h1>ABC pięknej wymowy – zajęcia ogólnorozwojowe dla dzieci</h1><p>Indywidualne podejście, profesjonalna diagnoza i zajęcia dopasowane do
		wieku oraz potrzeb dziecka.</p><p>Znajdziesz tutaj najważniejsze informacje o ofercie, zapisach i formie
		współpracy.</p><p><a href="#kontakt" class="svelte-wgnsv7">Umów się</a></p></header>`);
function HeaderOfMainOfPageOfRoot($$anchor) {
	append($$anchor, root$3());
}
//#endregion
//#region source/client/core/page-for-root/main/MainOfPageOfRoot.svelte
var root$2 = from_html(`<div class="svelte-pmahsl"><main><!><!><!><!><!></main></div>`);
function MainOfPageOfRoot($$anchor) {
	var div = root$2();
	var main = child(div);
	var node = child(main);
	HeaderOfMainOfPageOfRoot(node, {});
	var node_1 = sibling(node);
	AboutMeCard(node_1, {});
	var node_2 = sibling(node_1);
	ServicesCard(node_2, {});
	var node_3 = sibling(node_2);
	ContactCard(node_3, {});
	PricingCard(sibling(node_3), {});
	reset(main);
	reset(div);
	append($$anchor, div);
}
//#endregion
//#region source/client/core/page-for-root/nav/NavOfPageOfRoot.svelte
var root$1 = from_html(`<div class="svelte-121d5ud"><nav class="svelte-121d5ud"><a href="#abc-pieknej-wymowy" class="svelte-121d5ud">ABC pięknej wymowy</a><ul class="svelte-121d5ud"><li class="svelte-121d5ud"><a href="#o-mnie" class="svelte-121d5ud">O mnie</a></li><li class="svelte-121d5ud"><a href="#uslugi" class="svelte-121d5ud">Usługi</a></li><li class="svelte-121d5ud"><a href="#kontakt" class="svelte-121d5ud">Kontakt</a></li><li class="svelte-121d5ud"><a href="#cennik" class="svelte-121d5ud">Cennik</a></li></ul></nav></div>`);
function NavOfPageOfRoot($$anchor) {
	append($$anchor, root$1());
}
//#endregion
//#region source/client/core/page-for-root/PageForRoot.svelte
var root_1 = from_html(`<meta content="ABC pięknej wymowy – logopeda i nauczycielka Aleksandra Danylec." name="description"/>`);
var root = from_html(`<div class="svelte-ievkcv"><!><!></div>`);
function PageForRoot($$anchor) {
	var div = root();
	head("ievkcv", ($$anchor) => {
		var meta = root_1();
		effect(() => {
			$document.title = "ABC pięknej wymowy | Aleksandra Danylec";
		});
		append($$anchor, meta);
	});
	var node = child(div);
	NavOfPageOfRoot(node, {});
	MainOfPageOfRoot(sibling(node), {});
	reset(div);
	append($$anchor, div);
}
//#endregion
//#region source/routes/+page.svelte
function _page($$anchor) {
	PageForRoot($$anchor, {});
}
//#endregion
export { _page as component };
