import { error, redirect } from '@sveltejs/kit';
import User from '$models/AdminModel';
import Invite from '$models/InviteModel.js';
import bcrypt from 'bcrypt';
import { connect, disconnect } from '$lib/db.js';

export async function load({ params }) {
	try {
		const invite_code = params.code;
		const invite = await Invite.findOne({ code: invite_code });
		if (!invite) {
			throw error(403, { message: 'Invite is either expired or invalid' });
		}
		return { invite_code, from: invite.inviter_name };
	} catch (err) {
		console.log(err);
		throw error(500, { message: 'Oops something went wrong' });
	}
}

export const actions = {
	signup: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const username = data.get('username');
		const password = data.get('password');

		await connect();
		const user = await User.findOne({ $or: [{ username: username }, { name: name }] });

		if (user) {
			throw error(409, { message: 'User already exists' });
		}

		const pwd = await bcrypt.hash(password, 10);
		let newUser = new User({ name, username, password: pwd });
		await newUser.save();
		await disconnect();
		throw redirect(303, '/admin/');
	}
};
