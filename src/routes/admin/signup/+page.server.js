import { error, redirect } from '@sveltejs/kit';
import User from '$models/AdminModel';
import bcrypt from 'bcrypt';
import { connect, disconnect } from '$lib/db.js';

export const actions = {
	signup: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const username = data.get('username');
		const password = data.get('password');

		await connect();
		// TODO : Do some code validation
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
