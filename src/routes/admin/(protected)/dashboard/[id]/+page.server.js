import Meeting from '$models/MeetingModel.js';
import Club from '$models/ClubModel.js';
import { connect, disconnect } from '$lib/db.js';
import ClubModel from '$models/ClubModel.js';
import { redirect } from '@sveltejs/kit';

export async function load({ locals, params }) {
	await connect();
	let meetings = await Meeting.find({ club_id: params.id });
	let club = await Club.findOne({ club_id: params.id });

	meetings = meetings.map((m) => {
		let d = m.toObject();
		delete d._id;
		return d;
	});
	await disconnect();
	return { name: locals.user.name, meetings, id: params.id, club_invite_code: club.invite_code };
}

export const actions = {
	delete: async ({ params }) => {
		const club_id = params.id;
		await connect();
		await ClubModel.findOneAndDelete({ club_id });
		await disconnect();
		throw redirect(303, '/admin/dashboard');
	}
};
