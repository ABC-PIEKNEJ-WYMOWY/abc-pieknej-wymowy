<script lang="ts"></script>

<svelte:head>
	<meta
		content="Kontakt – zapisy telefoniczne lub SMS. 504 119 112. Odpowiadam możliwie najszybciej."
		name="description"
	/>
	<title>Kontakt | ABC pięknej wymowy</title>
</svelte:head>

<main>
	<section class="hero">
		<h1>Kontakt</h1>
	</section>

	<section class="content">
		<p>
			Preferowane zapisy telefoniczne lub SMS. Odpowiadam możliwie najszybciej.
		</p>
		<p>
			<a class="button" href="tel:+48504119112">504 119 112</a>
		</p>
	</section>
</main>

<style lang="scss">
	main {
		display: block grid;
		gap: 2rem;
		padding: 1rem;
		max-width: 50rem;
		margin: 0 auto;
	}
	.hero {
		text-align: center;
		h1 {
			font-size: 2rem;
			color: var(--primary-color-7);
		}
	}
	section {
		background-color: oklch(97% 0 0deg);
		padding: 1.5rem;
		border-radius: 0.75rem;
	}
	.button {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background-color: var(--primary-color-7);
		color: oklch(100% 0 0deg);
		text-decoration: none;
		border-radius: 0.5rem;
		font-weight: 600;
		font-size: 1.25rem;
		&:hover {
			background-color: var(--primary-color-6);
		}
	}
</style>
