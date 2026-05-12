<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	// @ts-ignore
	import '@fontsource-variable/sora';
	import "../app.css";

	// components
	import Navbar from '$lib/components/layout/Navbar.svelte';
  	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
