<script lang="ts">
	import Card from "../../../../card/Card.svelte";
</script>

<Card
	id="kontakt"
	title="Kontakt"
	><p
		>Preferowane zapisy telefoniczne lub SMS. Odpowiadam możliwie najszybciej.</p
	><p><a href="tel:+48504119112">504 119 112</a></p></Card
>

<style lang="scss">
	a {
		display: inline flow-root;
		padding: 0.5rem;
		text-decoration: none;
		border-radius: 0.5rem;
		border: 2px solid;
		color: oklch(100% 0 0deg);
		font-size: 1.25em;
		background-color: var(
			--primary-color-with-chroma-2-out-of-2-and-lightness-5-out-of-8
		);
		border-color: var(
			--primary-color-with-chroma-2-out-of-2-and-lightness-4-out-of-8
		);
		&:hover {
			background-color: var(
				--primary-color-with-chroma-2-out-of-2-and-lightness-4-out-of-8
			);
			border-color: var(
				--primary-color-with-chroma-2-out-of-2-and-lightness-3-out-of-8
			);
		}
		&:active {
			background-color: var(
				--primary-color-with-chroma-2-out-of-2-and-lightness-3-out-of-8
			);
			border-color: var(
				--primary-color-with-chroma-2-out-of-2-and-lightness-2-out-of-8
			);
		}
	}
</style>
