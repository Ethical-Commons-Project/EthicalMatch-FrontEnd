<script>
	import Portal from '$component/Portal.svelte';
	import '$style/app.scss';
	import { Modals } from 'svelte-modals';
	let { children } = $props();
</script>

<div id="app">
	<header>DEVELOPMENT BUILD</header>
	
	{@render children()}
	
	<footer>EthicalMatch v0.0</footer>
	
	<Portal>
		<Modals />
	</Portal>
</div>

<style lang="scss">
	#app {
		height: 100vh;
		width: 100vw;

		display: grid;
		grid: 3rem auto 4rem / 100%;
	}

	header,
	footer {
		display: flex;
		align-items: center;
		justify-content: center;

		outline: 1px solid black;
		color: rgba(0, 0, 0, 0.6);
	}
</style>
