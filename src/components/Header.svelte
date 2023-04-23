<script>
	export let admin = false;
	let heading = 'Club Agenda';
	if (admin) {
		heading = 'Club Agenda Admin';
	}
</script>

<header>
	<h1 class="title">{heading}</h1>
	{#if !admin}
		<div class="meeting-info">
			<p>Meeting no. 165</p>
			<p>Sunday 16/04/2023</p>
		</div>
	{/if}
</header>

<style>
	header {
		text-align: center;
		padding: 2rem 0;
		background-color: var(--dark-shades);
		width: 100%;
		border-bottom: 10px solid var(--light-accent);
	}
	header > * {
		color: var(--light-shades);
	}
</style>
