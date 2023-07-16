<script>
	import FormGroup from '$components/FormGroup.svelte';
	import Button from '$components/Button.svelte';
	import Header from '$components/Header.svelte';

	export let form;
</script>

<Header />

<main>
	<form method="POST" action="?/login">
		<FormGroup>
			<label for="name">Username</label>
			<input type="text" name="username" id="username" />
		</FormGroup>
		<FormGroup>
			<label for="password">Password</label>
			<input type="text" name="password" id="password" />
		</FormGroup>
		<Button formaction="?/login">Login</Button>
	</form>
	{#if form?.success}
		<p>Successfully logged in</p>
		<a href="/admin/dashboard">Go to dashboard -></a>
	{/if}
</main>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		max-width: 60%;
		margin: 1rem auto;
	}

	main {
		text-align: center;
	}
</style>
