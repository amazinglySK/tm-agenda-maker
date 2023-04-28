<script>
	import Header from '$components/Header.svelte';
	import ClubCard from '$components/ClubCard.svelte';

	export let data;
</script>

<Header admin={true} />

<main>
	<div class="greeting">
		<h2>Hello User</h2>
		<a href="/admin/new">Create a new club</a>
	</div>
	<div class="clubs">
		{#each data.clubs as club}
			<ClubCard
				club_name={club.name}
				location={club.club_location}
				img_link={club.image_link}
				club_id={club.club_id}
			/>
		{/each}
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
</style>
