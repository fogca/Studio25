<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Header from '../lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="../css/base.css?var=1.00">
</svelte:head>


<Header />
{@render children()}
