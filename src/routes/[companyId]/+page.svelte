<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: products = data.companies_by_pk?.products || [];
</script>

<h1>{data.companies_by_pk?.name}</h1>
<h1>{data.companies_by_pk?.ceo}</h1>
<ul>
	{#each products as product (product.name)}
		<li>
			<span>{product.name}</span>
		</li>
	{/each}
</ul>
