<script>
	import Header from '$components/Header.svelte';
	import RoleGroup from '$components/RoleGroup.svelte';
	import { roles } from '../../roleStore';
	export let data;

	if ($roles.length === 0) {
		roles.set(data.roles_loaded);
	}
	let max_roles = data.max_choice;
</script>

<Header />
<main>
	<h2>Please select at least {max_roles} roles</h2>
	<RoleGroup max={max_roles} meeting_id={data.meeting_id} />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		max-width: 60%;
		margin: auto;
	}
</style>
