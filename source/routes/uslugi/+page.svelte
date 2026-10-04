<script lang="ts"></script>

<svelte:head>
	<meta
		content="Usługi logopedyczne – zajęcia z nauki czytania, diagnozy logopedyczne, terapia wad wymowy, zajęcia ogólnorozwojowe."
		name="description"
	/>
	<title>Usługi | ABC pięknej wymowy</title>
</svelte:head>

<main>
	<section class="hero">
		<h1>Usługi</h1>
	</section>

	<section class="content">
		<ul>
			<li>Zajęcia z nauki czytania ze zrozumieniem</li>
			<li>Diagnozy logopedyczne</li>
			<li>
				Terapia dzieci z wadami wymowy, opóźnionym rozwojem mowy i
				seplenieniem
			</li>
			<li>Zajęcia ogólnorozwojowe grupowe i indywidualne</li>
			<li>Ćwiczenia motoryki małej i sprawności ręki</li>
		</ul>
		<img
			alt="Zajęcia logopedyczne z dzieckiem"
			class="image"
			src="/images/uslugi-zajecia-logopedyczne.jpeg"
		/>
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
	.content ul {
		padding-left: 1.2rem;
		li {
			margin-bottom: 0.75rem;
			line-height: 1.5;
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
