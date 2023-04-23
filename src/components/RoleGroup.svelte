<script>
	import Role from './Role.svelte';
	import { roles } from '../roleStore';
	export let max;
	$: select_count = $roles.reduce((acc, curr) => acc + Number(curr.selected), 0);
</script>

<div name="roles" id="roles">
	{#each $roles as role}
		<Role role={role.role} bind:selected={role.selected} />
	{/each}
</div>
{#if select_count == max}
	<a href="/details">Next -></a>
{/if}

<style>
	#roles {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		text-align: center;
		width: 60%;
	}

	a {
		padding: 0.8rem;
		font-size: 1.2rem;
		border-radius: 5px;
		color: var(--light-shades);
		text-decoration: none;
		background: var(--dark-shades);
	}
</style>
