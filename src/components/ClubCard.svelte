<script>
	export let img_link, club_name, location, club_id;
</script>

<a href={`/admin/dashboard/${club_id}`}>
	<div class="club-card">
		<img src={img_link} alt="" class="club-img" />
		<h3>{club_name}</h3>
		<p>{location}</p>
	</div>
</a>

<style>
	a {
		text-decoration: none;
		color: inherit;
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
