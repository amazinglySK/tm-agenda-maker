import Meeting from '$models/MeetingModel';
import User from '$models/AdminModel';
import mongoose from 'mongoose';
import { MONGO_URL } from '$env/static/private';

export const getAllAvailableRoles = async (meeting_id) => {
	try {
		await connect();
		const meeting = await Meeting.findOne({ uid: meeting_id });
		if (!meeting) {
			console.log('No meeting found');
			return false;
		}
		const roles = await meeting.available_roles;
		await disconnect();
		return [roles, meeting.max_choice];
	} catch (err) {
		console.error(err);
		return [false, false];
	}
};

export const loginUser = async (name, password) => {
	try {
		await mongoose.connect(MONGO_URL);
		const user = await User.findOne({ name: name });
		if (!user) {
			console.log('No user found');
			return false;
		}
		await mongoose.disconnect();
		return roles;
	} catch (err) {
		console.error(err);
		return false;
	}
};

export const connect = async () => {
	await mongoose.connect(MONGO_URL);
};

export const disconnect = async () => {
	await mongoose.disconnect();
};
