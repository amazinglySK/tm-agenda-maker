import { redirect } from '@sveltejs/kit';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const token = event.cookies.get('token');
	const condition = event.route.id?.startsWith('/admin/(protected)');
	if (condition) {
		if (!token) throw redirect(303, '/admin/');
		const decoded = verify(token, JWT_SECRET);
		if (!decoded) {
			console.log('redirecting');
			throw redirect(303, '/admin/');
		}
		event.locals.user = decoded;
	}

	const response = await resolve(event);
	return response;
};
