import User from '$models/AdminModel';
import { connect, disconnect } from '$lib/db.js';

export async function load(event) {
	await connect();
	let user = await User.findOne({ _id: event.locals.user.id });
	let clubs = await user.club_aggr;
	await disconnect();
	return {
		clubs
	};
}
