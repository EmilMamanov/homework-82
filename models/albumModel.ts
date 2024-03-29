import mongoose, { Types } from "mongoose";
import Artist from "./artistModel";

const Schema = mongoose.Schema;
const AlbumSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'Artist',
        required: true,
        validate: {
            validator: async (value: Types.ObjectId) => Artist.findById(value),
            message: 'Artist does not exist!',
        },
    },
    year: {
        type: Number,
        required: true,
    },
    coverImage: String,
});

const Album = mongoose.model('Album', AlbumSchema);


export default Album;