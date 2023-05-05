<script>
	import Button from '$components/Button.svelte';
	import Header from '$components/Header.svelte';
	import roles from '/src/roles.json';

	let temp_roles = roles;

	let handleAddRole = () => {
		let role = prompt('Name of the new role to be added :');
		if (role) {
			temp_roles[role] = true;
		}

		return;
	};
</script>

<Header admin={true} />

<main>
	<fieldset name="roles">
		<legend><h2>Select the roles for the meeting</h2></legend>
		<form action="?/create" method="POST">
			{#each Object.entries(temp_roles) as [role, is_def]}
				<div>
					<input type="checkbox" id={role} name={role} checked={is_def} />
					<label for={role}>{role}</label>
				</div>
			{/each}
			<Button handler={handleAddRole}>Add a new role</Button>
			<Button formaction="?/create">Submit</Button>
		</form>
	</fieldset>
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
	}

	input[type='checkbox'] {
		transform: scale(1.5);
	}
</style>
