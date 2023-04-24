<script>
	export let handler;
	export let formaction;
</script>

{#if formaction}
	<button {formaction} class="sub"><slot /></button>
{:else}
	<button on:click={handler} class="sub"><slot /></button>
{/if}

<style>
	.sub {
		font-family: 'Calistoga', cursive;
		padding: 0.5rem;
		font-size: 1rem;
		border: 3px solid var(--light-accent);
		border-radius: 5px;
		background-color: var(--brand-color);
	}
</style>
