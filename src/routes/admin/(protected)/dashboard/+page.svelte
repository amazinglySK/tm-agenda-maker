<script>
	import Header from '$components/Header.svelte';
</script>

<Header admin={true} />

<main>
	<div class="greeting">
		<h2>Hello User</h2>
		<a href="/admin/new">Create a new meeting</a>
	</div>
	<div class="meetings">
		<div class="meeting-card">
			<h3>Meeting no. 165</h3>
			<p>Date : 25/04/23</p>
		</div>
		<div class="meeting-card">
			<h3>Meeting no. 165</h3>
			<p>Date : 25/04/23</p>
		</div>
		<div class="meeting-card">
			<h3>Meeting no. 165</h3>
			<p>Date : 25/04/23</p>
		</div>
		<div class="meeting-card">
			<h3>Meeting no. 165</h3>
			<p>Date : 25/04/23</p>
		</div>
	</div>
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

	.greeting {
		width: 80%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.meetings {
		display: grid;
		gap: 2rem;
		width: 80%;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}

	.meeting-card {
		padding: 1rem;
		border: 4px solid var(--light-accent);
	}
</style>
