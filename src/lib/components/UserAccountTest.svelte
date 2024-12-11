<script lang="ts">
	import { getUser } from '$lib/user.svelte';
	const user = getUser();
</script>

<div>
	{#if user.value}
		<label for="name">Name</label>
		<input id="name" type="text" bind:value={user.value.name} />
		<label for="pword">Password</label>
		<input id="pword" type="password" bind:value={user.value.password} />
	{/if}
</div>
<hr />
