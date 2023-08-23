import { Schema, model, models } from 'mongoose';
import AdminModel from './AdminModel';
import { nanoid } from 'nanoid';
import MeetingModel from './MeetingModel';

const createClubID = () => {
	return nanoid(10);
};

const createClubInvite = () => {
	return nanoid(8);
};

const ClubSchema = new Schema({
	name: String,
	club_id: { type: String, default: createClubID, required: true },
	invite_code: { type: String, default: createClubInvite, required: true },
	club_location: String,
	image_link: String
});

ClubSchema.post('findOneAndDelete', async function (doc) {
	let doc_id = doc._id;
	let club_id = doc.club_id;
	try {
		const res = await AdminModel.updateMany(
			{ clubs: doc_id },
			{
				$pullAll: {
					clubs: [doc_id]
				}
			}
		);
		await MeetingModel.deleteMany({ club_id });
	} catch (err) {
		console.log(err);
	}
});
const ClubModel = models.club || model('club', ClubSchema);

export default ClubModel;
