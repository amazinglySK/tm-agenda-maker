import { Schema, model, models } from 'mongoose';
import { nanoid } from 'nanoid';

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

// TODO : Add a pre() for when a club is deleted it's reference is deleted in AdminModel

const ClubModel = models.club || model('club', ClubSchema);

export default ClubModel;
