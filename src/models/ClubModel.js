import { SchemaTypes } from 'mongoose';
import { Schema, model } from 'mongoose';

const ClubSchema = new Schema({
	name: String,
	club_id: { type: SchemaTypes.ObjectId, ref: 'club' },
	managers: { type: [{ type: SchemaTypes.ObjectId, ref: 'admin' }] },
	invite_code: String
});

const ClubModel = model('admin', ClubSchema);

export default ClubModel;
