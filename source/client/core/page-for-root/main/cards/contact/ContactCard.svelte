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
		color: var(--primary-color-7);
		font-size: 1.25em;
		background-color: var(--primary-color-9);
		border-color: var(--primary-color-8);
		&:hover {
			background-color: var(--primary-color-8);
			border-color: var(--primary-color-7);
		}
		&:active {
			background-color: var(--primary-color-7);
			border-color: var(--primary-color-6);
		}
	}
</style>
