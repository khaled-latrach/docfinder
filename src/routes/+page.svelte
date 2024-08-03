<script lang="ts">
	export let data;
</script>

<ul>
	{#each data.docs as docs}
		<li>{docs.docFName}</li>
	{/each}
</ul>
