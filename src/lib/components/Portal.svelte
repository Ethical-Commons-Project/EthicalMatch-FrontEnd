<script lang="ts">
	let { children } = $props();
</script>

<div id="portal-root">
	{@render children()}
</div>

<style>
	#portal-root {
		z-index: 99999999999999999999999;
		position: absolute;
		inset: 0;

		display: flex;
		pointer-events: none;
		> :global(*) {
			pointer-events: auto;
		}
	}
</style>
