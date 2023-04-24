import { Schema, model } from 'mongoose';
import { nanoid } from 'nanoid';

const ClubSchema = new Schema({
	name: String,
	club_id: { type: String, default: nanoid(10), required: true },
	invite_code: { type: String, default: nanoid(8), required: true },
	club_location: String,
	image_link: String
});

const ClubModel = model('club', ClubSchema);

export default ClubModel;
