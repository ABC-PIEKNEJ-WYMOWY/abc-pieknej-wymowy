<script lang="ts">
	import {inGamut, type Oklch} from "culori";
	const minimumLightness: number = 0;
	const maximumLightness: number = 1;
	const minimumChroma: number = 0;
	const maximumChroma: number = 0.37;
	let countofLevelsOfHue: number = $state(1);
	let firstHue: number = $state(0);
	let countofLevelOfLightness: number = $state(8);
	let countOfLevelsOfChroma: number = $state(9);
	let tablesCount: number = $state(1);
	let lightnessCount: number = $state(8);
	let chromaCount: number = $state(9);
	type LightnessSliceOfHueSliceOfSpectum = readonly (null | Oklch)[];
	type HueSliceOfSpectrum = readonly LightnessSliceOfHueSliceOfSpectum[];
	type Spectrum = readonly HueSliceOfSpectrum[];
	function computeLightnessSliceOfHueSliceOfSpectrum(
		hue: number,
		lightness: number,
		
	): LightnessSliceOfHueSliceOfSpectum {
		
	}
		

	const lightnessValues: number[] = $derived.by(() => {
		if (lightnessCount === 1) {
			return [Number(maximumLightness.toFixed(3))];
		}
		const step: number =
			(maximumLightness - minimumLightness) / (lightnessCount - 1);
		return Array.from({length: lightnessCount}, (_, index: number) => {
			const value: number = maximumLightness - index * step;
			return Number(value.toFixed(3));
		}).toReversed();
	});

	const chromaValues: number[] = $derived.by(() => {
		if (chromaCount === 1) {
			return [Number(maximumChroma.toFixed(3))];
		}
		const step: number = (maximumChroma - minimumChroma) / (chromaCount - 1);
		return Array.from({length: chromaCount}, (_, index: number) => {
			const value: number = minimumChroma + index * step;
			return Number(value.toFixed(3));
		});
	});

	const tableHues: number[] = $derived.by(() => {
		const hueStep: number = 360 / tablesCount;
		return Array.from({length: tablesCount}, (_, index: number) => {
			const hue: number = (firstHue + index * hueStep) % 360;
			return Number(hue.toFixed(2));
		});
	});
	const namesOfGamuts = [`p3`, `rgb`, `a98`, `rec2020`] as const;
	function checkIfColorIsDisplayableInSomeGamut(color: Oklch): boolean {
		return namesOfGamuts.some(function (gamut): boolean {
			return inGamut(gamut)(color);
		});
	}
	function checkIfColorAndVariableIsDisplayableInSomeGamut(
		color: Oklch,
		countOfHues: number,
	): boolean {
		const deltaOfHue = 360 / countOfHues;
		const hueOfColor: number = color.h ?? 0;
		for (
			let indexOfHue = 0;
			indexOfHue < countOfHues;
			indexOfHue = indexOfHue + 1
		) {
			const actualHue = (hueOfColor + indexOfHue * deltaOfHue) % 360;
			const colorWithActualHue = {...color, h: actualHue};
			if (!checkIfColorIsDisplayableInSomeGamut(colorWithActualHue)) {
				return false;
			} else {
				continue;
			}
		}
		return true;
	}
	const findHighestDisplayableChromaForRow = (
		lightness: number,
		hue: number,
	): null | number => {
		for (
			let indexOfChroma = chromaValues.length - 1;
			indexOfChroma >= 0;
			indexOfChroma = indexOfChroma - 1
		) {
			const chroma: number | undefined = chromaValues.at(indexOfChroma);
			if (chroma === undefined) {
				continue;
			}
			if (
				checkIfColorAndVariableIsDisplayableInSomeGamut(
					{c: chroma, h: hue, l: lightness, mode: `oklch`},
					tablesCount,
				)
			) {
				return chroma;
			}
		}
		return null;
	};
	const createCssCodeLinesForTable = (hue: number): string => {
		return lightnessValues
			.map((lightness: number, index: number): string => {
				const highestDisplayableChroma: null | number =
					findHighestDisplayableChromaForRow(lightness, hue);
				if (highestDisplayableChroma === null) {
					throw null;
				}
				return `--primary-color-${index.toString(10)}: oklch(${(lightness * 100).toFixed(2)}% ${highestDisplayableChroma.toFixed(3)} ${hue.toFixed(2)}deg);`;
			})
			.join(`\n`);
	};
	$effect(() => {
		const dependencies: number =
			tableHues.length + lightnessValues.length + chromaValues.length;
		if (dependencies < 1 || typeof document === `undefined`) {
			return;
		}
		const tableCells: NodeListOf<HTMLTableCellElement> =
			document.querySelectorAll(`td[data-lightness][data-chroma][data-hue]`);
		tableCells.forEach((tableCell: HTMLTableCellElement): void => {
			const lightness: number = Number(tableCell.dataset[`lightness`]);
			const chroma: number = Number(tableCell.dataset[`chroma`]);
			const hue: number = Number(tableCell.dataset[`hue`]);
			tableCell.style.color = `transparent`;
			if (
				checkIfColorAndVariableIsDisplayableInSomeGamut(
					{c: chroma, h: hue, l: lightness, mode: `oklch`},
					tablesCount,
				)
			) {
				tableCell.style.backgroundColor = `oklch(${(lightness * 100).toFixed(2)}% ${chroma.toFixed(3)} ${hue.toFixed(2)})`;
				// tableCell.style.color =
				// 	lightness >= 0.62 ? `oklch(0% 0 0deg)` : `oklch(100% 0 0deg)`;
				return;
			} else {
				tableCell.style.backgroundColor = `transparent`;
				return;
			}
		});
	});
</script>

<main>
	<section id="controls">
		<label>
			<span>Tables: {tablesCount}</span>
			<input
				bind:value={tablesCount}
				max="24"
				min="1"
				step="1"
				type="range"
			/>
		</label>

		<label>
			<span>First hue: {firstHue.toFixed(0)}°</span>
			<input
				bind:value={firstHue}
				max="359"
				min="0"
				step="1"
				type="range"
			/>
		</label>

		<label>
			<span>Lightness colors: {lightnessCount}</span>
			<input
				bind:value={lightnessCount}
				max="24"
				min="2"
				step="1"
				type="range"
			/>
		</label>

		<label>
			<span>Chroma colors: {chromaCount}</span>
			<input
				bind:value={chromaCount}
				max="24"
				min="2"
				step="1"
				type="range"
			/>
		</label>
	</section>

	<section id="tables-grid">
		{#each tableHues as hue, index (index)}
			<article>
				<header>
					<h2>Hue {hue.toFixed(1)}°</h2>
					<p>Table {index + 1} / {tablesCount}</p>
				</header>

				<div>
					<table>
						<thead>
							<tr>
								<th>L \ C</th>
								{#each chromaValues as chroma (chroma)}
									<th>{Number(chroma.toFixed(2)).toString()}</th>
								{/each}
							</tr>
						</thead>
						<tbody>
							{#each lightnessValues as lightness (lightness)}
								<tr>
									<th>{Number(lightness.toFixed(2)).toString()}</th>
									{#each chromaValues as chroma (chroma)}
										<td
											data-chroma={chroma.toFixed(3)}
											data-hue={hue.toFixed(2)}
											data-lightness={lightness.toFixed(3)}
										>
											<span
												>{Number(lightness.toFixed(2)).toString()}, {Number(
													chroma.toFixed(2),
												).toString()}</span
											>
										</td>
									{/each}
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<textarea
					readonly
					rows={lightnessValues.length}
					spellcheck="false">{createCssCodeLinesForTable(hue)}</textarea
				>
			</article>
		{/each}
	</section>
</main>

<style lang="scss">
	main {
		display: block grid;
		gap: 1.25rem;
		padding: 1rem;
	}
	#controls {
		display: block grid;
		gap: 0.9rem;
		padding: 1rem;
		border-radius: 0.75rem;
		background: oklch(97% 0.01 250deg);
	}
	#controls label {
		display: block grid;
		gap: 0.4rem;
		font-weight: 600;
	}
	#tables-grid {
		// display: block grid;
		// gap: 1rem;
		// grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
		display: block flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
	#tables-grid article {
		// display: block grid;
		padding: 0.9rem;
		border-radius: 0.75rem;
		border: 1px solid oklch(82% 0.01 260deg);
		background: oklch(99% 0.003 240deg);
		h2 {
			margin: 0;
		}
		p {
			margin: 0;
			font-size: 0.875rem;
			opacity: 0.8;
		}
	}
	#tables-grid article > div {
		overflow-x: auto;
	}
	table {
		border-collapse: collapse;
		font-size: 0.75rem;
		text-align: center;
		width: 0;
		height: 0;
		table-layout: fixed;
		th,
		td {
			border: 1px solid oklch(84% 0.008 250deg);
			padding: 0.35rem;
			width: 3em;
			height: 3em;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 0.5em;
		}
		thead th {
			position: sticky;
			top: 0;
			background: oklch(95% 0.008 250deg);
			z-index: 2;
		}
		tbody th {
			position: sticky;
			left: 0;
			background: oklch(95% 0.008 250deg);
			z-index: 1;
		}
		td span {
			white-space: nowrap;
			font-variant-numeric: tabular-nums;
		}
	}
	textarea {
		margin-block-start: 0.75rem;
		width: 100%;
		resize: vertical;
		font-family:
			ui-monospace, "SFMono-Regular", "Menlo", "Monaco", "Consolas",
			"Liberation Mono", "Courier New", monospace;
		font-size: 0.75rem;
		line-height: 1.5;
	}
</style>
