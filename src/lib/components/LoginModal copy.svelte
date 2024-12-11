<script lang="ts">
	import { type ModalProps } from 'svelte-modals';
	import { type UserDTO } from '$lib/user';
	import type { Writable } from 'svelte/store';

	type LoginProps = { userStore: Writable<UserDTO> } & ModalProps;

	const { userStore, close, isOpen }: LoginProps = $props();	

	function fakeLogin() {
		const fakeUser: UserDTO = { id: 0, name: 'Cool Developer', password: 'SuperSecret' };
		userStore.set(fakeUser);
		close();
	}
</script>

{#if isOpen}
	<div id="login-modal" class="modal">
		<h1>Login</h1>
		<div class="vertical-list">
			<button onclick={fakeLogin}><img src="img/placeholder.png" />Login as fake user</button>
		</div>
	</div>
{/if}

<style lang="scss">
	#login-modal {
		background-color: #515151;
		display: flex;
		flex-direction: column;

		align-items: center;

		border-radius: 0.5em 0.5em 1.5em 1.5em;

		h1 {
			color: white;
			margin: -0.5rem 0 0.6rem 0;
		}
	}

	// TODO extract styles
	.modal {
		margin: auto;
		height: fit-content;
		width: fit-content;
		padding: 1rem;
		display: flex;
		flex-direction: column;
	}
	.modal::before {
		content: '';
		position: absolute;
		z-index: -1;
		inset: 0;

		background-color: rgba(0, 0, 0, 0.2);
	}

	.vertical-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	button {
		display: flex;
		min-height: 2rem;
		width: 100%;

		align-items: center;

		gap: 0.2em;
		padding: 0.2em 1em 0.2em 0.2em;

		border: none;
		border-radius: 100rem;

		> img {
			width: 2em;
			height: 2em;
		}
	}
</style>
