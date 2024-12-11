<script lang="ts">
	/**
	 * STARUP PAGE
	 * Plays a simple animation while fetching user data from the server
	 */
	import { goto } from '$app/navigation';
	import { getUser, promptLogin } from '$lib/user.svelte';
	import { onMount } from 'svelte';

	let element: HTMLImageElement;
	const fadeinTime = 1.5;
	const fadeoutTime = 0.8;
	let fadeOut = $state(false);

	const user = getUser(false);

	let resolveFadeIn: () => void;
	let fadeInPromise: Promise<void> = new Promise((res) => {
		resolveFadeIn = res as any;
	});
	fadeInPromise.then((_) => {
		if (!user.value) promptLogin();
	});
	onMount(() => {
		element.addEventListener('animationend', (ev) => {
			if (ev.animationName.includes('fade-in')) {
				resolveFadeIn();
			}
		});
	});

	async function applyFadeOut() {
		await fadeInPromise;

		fadeOut = true;
		setTimeout(() => {
			goto('temp-landing');
		}, fadeoutTime * 1000);
	}
</script>

<div id="splash">
	<!-- img uses inline css var() injection. setting opacity prevents flickering after fade animations -->
	<img
		bind:this={element}
		id="logo"
		class:fade-in={!fadeOut}
		class:fade-out={fadeOut}
		style={`--duration: ${fadeOut ? fadeoutTime : fadeinTime}s; opacity: ${fadeOut ? 0 : 1}`}
		alt="Logo by ikramprasetyo629 on Freepik"
		src="img/logo_splash.svg"
	/>
	{#await fadeInPromise then}
		{#if user.value}
			{#await applyFadeOut()}{/await}
		{/if}
	{/await}
</div>

<style lang="scss">
	#splash {
		background-color: #262626;
	}

	#logo {
		animation-timing-function: ease-out;
	}
	#logo.fade-in {
		animation-name: fade-in;
		animation-duration: var(--duration, 1s);
	}
	#logo.fade-out {
		animation-name: fade-out;
		animation-duration: var(--duration, 1s);
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
			translate: 0 3rem;
		}
		60% {
			opacity: 1;
		}
		80% {
			translate: 0 0;
		}
	}
	@keyframes fade-out {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
