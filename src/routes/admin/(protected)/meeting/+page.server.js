import { error, redirect } from '@sveltejs/kit';
import User from '$models/AdminModel';
import Club from '$models/ClubModel';
import mongoose from 'mongoose';
import { MONGO_URL } from '$env/static/private';

export const actions = {
	create: async ({ request, locals }) => {
		const data = await request.formData();
		for (const [role, checked] of data.entries()) {
			console.log(role, checked);
			// Do something
		}
	}
};
