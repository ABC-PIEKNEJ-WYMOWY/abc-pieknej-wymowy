import { A as child, D as user_effect, E as template_effect, F as user_derived, H as reset, M as sibling, N as set, P as state, R as pop, _ as append, c as remove_input_defaults, g as set_text, l as set_attribute, m as index, p as each, s as bind_value, x as get, y as from_html, z as push } from "../chunks/DWMM-_IK.js";
import "../chunks/3hvZFEVc.js";
//#region source/routes/table/+page.svelte
var root_2 = from_html(`<th class="svelte-1werhze"> </th>`);
var root_4 = from_html(`<td class="svelte-1werhze"><span class="svelte-1werhze"> </span></td>`);
var root_3 = from_html(`<tr><th class="svelte-1werhze"> </th><!></tr>`);
var root_1 = from_html(`<article class="svelte-1werhze"><header><h2 class="svelte-1werhze"> </h2> <p class="svelte-1werhze"> </p></header> <div class="svelte-1werhze"><table class="svelte-1werhze"><thead class="svelte-1werhze"><tr><th class="svelte-1werhze">L \\ C</th><!></tr></thead><tbody class="svelte-1werhze"></tbody></table></div></article>`);
var root = from_html(`<main class="svelte-1werhze"><section id="controls" class="svelte-1werhze"><label class="svelte-1werhze"><span> </span> <input max="24" min="1" step="1" type="range"/></label> <label class="svelte-1werhze"><span> </span> <input max="359" min="0" step="1" type="range"/></label> <label class="svelte-1werhze"><span> </span> <input max="24" min="2" step="1" type="range"/></label> <label class="svelte-1werhze"><span> </span> <input max="24" min="2" step="1" type="range"/></label></section> <section id="tables-grid" class="svelte-1werhze"></section></main>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const minimumLightness = 0;
	const maximumLightness = 1;
	const minimumChroma = 0;
	const maximumChroma = .161;
	let tablesCount = state(6);
	let firstHue = state(0);
	let lightnessCount = state(8);
	let chromaCount = state(9);
	const lightnessValues = user_derived(() => {
		if (get(lightnessCount) === 1) return [Number(maximumLightness.toFixed(3))];
		const step = (maximumLightness - minimumLightness) / (get(lightnessCount) - 1);
		return Array.from({ length: get(lightnessCount) }, (_, index) => {
			const value = maximumLightness - index * step;
			return Number(value.toFixed(3));
		});
	});
	const chromaValues = user_derived(() => {
		if (get(chromaCount) === 1) return [Number(maximumChroma.toFixed(3))];
		const step = (maximumChroma - minimumChroma) / (get(chromaCount) - 1);
		return Array.from({ length: get(chromaCount) }, (_, index) => {
			const value = minimumChroma + index * step;
			return Number(value.toFixed(3));
		});
	});
	const tableHues = user_derived(() => {
		const hueStep = 360 / get(tablesCount);
		return Array.from({ length: get(tablesCount) }, (_, index) => {
			const hue = (get(firstHue) + index * hueStep) % 360;
			return Number(hue.toFixed(2));
		});
	});
	user_effect(() => {
		if (get(tableHues).length + get(lightnessValues).length + get(chromaValues).length < 1 || typeof document === `undefined`) return;
		document.querySelectorAll(`td[data-lightness][data-chroma][data-hue]`).forEach((tableCell) => {
			const lightness = Number(tableCell.dataset[`lightness`]);
			const chroma = Number(tableCell.dataset[`chroma`]);
			const hue = Number(tableCell.dataset[`hue`]);
			const { style: styleOfTableCell } = tableCell;
			styleOfTableCell.backgroundColor = `oklch(${(lightness * 100).toFixed(2)}% ${chroma.toFixed(3)} ${hue.toFixed(2)})`;
			styleOfTableCell.color = lightness >= .62 ? `#111` : `#fafafa`;
		});
	});
	var main = root();
	var section = child(main);
	var label = child(section);
	var span = child(label);
	var text = child(span);
	reset(span);
	var input = sibling(span, 2);
	remove_input_defaults(input);
	reset(label);
	var label_1 = sibling(label, 2);
	var span_1 = child(label_1);
	var text_1 = child(span_1);
	reset(span_1);
	var input_1 = sibling(span_1, 2);
	remove_input_defaults(input_1);
	reset(label_1);
	var label_2 = sibling(label_1, 2);
	var span_2 = child(label_2);
	var text_2 = child(span_2);
	reset(span_2);
	var input_2 = sibling(span_2, 2);
	remove_input_defaults(input_2);
	reset(label_2);
	var label_3 = sibling(label_2, 2);
	var span_3 = child(label_3);
	var text_3 = child(span_3);
	reset(span_3);
	var input_3 = sibling(span_3, 2);
	remove_input_defaults(input_3);
	reset(label_3);
	reset(section);
	var section_1 = sibling(section, 2);
	each(section_1, 21, () => get(tableHues), index, ($$anchor, hue, index) => {
		var article = root_1();
		var header = child(article);
		var h2 = child(header);
		var text_4 = child(h2);
		reset(h2);
		var p = sibling(h2, 2);
		var text_5 = child(p);
		reset(p);
		reset(header);
		var div = sibling(header, 2);
		var table = child(div);
		var thead = child(table);
		var tr = child(thead);
		each(sibling(child(tr)), 16, () => get(chromaValues), (chroma) => chroma, ($$anchor, chroma) => {
			var th = root_2();
			var text_6 = child(th, true);
			reset(th);
			template_effect(($0) => set_text(text_6, $0), [() => Number(chroma.toFixed(2)).toString()]);
			append($$anchor, th);
		});
		reset(tr);
		reset(thead);
		var tbody = sibling(thead);
		each(tbody, 20, () => get(lightnessValues), (lightness) => lightness, ($$anchor, lightness) => {
			var tr_1 = root_3();
			var th_1 = child(tr_1);
			var text_7 = child(th_1, true);
			reset(th_1);
			each(sibling(th_1), 16, () => get(chromaValues), (chroma) => chroma, ($$anchor, chroma) => {
				var td = root_4();
				var span_4 = child(td);
				var text_8 = child(span_4);
				reset(span_4);
				reset(td);
				template_effect(($0, $1, $2, $3, $4) => {
					set_attribute(td, "data-chroma", $0);
					set_attribute(td, "data-hue", $1);
					set_attribute(td, "data-lightness", $2);
					set_text(text_8, `${$3 ?? ""}, ${$4 ?? ""}`);
				}, [
					() => chroma.toFixed(3),
					() => get(hue).toFixed(2),
					() => lightness.toFixed(3),
					() => Number(lightness.toFixed(2)).toString(),
					() => Number(chroma.toFixed(2)).toString()
				]);
				append($$anchor, td);
			});
			reset(tr_1);
			template_effect(($0) => set_text(text_7, $0), [() => Number(lightness.toFixed(2)).toString()]);
			append($$anchor, tr_1);
		});
		reset(tbody);
		reset(table);
		reset(div);
		reset(article);
		template_effect(($0) => {
			set_text(text_4, `Hue ${$0 ?? ""}°`);
			set_text(text_5, `Table ${index + 1} / ${get(tablesCount) ?? ""}`);
		}, [() => get(hue).toFixed(1)]);
		append($$anchor, article);
	});
	reset(section_1);
	reset(main);
	template_effect(($0) => {
		set_text(text, `Tables: ${get(tablesCount) ?? ""}`);
		set_text(text_1, `First hue: ${$0 ?? ""}°`);
		set_text(text_2, `Lightness colors: ${get(lightnessCount) ?? ""}`);
		set_text(text_3, `Chroma colors: ${get(chromaCount) ?? ""}`);
	}, [() => get(firstHue).toFixed(0)]);
	bind_value(input, () => get(tablesCount), ($$value) => set(tablesCount, $$value));
	bind_value(input_1, () => get(firstHue), ($$value) => set(firstHue, $$value));
	bind_value(input_2, () => get(lightnessCount), ($$value) => set(lightnessCount, $$value));
	bind_value(input_3, () => get(chromaCount), ($$value) => set(chromaCount, $$value));
	append($$anchor, main);
	pop();
}
//#endregion
export { _page as component };
