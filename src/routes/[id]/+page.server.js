import { error } from '@sveltejs/kit';
import { getAllAvailableRoles } from '../../lib/db.js';

export async function load({ params }) {
	const meeting_id = params.id;
	const [roles_got, max_choice] = await getAllAvailableRoles(meeting_id);
	if (!roles_got) {
		throw error(400, { message: 'Meeting not found' });
	}
	console.log(roles_got);
	const roleObjects = roles_got.map((r) => {
		return { role: r, selected: false };
	});
	return {
		roles_loaded: roleObjects,
		max_choice
	};
}
