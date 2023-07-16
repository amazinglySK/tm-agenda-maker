import { json } from '@sveltejs/kit';

export async function GET({ cookies }) {
	await cookies.delete('token');
	return json({ location: '/' });
}
