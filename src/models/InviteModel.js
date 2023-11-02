import { Schema, SchemaTypes, model, models } from 'mongoose';
import { nanoid } from 'nanoid';

const InviteSchema = new Schema({
	code: { type: String, default: () => nanoid(10) },
	from: { type: SchemaTypes.ObjectId, ref: 'admin' },
	inviter_name: String,
	expireAt: {
		type: Date,
		default: new Date(),
		expires: 3 * 60 * 60 // 3 hours in seconds
	}
});

const InviteModel = models['invite'] || model('invite', InviteSchema);

export default InviteModel;
