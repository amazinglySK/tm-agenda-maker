import { error } from '@sveltejs/kit';
import { getAllAvailableRoles } from '../../lib/db.js';

export async function load({ params }) {
	const meeting_id = params.id;
	const roles_got = await getAllAvailableRoles(meeting_id);
	if (!roles_got) {
		throw error(400, { message: 'Meeting not found' });
	}
	const roleObjects = roles_got.map((r) => {
		return { role: r, selected: false };
	});
	return {
		roles_loaded: roleObjects
	};
}
