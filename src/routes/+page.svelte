<script lang="ts">
	export let data;

	import Hero from '$lib/components/hero.svelte';
</script>

<div class="h-screen">
	<Hero {data} />

	<!-- <ul> -->
	<!-- 	{#each data.docs as docs} -->
	<!-- 		<li>{docs.docFName}</li> -->
	<!-- 	{/each} -->
	<!-- </ul> -->
</div>
