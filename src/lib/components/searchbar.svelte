<script lang="ts">
	import { onMount } from 'svelte';

	let searchInptut: HTMLElement;
	let searchedValue = '';
	let focusedIndex = -1;

	export let data: any;

	let suggestions: string[] = [];
	let isHidden = true;

	$: hidden_class = isHidden ? 'hidden' : '';
	onMount(() => searchInptut.focus());
	function showSearch() {
		if (searchedValue == '') {
			isHidden = true;
		} else {
			isHidden = false;
		}
	}

	function handleKeys(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			searchInptut.focus();
		}
	}
</script>

<!-- Specialities -->
<div class="flex items-center w-8/12">
	<!-- search input -->

	<div class="relative">
		<input
			bind:this={searchInptut}
			bind:value={searchedValue}
			on:input={showSearch}
			on:keypress={handleKeys}
			name="location"
			type="text"
			class="w-full border-zinc-500 rounded-lg shadow-sm"
		/>

		<div class="flex flex-col bg-red-300 absolute {hidden_class}">
			{#each data.cities as cities, i}
				<div>{cities.city}{i}</div>
			{/each}
		</div>
	</div>
</div>
