<script type="ts">
	import { LL } from '$i18n/i18n-svelte';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import Filters from '$lib/components/filters/Filters.svelte';
	import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';
	import type { Filter } from '$lib/types/content/filters/filter.interface';

	export let roadmaps: RoadmapOverview[];

	let filters: Filter[] = [
		{
			title: 'Subject',
			filterElement: [
				{
					title: 'Cadence',
					icon: 'icon',
					slug: SubjectsEnum.Cadence
				}
			],
			filterBucket: []
		}
	];
</script>

<section class="container">
	<div class="sidebar">
		<h3>{$LL.PATHS_H1()}</h3>
		<Filters bind:filters hasTitles={false} />
	</div>
	<div class="cards-wrapper">
		{#each roadmaps as road}
			{#if filters[0].filterBucket.length < 1}
				<ContentCard overview={road} />
			{:else if filters[0].filterBucket.some((item) => road.metadata.subjects.includes(item))}
				<ContentCard overview={road} />
			{/if}
		{/each}
	</div>
</section>

<style type="scss">
	section {
		display: flex;
		flex-direction: column;
		align-items: center;

		@include mq(small) {
			display: grid;
			grid-template-columns: 2fr 3fr;
			gap: var(--space-9);
		}

		.sidebar {
			text-align: right;
			display: flex;
			flex-direction: column;
			gap: var(--space-5);
			align-items: center;

			@include mq(medium) {
				align-items: flex-end;
			}

			h3 {
				--font-weight: var(--font-weight-medium);
				max-width: 14ch;
				text-align: center;

				@include mq(medium) {
					text-align: right;
				}
			}
		}

		.cards-wrapper {
			margin-top: var(--space-9);

			@include mq(small) {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: var(--space-3);
			}
		}
	}
</style>
