import { error, redirect } from '@sveltejs/kit';
import User from '$models/AdminModel';
import Club from '$models/ClubModel';
import { connect, disconnect } from '$lib/db.js';

export const actions = {
	create: async ({ request, locals }) => {
		const data = await request.formData();
		const club_name = data.get('club_name');
		const club_location = data.get('club_location');
		const image_link = data.get('image_link');

		await connect();

		let new_club = new Club({ name: club_name, club_location, image_link });
		let saved = await new_club.save();
		const user = await User.findOne({ _id: locals.user.id });
		user.clubs.push(saved._id);
		await user.save();

		await disconnect();
		throw redirect(303, '/admin/dashboard');
	}
};
