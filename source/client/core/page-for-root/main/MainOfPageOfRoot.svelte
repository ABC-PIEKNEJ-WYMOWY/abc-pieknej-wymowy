<script lang="ts">
	import AboutMeCard from "./cards/about-me/AboutMeCard.svelte";
	import ContactCard from "./cards/contact/ContactCard.svelte";
	import PricingCard from "./cards/pricing/PricingCard.svelte";
	import ServicesCard from "./cards/services/ServicesCard.svelte";
	import HeaderOfMainOfPageOfRoot from "./header/HeaderOfMainOfPageOfRoot.svelte";
</script>

<div
	><main
		><HeaderOfMainOfPageOfRoot></HeaderOfMainOfPageOfRoot><AboutMeCard
		></AboutMeCard><ServicesCard></ServicesCard><ContactCard
		></ContactCard><PricingCard></PricingCard></main
	></div
>

<style lang="scss">
	div {
		background-color: oklch(100% 0 0deg);
		display: block grid;
		grid-template-columns: min(100%, 40rem);
		margin: 0 clamp(1em, 4vw, 2em);
		grid-template-rows: 1fr;
		justify-content: center;
	}
</style>
