<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ul>
	{#each data.companies as company (company.id)}
		<li>
			<a href={`/${company.id}`}>{company.name}</a>
			<span>Ceo: {company.ceo}</span>
			<span>Founded: {company.founded_year}</span>
			<span>Type: {company.type}</span>
		</li>
	{/each}
</ul>
