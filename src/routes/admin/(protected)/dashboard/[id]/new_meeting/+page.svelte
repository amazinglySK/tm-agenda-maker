<script>
	import Button from '$components/Button.svelte';
	import Header from '$components/Header.svelte';
	import roles from '/src/roles.json';
	import FormGroup from '$components/FormGroup.svelte';

	let temp_roles = roles;

	let handleAddRole = (e) => {
		e.preventDefault();
		let role = prompt('Name of the new role to be added :');
		if (role) {
			temp_roles[role] = true;
		}
		return;
	};
</script>

<Header admin={true} />

<main>
	<form action="?/create" method="POST">
		<FormGroup>
			<label for="meeting_no">Meeting no.</label>
			<input type="text" id="meeting_no" name="meeting_no" />
		</FormGroup>
		<FormGroup>
			<label for="date">Maximum Choice</label>
			<input type="date" id="date" name="date" />
		</FormGroup>
		<FormGroup>
			<label for="max_choice">Maximum Choice</label>
			<input type="number" id="max_choice" name="max_choice" value="3" />
		</FormGroup>
		<fieldset name="roles">
			<legend><h2>Select the roles for the meeting</h2></legend>
			{#each Object.entries(temp_roles) as [role, is_def]}
				<div>
					<input type="checkbox" id={role} name={role} checked={is_def} />
					<label for={role}>{role}</label>
				</div>
			{/each}
			<Button handler={handleAddRole}>Add a new role</Button>
		</fieldset>
		<Button formaction="?/create">Submit</Button>
	</form>
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
	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
		justify-content: center;
	}

	input[type='checkbox'] {
		transform: scale(1.5);
	}
</style>
