import mongoose, { Types } from "mongoose";
import Track from "./trackModel";
import User from "./userModel";


const Schema = mongoose.Schema;

const TrackHistorySchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        validate: {
            validator: async (value: Types.ObjectId) => User.findById(value),
            message: 'Category does not exist!',
        }
    },

    track: {
        type: Schema.Types.ObjectId,
        ref: 'Track',
        required: true,
        validate: {
            validator: async (value: Types.ObjectId) => Track.findById(value),
            message: 'Category does not exist!',
        }
    },

    datetime: {
        type: Date,
        required: true,
    }
});

const TrackHistory = mongoose.model('TrackHistory', TrackHistorySchema);


export default TrackHistory;