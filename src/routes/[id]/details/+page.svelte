<script>
	import Button from '$components/Button.svelte';
	import FormGroup from '$components/FormGroup.svelte';
	import Header from '$components/Header.svelte';
	import { checkMeetingCode } from '$lib/gavSide';
	import { roles } from '../../../roleStore';
	import { goto } from '$app/navigation';
	let meeting_code;
	let name;
	export let data;

	const handleSubmit = async () => {
		const check = await checkMeetingCode(data.meeting_id, meeting_code);
		if (!check) {
			alert('Incorrect meeting code');
			return;
		}
		let selectedRoles = $roles.filter((r) => r.selected);
		let roleNames = selectedRoles.map((r) => r.role);
		console.log(name, roleNames);
		const request = await fetch(`/${data.meeting_id}/submit`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ roles: roleNames, name })
		});

		const json = await request.json();
		if (!json.success) {
			alert('Please go back and check if you have chosen the right roles');
			return;
		}
		goto(json.location);
	};
</script>

<Header />

<main>
	<FormGroup>
		<label for="name">Please enter your name</label>
		<input type="text" bind:value={name} name="name" id="name" />
	</FormGroup>
	<FormGroup>
		<label for="meeting_code">Please enter the meeting code</label>
		<input type="text" bind:value={meeting_code} name="meeting_code" id="meeting_code" />
	</FormGroup>
	<a href={`/${data.meeting_id}`}>Go back and edit your roles chosen</a>
	<Button handler={handleSubmit}>Submit</Button>
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
