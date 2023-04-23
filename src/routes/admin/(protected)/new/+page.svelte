<script>
	import Button from '$components/Button.svelte';
	import FormGroup from '$components/FormGroup.svelte';
	import Header from '$components/Header.svelte';
	let speaker, timer;

	const handleFinalize = () => {};
</script>

<Header admin={true} />

<main>
	<FormGroup>
		<label for="name">Speaker</label>
		<select bind:value={speaker} name="Speaker role" id="speaker">
			<option value="Shashwat">Shashwat</option>
			<option value="Tanmeen">Tanmeen</option>
			<option value="Faizaan">Faizaan</option>
		</select>
	</FormGroup>
	<FormGroup>
		<label for="meeting_code">Timer</label>
		<input type="text" bind:value={timer} name="timer" id="timer" />
	</FormGroup>

	<Button handler={handleFinalize} class="sub">Finalize</Button>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		max-width: 60%;
		margin: 1rem auto;
	}
</style>
