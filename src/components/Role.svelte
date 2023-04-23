<script>
	export let role;
	export let selected = false;
</script>

<button class="role-opt" class:active={selected === true} on:click={() => (selected = !selected)}>
	{role}
</button>

<style>
	.role-opt {
		font-family: inherit;
		padding: 0.5rem 0;
		font-size: 1.5rem;
		background-color: var(--brand-color);
		cursor: pointer;
		border: none;
		border-radius: 5px;
	}

	.active {
		border: 5px solid var(--dark-shades);
	}
</style>
