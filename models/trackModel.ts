import mongoose, { Types } from "mongoose";
import Album from "./albumModel";


const Schema = mongoose.Schema;
const TrackSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album',
        required: true,
        validate: {
            validator: async (value: Types.ObjectId) => Album.findById(value),
            message: 'Album does not exist!',
        },
    },
    duration: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    }
});

const Track = mongoose.model('Track', TrackSchema);


export default Track;