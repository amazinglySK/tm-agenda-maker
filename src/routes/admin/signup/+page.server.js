import { error, redirect } from '@sveltejs/kit';
import User from '../../../models/AdminModel';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { MONGO_URL } from '$env/static/private';

export const actions = {
	signup: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const username = data.get('username');
		const password = data.get('password');

		await mongoose.connect(MONGO_URL);
		// TODO : Do some code validation
		const user = await User.findOne({ $or: [{ username: username }, { name: name }] });

		if (user) {
			throw error(409, { message: 'User already exists' });
		}

		const pwd = await bcrypt.hash(password, 10);
		let newUser = new User({ name, username, password: pwd });
		await newUser.save();
		await mongoose.disconnect();
		throw redirect(303, '/admin/');
	}
};
