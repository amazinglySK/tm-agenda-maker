<script>
	import FormGroup from '$components/FormGroup.svelte';
	import Button from '$components/Button.svelte';
	import { goto } from '$app/navigation';
	import Header from '$components/Header.svelte';

	export let form;
</script>

<Header admin={true} />

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
		<button formaction="?/login">Login</button>
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

	button {
		font-family: 'Calistoga', cursive;
		padding: 0.5rem;
		font-size: 1rem;
		border: 3px solid var(--light-accent);
		border-radius: 5px;
		background-color: var(--brand-color);
	}
</style>
