<script>
	import Button from '$components/Button.svelte';
	import FormGroup from '$components/FormGroup.svelte';
	import Header from '$components/Header.svelte';
</script>

<Header admin={true} />

<main>
	<form method="POST" action="?/create">
		<FormGroup>
			<label for="club_name">Club Name</label>
			<input type="text" name="club_name" id="club_name" />
		</FormGroup>
		<FormGroup>
			<label for="club_location">Location</label>
			<input type="text" name="club_location" id="club_location" />
		</FormGroup>
		<FormGroup>
			<label for="image_link">Image Link</label>
			<input type="text" name="image_link" id="image_link" />
		</FormGroup>
		<Button formaction="?/create">Create</Button>
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
