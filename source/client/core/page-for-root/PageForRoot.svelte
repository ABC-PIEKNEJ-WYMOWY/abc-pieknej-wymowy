<script lang="ts">
	import MainOfPageOfRoot from "./main/MainOfPageOfRoot.svelte";
	import NavOfPageOfRoot from "./nav/NavOfPageOfRoot.svelte";
</script>

<svelte:head
	><meta
		content="ABC pięknej wymowy – logopeda i nauczycielka Aleksandra Danylec."
		name="description"
	/><title>ABC pięknej wymowy | Aleksandra Danylec</title></svelte:head
><div
	><NavOfPageOfRoot></NavOfPageOfRoot><MainOfPageOfRoot></MainOfPageOfRoot></div
>

<style lang="scss">
	$maximum-chroma-index: 2;
	$maximum-lightness-index: 8;
	div {
		display: block grid;
		grid-template-columns: 1fr;
		grid-template-rows: min-content 1fr;
		color: oklch(0% 0 0deg);
		font-family: system-ui;
		--primary-color-maximal-chroma: 0.161;
		--count-of-chromas: #{$maximum-chroma-index + 1};
		--count-of-lightnesses: #{$maximum-lightness-index + 1};
		--primary-color-hue: 230deg;
		@for $chroma-index from 0 through $maximum-chroma-index {
			@for $lightness-index from 0 through $maximum-lightness-index {
				--primary-color-with-chroma-#{$chroma-index}-out-of-#{$maximum-chroma-index}-and-lightness-#{$lightness-index}-out-of-#{$maximum-lightness-index}: oklch(
					calc(100% * #{$lightness-index} / (var(--count-of-lightnesses) - 1))
						calc(
							var(--primary-color-maximal-chroma) *
								#{$chroma-index} /
								(var(--count-of-chromas) - 1)
						)
						var(--primary-color-hue)
				);
			}
		}
	}
</style>
