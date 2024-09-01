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
		if (searchedValue === '') {
			return;
		}

		if (event.key == 'ArrowUp') {
			focusedIndex = (focusedIndex - 1 + data.cities.length) % data.cities.length;
			console.log(focusedIndex);
		} else if (event.key == 'ArrowDown') {
			console.log(focusedIndex);
			focusedIndex = (focusedIndex + 1) % data.cities.length;
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
			on:keydown={handleKeys}
			name="location"
			type="text"
			class="w-full border-zinc-500 rounded-lg shadow-sm"
		/>

		<div class="flex flex-col absolute {hidden_class}">
			{#each data.cities as cities, index}
				<div class="bg-sky-50 {index === focusedIndex ? 'bg-blue-700' : 'bg-red-700'}">
					{cities.city}{index}
				</div>
			{/each}
		</div>
	</div>
</div>

