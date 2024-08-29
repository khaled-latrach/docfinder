<script lang="ts">
	import Searchbar from './searchbar.svelte';
	export let data: any;

	let city: string;
</script>

<div class="flex flex-col items-center">
	<!-- presentation -->
	<p class="mt-24 font-semibold text-3xl">View Doctors, Book an Appointment</p>
	<div class="flex mt-10 gap-4 font-bold">
		<div class="border px-2 py-1 rounded-lg">At Office</div>
		<div class="border px-2 py-1">Video Call</div>
	</div>

	<div class="flex justify-center mt-10 mb-24 mx-auto w-5/6 max-w-2xl">
		<form action="" class="flex w-full">
			<div class="flex w-full justify-center gap-1">
				<!-- location -->
				<div class="flex items-center">
					<svg
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6 -mr-6 z-10 text-teal-600"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
						/>
					</svg>

					<select bind:value={city} name="" id="" class="border-zinc-500 rounded-lg shadow-sm pl-6">
						{#each data.cities as cities}
							#{#each cities.docs as doc}
								<option value={doc.fname}>{doc.fname}</option>
							{/each}
						{/each}
					</select>

					<Searchbar {data} />
					<!-- <input -->
					<!-- 	name="location" -->
					<!-- 	type="text" -->
					<!-- 	class="border pl-6 py-2 border-zinc-300 rounded-lg shadow-sm focus:outline-none focus:border-teal-300" -->
					<!-- /> -->

					<!-- 	<button> -->
					<!-- 		<svg -->
					<!-- 			fill="none" -->
					<!-- 			viewBox="0 0 24 24" -->
					<!-- 			stroke-width="1.5" -->
					<!-- 			stroke="currentColor" -->
					<!-- 			class="-ml-8 size-6 text-teal-300" -->
					<!-- 		> -->
					<!-- 			<path -->
					<!-- 				stroke-linecap="round" -->
					<!-- 				stroke-linejoin="round" -->
					<!-- 				d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" -->
					<!-- 			/> -->
					<!-- 		</svg> -->
					<!-- 	</button> -->
					<!-- </div> -->
				</div>
			</div>
		</form>
	</div>
</div>
