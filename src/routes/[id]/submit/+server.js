import { json, redirect } from '@sveltejs/kit';
import { connect, disconnect } from '$lib/db.js';
import Meeting from '$models/MeetingModel.js';

export async function POST({ request, params }) {
	try {
		await connect();
		const { roles, name } = await request.json();
		console.log(roles, name, params.id);
		if (roles.length == 0) {
			throw Error;
		}
		const meeting = await Meeting.findOne({ uid: params.id });
		for (const i of roles) {
            const in_roster = meeting.roles[i].includes(name) || Object.values(meeting.role_players).includes(name)
			if (in_roster) {
				continue;
			}
			meeting.roles[i].push(name);
		}
		meeting.markModified('roles');
		await meeting.save();
		await disconnect();
		return json({
			success: true,
			location: '/'
		});
	} catch (err) {
		console.log(err);
		await disconnect();
		return json({ success: false, location: `/${params.id}/` });
	}
}
