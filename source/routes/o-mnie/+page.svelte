<script lang="ts"></script>

<svelte:head>
	<meta
		content="O mnie – Aleksandra Danylec, logopeda i nauczycielka. Pomagam dzieciom na każdym etapie rozwoju mowy."
		name="description"
	/>
	<title>O mnie | ABC pięknej wymowy</title>
</svelte:head>

<main>
	<section class="hero">
		<h1>O mnie</h1>
	</section>

	<section class="content">
		<p>
			Nazywam się Aleksandra Danylec. Jestem nauczycielką i logopedą. Ukończyłam
			studia na Uniwersytecie Gdańskim na kierunku Filologia Polska oraz
			Podyplomowe Studia na kierunku Logopedia, również na Uniwersytecie
			Gdańskim.
		</p>
		<p>
			Pomagam dzieciom na każdym etapie rozwoju mowy. Uczę dzieci czytać,
			prowadzę zajęcia poprawiające sprawność manualną oraz zajęcia
			ogólnorozwojowe dla dzieci młodszych i starszych.
		</p>
		<p>
			Dzięki indywidualnemu podejściu do każdego dziecka osiągam bardzo dobre
			efekty i mogę cieszyć się zadowoleniem moich klientów.
		</p>
	</section>

	<section class="cta">
		<h2>Zapisz swoje dziecko</h2>
		<p>
			Skontaktuj się z nami, aby umówić się na bezpłatną konsultację i poznać
			szczegóły zajęć.
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
