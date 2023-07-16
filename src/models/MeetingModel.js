import { Schema, model, models } from 'mongoose';
import { nanoid } from 'nanoid';

const MeetingSchema = new Schema({
	number: Number,
	date: Date,
	max_choice: Number,
	passcode: { type: String, default: nanoid(6), required: true },
	uid: { type: String, default: nanoid(8), required: true },
	roles: { type: Object },
	role_players: { type: Object },
	club_id: { type: String, ref: 'club' }
});

MeetingSchema.virtual('available_roles').get(function () {
	let roles = Object.entries(this.roles).map(([key, value]) => {
		if (value.length < this.max_choice) {
			return key;
		}
	});
	return roles;
});

const MeetingModel = models['meeting'] ?? model('meeting', MeetingSchema);

export default MeetingModel;
