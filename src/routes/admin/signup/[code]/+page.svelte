<script>
	import FormGroup from '$components/FormGroup.svelte';
	import Button from '$components/Button.svelte';
	import Header from '$components/Header.svelte';

	export let form;
</script>

<Header admin={true} />
<main>
	<form method="POST" action="?/signup">
		<FormGroup>
			<label for="name">Name</label>
			<input type="text" name="name" id="name" />
		</FormGroup>
		<FormGroup>
			<label for="name">Username</label>
			<input type="text" name="username" id="username" />
		</FormGroup>
		<FormGroup>
			<label for="password">Password</label>
			<input type="text" name="password" />
		</FormGroup>
		<!-- <FormGroup>
            <label for="code">Code</label>
            <input type="text" name="code" />
        </FormGroup> -->
		<Button formaction="?/signup">Signup</Button>
	</form>
	{#if form?.success}
		<p>User created successfully</p>
		<a href="/admin/">Login now!</a>
	{/if}
</main>

<style>
	main {
		text-align: center;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		max-width: 60%;
		margin: 1rem auto;
	}
</style>
