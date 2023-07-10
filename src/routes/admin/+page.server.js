import { connect, disconnect } from '$lib/db.js';
import bcrypt from 'bcrypt';
import User from '$models/AdminModel';
import { JWT_SECRET } from '$env/static/private';
import { error, redirect } from '@sveltejs/kit';
import { sign } from 'jsonwebtoken';

export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		await connect();
		const user = await User.findOne({ username });

		if (!user) {
			throw error(401, { message: 'User not found' });
		}

		if (await bcrypt.compare(password, user.password)) {
			await disconnect();
			let token = sign({ username: user.username, name: user.name, id: user._id }, JWT_SECRET);
			cookies.set('token', token, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 3 // 3 hours
			});
			throw redirect(303, '/admin/dashboard');
		} else {
			throw error(401, { message: 'Invalid credentials' });
		}
	}
};
