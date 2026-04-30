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
		--primary-color-0: oklch(0% 0 230deg);
		--primary-color-1: oklch(7.1% 0.016 230deg);
		--primary-color-2: oklch(14.3% 0.032 230deg);
		--primary-color-3: oklch(21.4% 0.048 230deg);
		--primary-color-4: oklch(28.6% 0.064 230deg);
		--primary-color-5: oklch(35.7% 0.08 230deg);
		--primary-color-6: oklch(42.9% 0.097 230deg);
		--primary-color-7: oklch(50% 0.113 230deg);
		--primary-color-8: oklch(57.1% 0.129 230deg);
		--primary-color-9: oklch(64.3% 0.145 230deg);
		--primary-color-10: oklch(71.4% 0.161 230deg);
		--primary-color-11: oklch(78.6% 0.113 230deg);
		--primary-color-12: oklch(85.7% 0.064 230deg);
		--primary-color-13: oklch(92.9% 0.032 230deg);
		--primary-color-14: oklch(100% 0 230deg);
	}
</style>
