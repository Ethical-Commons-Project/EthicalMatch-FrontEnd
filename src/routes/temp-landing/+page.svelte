<script>
	import Login from '$component/LoginModal.svelte';
</script>

<div>
	<h1>Welcome to the Ethical Match Web app!</h1>
	<p>
		You're <em>very</em> early in the development process, so here are some good places to get started
	</p>
	<ul>
		<li>
			Contribute to the documentation for <a
				href="https://github.com/orgs/Ethical-Commons-Project/projects/2/views/5?query=sort%3Aupdated-desc+is%3Aopen"
				>features</a
			> that are in the drafting process
		</li>
		<li>
			Implement solutions for <a
				href="https://github.com/orgs/Ethical-Commons-Project/projects/2/views/7?query=sort%3Aupdated-desc+is%3Aopen"
				>features</a
			>
			that <em>have</em> been designed and documented
		</li>
		<li>
			Fix any <a href="https://github.com/Ethical-Commons-Project/EthicalMatch-FrontEnd/issues"
				>outstanding issues</a
			> in the frontend code
		</li>
		<li>
			Join the <a href="https://discord.gg/P7qfVuqMXz">Discord</a> and participate in the conversation
			there
		</li>
	</ul>
	<hr />
	<h1>Routes:</h1>
	<ul>
		<li>
			<a href="account">Account</a>
			: View the logged in user
		</li>
	</ul>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		margin: 1rem;
	}
	h1 {
		margin: 0 auto;
	}
</style>
