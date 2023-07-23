import { connect, disconnect } from '$lib/db.js';
import Club from '$models/ClubModel.js';
import Admin from '$models/AdminModel.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
	join: async ({ locals, request }) => {
		const formD = await request.formData();
		const code = formD.get('club_code');
		await connect();
		const club = await Club.findOne({ invite_code: code });

		if (!club) {
			return { failed: true, message: 'Incorrect invite code' };
		}

		const res = await Admin.findOne({ _id: locals.user.id });

		if (!res) {
			return { failed: true, message: 'No user found' };
		}

		res.clubs.push(club._id);
		res.markModified('clubs');
		await res.save();
		await disconnect();

		throw redirect(303, '/admin/dashboard');
	}
};
