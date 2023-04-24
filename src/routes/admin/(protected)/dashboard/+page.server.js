import User from '$models/AdminModel';
import Club from '$models/ClubModel';
import mongoose from 'mongoose';
import { MONGO_URL } from '$env/static/private';

export async function load(event) {
	await mongoose.connect(MONGO_URL);
	let user = await User.findOne({ _id: event.locals.user.id });
	console.log(await user.club_aggr);
	await mongoose.disconnect();
}
