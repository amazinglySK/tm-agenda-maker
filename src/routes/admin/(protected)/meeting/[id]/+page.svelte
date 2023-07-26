<script>
	import Header from '$components/Header.svelte';
	import FormGroup from '$components/FormGroup.svelte';
	import Button from '$components/Button.svelte';

	export let data;

	const handleClick = (role) => {
		let new_entry = prompt('Enter the name of the member : ');
		// TODO : If the entry is null don't add it (!new_entry) check
		data.meeting.roles[role] = [...data.meeting.roles[role], new_entry];
	};
	let date = new Date(data.meeting.date);
</script>

<Header admin={true}>
	<p class="info">Meeting passcode : {data.meeting.passcode}</p>
	<!-- TODO : Display the link to be given -->
	<p class="info">Date : {date.toDateString()}</p>
</Header>
<main>
	<form method="POST" action="?/save">
		<h1>Choose the role players</h1>
		{#each Object.entries(data.meeting.roles) as [role, role_players]}
			<FormGroup>
				<label for={role}>{role}</label>
				<select name={role} id={role}>
					{#each role_players as rp}
						<option value={rp}>{rp}</option>
					{/each}
					<option value={data.meeting.role_players[role]} selected
						>{data.meeting.role_players[role]}</option
					>
					<option value="None">None</option>
				</select>
				<button class="add-mem-btn" on:click|preventDefault={handleClick(role)}
					>Assign member manually</button
				>
			</FormGroup>
		{/each}
		<div class="buttons">
			<!-- TODO : Change the colour of the delete button to a red shade -->
			<Button formaction="?/save">Save Changes</Button>
			<Button formaction="?/delete">Delete Meeting</Button>
		</div>
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

	.add-mem-btn {
		background-color: transparent;
		border: 3px solid var(--brand-color);
		padding: 0.5rem;
		font-size: 1.1rem;
		transition: all 0.25s ease-in-out;
	}

	.add-mem-btn:hover {
		background-color: var(--brand-color);
	}

	.info {
		color: var(--light-shades);
	}
</style>
