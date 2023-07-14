import Meeting from '$models/MeetingModel';
import { connect, disconnect } from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const { id } = params;
	await connect();
	let meeting = await Meeting.findOne({ uid: id });
	meeting = meeting.toObject();
	delete meeting._id;
	await disconnect();

	return { meeting };
}

export const actions = {
	save: async ({ request, params }) => {
		await connect();
		const meeting_id = params.id;
		const meeting = await Meeting.findOne({ uid: meeting_id });
		const data = await request.formData();
		for (const [role, name] of data) {
			// TODO : Check if it's not "none" chosen
			meeting.role_players[role] = name;
		}
		meeting.markModified('role_players');
		await meeting.save();
		await disconnect();
		throw redirect(303, '/admin/dashboard/');
	}
};
