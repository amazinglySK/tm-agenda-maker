<script>
	import Button from './Button.svelte';
	import { goto } from '$app/navigation';

	const Logout = async () => {
		const response = await fetch('/logout');
		let json = await response.json();
		goto(json.location);
	};
</script>

<Button handler={Logout}>Logout</Button>
