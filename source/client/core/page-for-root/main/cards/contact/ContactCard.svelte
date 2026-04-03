<script lang="ts">
	import Card from "../../../../card/Card.svelte";
</script>

<Card id="kontakt" title="Kontakt"
	><p
		>Preferowane zapisy telefoniczne lub SMS. Odpowiadam możliwie najszybciej.</p
	><p><a href="tel:+48504119112">504 119 112</a></p></Card
>

<style lang="scss">
	a {
		display: inline flow-root;
		padding: 0.5rem;
		color: inherit;
		text-decoration: none;
		border-radius: 0.5rem;
		background-color: oklch(90% 0 0deg);
		border: 2px solid;
		border-color: oklch(80% 0 0deg);
		&:hover {
			background-color: oklch(85% 0 0deg);
			border-color: oklch(75% 0 0deg);
		}
		&:active {
			background-color: oklch(80% 0 0deg);
			border-color: oklch(70% 0 0deg);
		}
	}
</style>
