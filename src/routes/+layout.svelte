<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	// @ts-ignore
	import '@fontsource-variable/sora';
	import "../app.css";

	import { onMount } from 'svelte';
  	import { theme } from '$lib/stores/theme.svelte';

	onMount(() => {
		theme.init();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="Johnny A Asumbra — Full Stack Developer Portfolio" />
</svelte:head>

<div>
	<main class="w-full flex flex-col items-center p-10">
		{@render children()}
	</main>
</div>
