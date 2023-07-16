<script>
	import Button from '$components/Button.svelte';
	import FormGroup from '$components/FormGroup.svelte';
	import Header from '$components/Header.svelte';
</script>

<Header admin={true} />

<main>
	<form action="">
		<!-- TODO : Work on the joining logic -->
		<FormGroup>
			<label for="club_code">Club Code</label>
			<input type="text" name="club_code" id="club_code" />
		</FormGroup>
		<Button formaction="?/join">Join</Button>
	</form>
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
