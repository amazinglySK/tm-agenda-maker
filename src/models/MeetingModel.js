import { Schema, model, models } from 'mongoose';

const MeetingSchema = new Schema({
	number: Number,
	date: Date,
	uid: String,
	roles: { type: Object },
	club_id: { type: String, ref: 'club' },
	meeting_header_text: String,
	meeting_footer_text: String
});

MeetingSchema.virtual('available_roles').get(function () {
	let roles = Object.entries(this.roles).map(([key, value]) => {
		if (!value) {
			return key;
		}
	});
	return roles;
});

const MeetingModel = models['meeting'] ?? model('meeting', MeetingSchema);

export default MeetingModel;
