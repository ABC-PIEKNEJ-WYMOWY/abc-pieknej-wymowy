<script lang="ts">
	const props: {
		readonly prompt: string;
		readonly alt?: string;
	} = $props();
</script>

<div class="placeholder">
	<div class="content">
		<span class="label">📷 Miejsce na zdjęcie</span>
		<span class="prompt">{props.prompt}</span>
		{#if props.alt}
			<span class="alt">Tekst alternatywny: {props.alt}</span>
		{/if}
	</div>
</div>

<style lang="scss">
	.placeholder {
		display: block flex;
		align-items: center;
		justify-content: center;
		min-height: 12rem;
		padding: 1.5rem;
		margin-block: 1rem;
		background-color: oklch(95% 0.01 250deg);
		border: 2px dashed oklch(80% 0.02 250deg);
		border-radius: 0.75rem;
		text-align: center;
	}
	.content {
		display: block grid;
		gap: 0.5rem;
		max-width: 30rem;
	}
	.label {
		font-weight: 600;
		color: var(--primary-color-7);
		font-size: 1.1rem;
	}
	.prompt {
		font-size: 0.9rem;
		color: oklch(50% 0.02 250deg);
		font-style: italic;
		line-height: 1.5;
	}
	.alt {
		font-size: 0.8rem;
		color: oklch(60% 0.02 250deg);
		margin-top: 0.25rem;
	}
</style>
