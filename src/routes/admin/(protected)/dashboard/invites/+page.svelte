<script>
	import Header from '$components/Header.svelte';
	import ClubCard from '$components/ClubCard.svelte';

	export let data;
</script>

<Header admin={true} />

<main>
	<div class="invites">
		<!-- {#each data.clubs as club}
			<ClubCard
				club_name={club.name}
				location={club.club_location}
				img_link={club.image_link}
				club_id={club.club_id}
			/>
		{/each} -->
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

	.invites {
		display: flex;
		flex-direction: column;
		width: 80%;
		margin: auto;
	}
</style>
