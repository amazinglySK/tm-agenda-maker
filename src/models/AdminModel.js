import { SchemaTypes } from 'mongoose';
import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
	name: String,
	username: String,
	password: String
	// club_id: { type: SchemaTypes.ObjectId, ref: 'club' }
});

const UserModel = model('admin', UserSchema);

export default UserModel;
