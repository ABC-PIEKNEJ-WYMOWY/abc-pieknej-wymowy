<script lang="ts"></script>

<svelte:head>
	<meta
		content="Cennik – cena zajęć dostosowywana indywidualnie w zależności od wieku, potrzeb i etapu rozwoju dziecka."
		name="description"
	/>
	<title>Cennik | ABC pięknej wymowy</title>
</svelte:head>

<main>
	<section class="hero">
		<h1>Cennik</h1>
	</section>

	<section class="content">
		<p>
			Cena jest dostosowywana indywidualnie w zależności od wieku, potrzeb i
			etapu rozwoju dziecka.
		</p>
	</section>

	<section class="cta">
		<h2>Zapytaj o cenę</h2>
		<p>
			Skontaktuj się z nami, aby poznać szczegóły cenowe i umówić się na
			bezpłatną konsultację.
		</p>
		<a class="button" href="/kontakt">Skontaktuj się</a>
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
		h2 {
			color: var(--primary-color-7);
			margin-top: 0;
		}
	}
	.cta {
		text-align: center;
		.button {
			display: inline-block;
			padding: 0.75rem 1.5rem;
			background-color: var(--primary-color-7);
			color: oklch(100% 0 0deg);
			text-decoration: none;
			border-radius: 0.5rem;
			font-weight: 600;
			margin-top: 1rem;
			&:hover {
				background-color: var(--primary-color-6);
			}
		}
	}
</style>
