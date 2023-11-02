<header>
	<h1 class="title">TM Agenda Maker</h1>
</header>
<main>
	<div class="left">
		<p>
			tm-agenda-maker is a project made to simplify toastmaster meeting agendas. With <span
				class="special">polling and other management options</span
			>, club managers can cruise through making the agenda.
		</p>
		<p>
			With the hassle of meeting roles taken away, club managers can focus on what really matters to
			them - <span class="special">the quality</span>.
		</p>
		<span class="note"
			>* The project is in it's beta stage at the moment. You need a referral code/link from us to
			access the platform.</span
		>
	</div>
	<div class="right">
		<img class="hero-img" src="/hero.svg" alt="" />
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3rem;
		max-width: 60%;
		margin: 2rem auto;
	}

	.left {
		width: 60%;
		font-size: 2rem;
	}

	.special {
		color: var(--light-accent);
		font-size: 2.2rem;
	}

	.note {
		font-size: 0.7rem;
		color: #444444;
	}

	.hero-img {
		width: 100%;
	}

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

	@media (max-width: 1400px) {
		main {
			flex-direction: column-reverse;
		}
	}
</style>
