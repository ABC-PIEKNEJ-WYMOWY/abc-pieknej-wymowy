<script lang="ts"></script>

<svelte:head>
	<meta
		content="Zajęcia z nauki czytania dla dzieci od 3 roku życia. Nauka czytania i pisania w formie zabaj."
		name="description"
	/>
	<title>Zajęcia z nauki czytania | ABC pięknej wymowy</title>
</svelte:head>

<main>
	<section class="hero">
		<h1>Zajęcia z nauki czytania</h1>
		<p class="lead">
			Naukę czytania warto rozpocząć jak najwcześniej, zanim dziecko odkryje, że
			czytanie jest trudną sztuką. Dziecko 4-5 letnie naturalnie przyswaja proces
			nauki liter i czytania, gdy wiedza jest przekazana w jasny i kluczowy
			sposób, najlepiej w formie zabawy.
		</p>
	</section>

	<section class="info">
		<h2>Dla kogo?</h2>
		<p>
			W ABC pięknej wymowy prowadzimy zajęcia z nauki czytania i pisania dla dzieci
			już od 3 roku życia. Pomagamy również dzieciom starszym, w wieku
			przedszkolnym, uczęszczającym do zerówki, wczesnoszkolnym oraz w klasach
			4-7.
		</p>
		<img
			alt="Dziecko uczące się liter w formie zabawy"
			class="image"
			src="/images/nauka-czytania-dziecko-uczy-sie-liter.png"
		/>
	</section>

	<section class="benefits">
		<h2>Dlaczego warto?</h2>
		<ul>
			<li>
				<strong>Wczesna nauka czytania</strong> – im wcześniej zaczniemy, tym
				łatwiej dziecko przyswoi umiejętność czytania.
			</li>
			<li>
				<strong>Nauka przez zabawę</strong> – dzieci uczą się najlepiej, gdy
				proces nauki jest przyjemny i angażujący.
			</li>
			<li>
				<strong>Indywidualne podejście</strong> – każde dziecko ma swój
				tempa nauki, dlatego dostosowujemy metody do potrzeb ucznia.
			</li>
			<li>
				<strong>Kompleksowa nauka</strong> – łączymy naukę czytania, pisania
				oraz prawidłowej wymowy.
			</li>
		</ul>
		<img
			alt="Zajęcia logopedyczne z dzieckiem"
			class="image"
			src="/images/nauka-czytania-zajecia-logopedyczne.png"
		/>
	</section>

	<section class="ages">
		<h2>Grupy wiekowe</h2>
		<div class="age-grid">
			<div class="age-card">
				<h3>3-4 lata</h3>
				<p>
					Pierwsze kroki w świecie liter. Poznawanie liter przez zabawę,
					rysowanie, kolorowanie i gry słuchowe.
				</p>
			</div>
			<div class="age-card">
				<h3>5-7 lat</h3>
				<p>
					Nauka czytania i pisania, rozwijanie umiejętności, przygotowanie do
					szkoły.
				</p>
			</div>
		</div>
		<img
			alt="Grupa dzieci uczących się czytania"
			class="image"
			src="/images/nauka-czytania-grupa-dzieci.jpeg"
		/>
	</section>

	<section class="cta">
		<h2>Zapisz swoje dziecko</h2>
		<p>
			Skontaktuj się z nami, aby umówić się na bezpłatną konsultację i poznać
			szczegóły zajęć.
		</p>
		<a class="button" href="/#kontakt">Skontaktuj się</a>
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
			margin-bottom: 1rem;
		}
		.lead {
			font-size: 1.1rem;
			line-height: 1.6;
			color: oklch(30% 0.02 250deg);
		}
	}
	.image {
		max-width: 100%;
		border-radius: 0.75rem;
		margin-block: 1rem;
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
	.benefits ul {
		padding-left: 1.2rem;
		li {
			margin-bottom: 0.75rem;
			line-height: 1.5;
		}
	}
	.age-grid {
		display: block grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	}
	.age-card {
		background-color: oklch(95% 0.01 250deg);
		padding: 1rem;
		border-radius: 0.5rem;
		h3 {
			margin-top: 0;
			color: var(--primary-color-7);
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
