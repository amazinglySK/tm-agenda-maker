import { config } from 'dotenv';
import Meeting from '$models/MeetingModel.js';
import mongoose from 'mongoose';

config();

async function SeedMeetings() {
	await mongoose.connect(process.env.MONGO_URL);
	let meetings = [
		{
			number: 123,
			date: Date.now(),
			uid: '2413',
			roles: {
				Speaker: '',
				Timer: ''
			},
			meeting_header_text: '',
			meeting_footer_text: ''
		},
		{
			number: 321,
			date: Date.now(),
			uid: '2423',
			roles: {
				Speaker: '',
				Timer: '',
				'Ah Counter': ''
			},
			meeting_header_text: '',
			meeting_footer_text: ''
		}
	];

	for (const i of meetings) {
		const m = new Meeting(i);
		await m.save();
	}
	await mongoose.disconnect();
}

SeedMeetings();
