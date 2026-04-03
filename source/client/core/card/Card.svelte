<script lang="ts">
	import type {Snippet} from "svelte";
	const props: {
		readonly children: Snippet<[]>;
		readonly id: string;
		readonly title: string;
	} = $props();
</script>

<section id={props.id}
	><div><h2>{props.title}</h2>{@render props.children()}</div></section
>

<style lang="scss">
	section {
		background-color: oklch(97% 0 0deg);
		padding: 0 calc(1.5 * 0.83em);
		display: block grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		margin-block: clamp(1em, 4vw, 2em);
	}
</style>
