<script>
	import Button from '$components/Button.svelte';
	import FormGroup from '$components/FormGroup.svelte';
	import Header from '$components/Header.svelte';
	import { checkMeetingCode } from '$lib/gavSide';
	import { roles } from '../../roleStore';
	import { goto, afterNavigate } from '$app/navigation';
	import { base } from '$app/paths';
	let meeting_code;
	let name;

	let previousPage = base;

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
	});

	const handleSubmit = () => {
		if (!checkMeetingCode(meeting_code)) {
			alert('Incorrect meeting code');
		}
		let selectedRoles = $roles.filter((r) => r.selected);
		let roleNames = selectedRoles.map((r) => r.role);
		console.log(name, roleNames);
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
	<a href={previousPage}>Go back and edit your roles chosen</a>
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
