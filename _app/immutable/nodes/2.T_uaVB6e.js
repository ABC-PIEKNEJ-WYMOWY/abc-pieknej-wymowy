import { E as effect, M as child, U as reset, b as from_html, d as head, j as $document, v as append } from "../chunks/Dn23lfvP.js";
import "../chunks/CDN_62Z6.js";
//#region source/client/core/page-for-root/main/header/HeaderOfMainOfPageOfRoot.svelte
var root$2 = from_html(`<header id="abc-pieknej-wymowy" class="svelte-wgnsv7"><h1 class="svelte-wgnsv7">ABC pięknej wymowy – zajęcia ogólnorozwojowe dla dzieci</h1><p>Indywidualne podejście, profesjonalna diagnoza i zajęcia dopasowane do
		wieku oraz potrzeb dziecka.</p><p>Znajdziesz tutaj najważniejsze informacje o ofercie, zapisach i formie
		współpracy.</p><nav class="hero-nav svelte-wgnsv7"><a href="/o-mnie" class="svelte-wgnsv7">O mnie</a><a href="/uslugi" class="svelte-wgnsv7">Usługi</a><a href="/nauka-czytania" class="svelte-wgnsv7">Nauka czytania</a><a href="/kontakt" class="svelte-wgnsv7">Kontakt</a><a href="/cennik" class="svelte-wgnsv7">Cennik</a></nav></header>`);
function HeaderOfMainOfPageOfRoot($$anchor) {
	append($$anchor, root$2());
}
//#endregion
//#region source/client/core/page-for-root/main/MainOfPageOfRoot.svelte
var root$1 = from_html(`<div class="svelte-pmahsl"><main><!></main></div>`);
function MainOfPageOfRoot($$anchor) {
	var div = root$1();
	var main = child(div);
	HeaderOfMainOfPageOfRoot(child(main), {});
	reset(main);
	reset(div);
	append($$anchor, div);
}
//#endregion
//#region source/client/core/page-for-root/PageForRoot.svelte
var root_1 = from_html(`<meta content="ABC pięknej wymowy – logopeda i nauczycielka Aleksandra Danylec." name="description"/>`);
var root = from_html(`<div class="svelte-ievkcv"><!></div>`);
function PageForRoot($$anchor) {
	var div = root();
	head("ievkcv", ($$anchor) => {
		var meta = root_1();
		effect(() => {
			$document.title = "ABC pięknej wymowy | Aleksandra Danylec";
		});
		append($$anchor, meta);
	});
	MainOfPageOfRoot(child(div), {});
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
