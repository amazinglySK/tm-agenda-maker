import Meeting from '$models/MeetingModel';
import { connect, disconnect } from '$lib/db.js';

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
	// TODO : Finish the save logic using a for loop
	save: async ({ request, response }) => {
		const data = await request.formData();
		const speaker = data.get('Speaker');
	}
};
