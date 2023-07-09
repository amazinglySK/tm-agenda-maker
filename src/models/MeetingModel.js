import { Schema, model, models } from 'mongoose';
import { nanoid } from 'nanoid';

const MeetingSchema = new Schema({
	number: Number,
	date: Date,
	max_choice: Number,
	uid: { type: String, default: nanoid(8), required: true },
	roles: { type: Object },
	club_id: { type: String, ref: 'club' }
});

MeetingSchema.virtual('available_roles').get(function () {
	let roles = Object.entries(this.roles).map(([key, value]) => {
		if (value.length < this.max_cap) {
			return key;
		}
	});
	return roles;
});

const MeetingModel = models['meeting'] ?? model('meeting', MeetingSchema);

export default MeetingModel;
