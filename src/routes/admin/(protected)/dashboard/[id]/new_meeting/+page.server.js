import { error, redirect } from '@sveltejs/kit';
import mongoose from 'mongoose';
import { MONGO_URL } from '$env/static/private';
import Meeting from '$models/MeetingModel';

export const actions = {
	create: async ({ request, params }) => {
		await mongoose.connect(MONGO_URL);
		const club_id = params.id;
		const data = await request.formData();
		const meetingNo = Number(data.get('meeting_no'));
		const maxChoice = Number(data.get('max_choice'));
		const date = new Date(data.get('date'));
		const roles = {};
		data.delete('meeting_no');
		data.delete('max_choice');
		data.delete('date');
		for (const [role, checked] of data.entries()) {
			if (checked === 'on') {
				roles[role] = [];
			}
		}
		const newMeeting = new Meeting({
			number: meetingNo,
			date,
			max_choice: maxChoice,
			roles,
			club_id
		});

		await newMeeting.save();
		await mongoose.disconnect();
		throw redirect(303, `/admin/dashboard/${club_id}`);
	}
};
