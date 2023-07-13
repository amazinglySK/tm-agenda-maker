<script>
	import Header from '$components/Header.svelte';

	export let data;
</script>

<Header admin={true} />

<main>
	<div class="greeting">
		<h2>Hello {data.name}</h2>
		<a href={`/admin/dashboard/${data.id}/new_meeting`}>Create a new meeting</a>
	</div>
	<ul class="meetings">
		{#if data.meetings.length == 0}
			<p>Nothing to show here</p>
		{/if}
		{#each data.meetings as meeting}
			<li><a href={`/admin/meeting/${meeting.uid}`}>Meeting no. {meeting.number}</a></li>
		{/each}
	</ul>
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
		width: 80%;
	}
</style>
