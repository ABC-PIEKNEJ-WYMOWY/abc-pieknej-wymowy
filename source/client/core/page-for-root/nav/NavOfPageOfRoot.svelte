<script lang="ts">
</script>

<div
	><nav
		><a href="#abc-pieknej-wymowy">ABC pięknej wymowy</a><ul
			><li><a href="#o-mnie">O mnie</a></li><li><a href="#uslugi">Usługi</a></li
			><li><a href="#kontakt">Kontakt</a></li><li
				><a href="#cennik">Cennik</a></li
			></ul
		></nav
	></div
>

<style lang="scss">
	div {
		display: block grid;
		grid-template-columns: min(100%, 50rem);
		grid-template-rows: 1fr;
		justify-content: center;
		position: sticky;
		top: 0;
	}
	nav {
		background-color: oklch(95% 0 0deg);
		display: block flex;
		flex-flow: row wrap;
		flex-direction: row;
		gap: 0 1rem;
		justify-content: space-between;
		border: 2px solid oklch(90% 0 0deg);
	}
	a {
		padding: 1rem;
		color: inherit;
		text-decoration: none;
		&:hover {
			background-color: oklch(90% 0 0deg);
		}
		&:active {
			background-color: oklch(85% 0 0deg);
		}
	}
	ul {
		display: block flex;
		flex-flow: row wrap;
		list-style-type: none;
		margin-block: 0;
		padding-inline-start: 0;
		justify-content: space-between;
		> li {
			display: block flex;
		}
	}
</style>
