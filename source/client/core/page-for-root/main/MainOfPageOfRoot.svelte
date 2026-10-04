<script lang="ts">
	import HeaderOfMainOfPageOfRoot from "./header/HeaderOfMainOfPageOfRoot.svelte";
</script>

<div
	><main
		><HeaderOfMainOfPageOfRoot></HeaderOfMainOfPageOfRoot></main
	></div
>

<style lang="scss">
	div {
		background-color: oklch(100% 0 0deg);
		display: block grid;
		grid-template-columns: min(100%, 40rem);
		margin: 0 clamp(1em, 4vw, 2em);
		grid-template-rows: 1fr;
		justify-content: center;
	}
</style>
