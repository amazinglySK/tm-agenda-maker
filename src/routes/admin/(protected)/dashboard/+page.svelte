<script>
	import Header from '$components/Header.svelte';
</script>

<Header admin={true} />

<main>
	<div class="greeting">
		<h2>Hello User</h2>
		<a href="/admin/new">Create a new club</a>
	</div>
	<div class="clubs">
		<div class="club-card">
			<img
				src="https://toastmasterscdn.azureedge.net/medias/images/brand-items/gavelclublogored.png"
				alt=""
				class="club-img"
			/>
			<h3>Rising Stars Gavel Club</h3>
			<p>Sharjah</p>
		</div>
		<div class="club-card">
			<img
				src="https://toastmasterscdn.azureedge.net/medias/images/brand-items/gavelclublogored.png"
				alt=""
				class="club-img"
			/>
			<h3>Rising Stars Gavel Club</h3>
			<p>Sharjah</p>
		</div>
	</div>
	<a href="/admin/join">Join a club</a>
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

	.clubs {
		display: grid;
		gap: 2rem;
		width: 80%;
		margin: auto;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}

	.club-card {
		padding: 1rem;
		text-align: center;
		border: 4px solid var(--light-accent);
	}

	.club-img {
		width: 100%;
		aspect-ratio: 1/1;
	}
</style>
