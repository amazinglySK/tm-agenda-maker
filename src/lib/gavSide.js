export async function checkMeetingCode(id, code) {
	const response = await fetch(`/${id}/check`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ meeting_code: code })
	});
	if (response.status == 200) {
		return true;
	}
	return false;
}
