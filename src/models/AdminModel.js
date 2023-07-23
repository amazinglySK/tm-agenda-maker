import { SchemaTypes } from 'mongoose';
import { Schema, model, models } from 'mongoose';
import ClubModel from './ClubModel';

const UserSchema = new Schema({
	name: String,
	username: String,
	password: String,
	clubs: { type: [{ type: SchemaTypes.ObjectId, ref: 'club' }], default: [] }
});

UserSchema.virtual('club_aggr').get(async function () {
	let clubs = await Promise.all(
		this.clubs.map(async (club) => {
			const cl = await ClubModel.findOne({ _id: club });
			let json = cl.toJSON();
			delete json['_id'];
			return json;
		})
	);

	return clubs;
});

const UserModel = models.admin || model('admin', UserSchema);

export default UserModel;
