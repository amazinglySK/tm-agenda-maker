import Meeting from '$models/MeetingModel.js';
import { connect, disconnect } from '$lib/db.js';

export async function load({ locals, params }) {
	await connect();
	let meetings = await Meeting.find({ club_id: params.id });
	meetings = meetings.map((m) => {
		let d = m.toObject();
		delete d._id;
		return d;
	});
	await disconnect();
	return { name: locals.user.name, meetings, id: params.id };
}
