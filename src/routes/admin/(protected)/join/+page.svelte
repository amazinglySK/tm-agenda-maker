<script>
	import Button from '$components/Button.svelte';
	import FormGroup from '$components/FormGroup.svelte';
	import Header from '$components/Header.svelte';

	export let form;
</script>

<Header admin={true} />

<main>
	<form action="?/join" method="POST">
		<FormGroup>
			<label for="club_code">Club Code</label>
			<input type="text" name="club_code" id="club_code" />
		</FormGroup>
		<Button formaction="?/join">Join</Button>
	</form>

	{#if form?.failed}
		<p>Oop something went wrong</p>
		<p>{form?.message}</p>
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
</style>
