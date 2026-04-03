<script lang="ts">
	import MainOfPageOfRoot from "./main/MainOfPageOfRoot.svelte";
	import NavOfPageOfRoot from "./nav/NavOfPageOfRoot.svelte";
</script>

<svelte:head
	><meta
		content="ABC pięknej wymowy — logopeda i nauczycielka Aleksandra Danylec."
		name="description"
	/><title>ABC pięknej wymowy | Aleksandra Danylec</title></svelte:head
><div
	><NavOfPageOfRoot></NavOfPageOfRoot><MainOfPageOfRoot></MainOfPageOfRoot></div
>

<style lang="scss">
	div {
		display: block grid;
		grid-template-columns: 1fr;
		grid-template-rows: min-content 1fr;
		color: oklch(0% 0 0deg);
		font-family: system-ui;
	}
</style>
