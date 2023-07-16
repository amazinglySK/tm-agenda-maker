import Meeting from '$models/MeetingModel.js';
import { json } from '@sveltejs/kit';
import { connect, disconnect } from '$lib/db.js';

export async function POST({ request, params }) {
	const { meeting_code } = await request.json();
	const { id } = params;
	await connect();
	const found = await Meeting.findOne({ uid: id });
	await disconnect();
	if (!found) {
		return json({ found: false }, { status: 403 });
	}

	if (found.passcode !== meeting_code) {
		return json({ found: true, matched: false }, { status: 403 });
	}

	return json({ found: true, matched: true }, { status: 200 });
}
