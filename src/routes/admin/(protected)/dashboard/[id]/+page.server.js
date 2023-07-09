import Meeting from '$models/MeetingModel.js';
import mongoose from 'mongoose';
import { MONGO_URL } from '$env/static/private';

export async function load({ params }) {
	await mongoose.connect(MONGO_URL);
	let meetings = await Meeting.find({ club_id: params.id });
	meetings = meetings.map((m) => {
		let d = m.toObject();
		delete d._id;
		return d;
	});
	console.log(meetings);
	await mongoose.disconnect();
	return { meetings, id: params.id };
}
