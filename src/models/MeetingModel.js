import { Schema, model, models } from 'mongoose';
import { nanoid } from 'nanoid';

const createPasscode = () => {
	return nanoid(6);
};

const createUID = () => {
	return nanoid(8);
};

const MeetingSchema = new Schema({
	number: Number,
	date: Date,
	max_choice: Number,
	passcode: { type: String, default: createPasscode, required: true },
	uid: { type: String, default: createUID, required: true },
	roles: { type: Object },
	role_players: { type: Object },
	club_id: { type: String, ref: 'club' },
	expireAt: {
		type: Date,
		default: new Date(),
		expires: 4 * 7 * 24 * 60 * 60 // 4 weeks in seconds
	}
});

MeetingSchema.virtual('available_roles').get(function () {
	let roles = Object.entries(this.roles).map(([key, value]) => {
		if (value.length < this.max_choice) {
			return key;
		}
	});
	return roles;
});

const MeetingModel = models['meeting'] || model('meeting', MeetingSchema);

export default MeetingModel;
