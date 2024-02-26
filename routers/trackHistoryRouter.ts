import express from "express";
import User from '../models/userModel';
import Track from "../models/trackModel";
import TrackHistory from "../models/trackHistoryModel";
import { TrackHistory as TrackHistoryInterface } from '../types';
import auth, {RequestWithUser} from "../auth";

const trackHistoryRouter = express.Router();

trackHistoryRouter.post('/', auth, async (req: RequestWithUser, res) => {
    try {

    const { track } = req.body;

    if (!track) {
        return res.status(400).send({ error: 'Track ID required' });
    }

    const trackObject = await Track.findById(track);

    if (!trackObject) {
        return res.status(404).send({ error: 'Track not found' });
    }

        const trackHistoryData: TrackHistoryInterface = {
            user: req.body.user,
            track: req.body.track,
            datetime: new Date(),
        };

        const trackHistory = new TrackHistory(trackHistoryData);

        await trackHistory.save();

        return res.send({ message: 'success',
            trackHistory: {
                _id: trackHistory._id,
                user: req.body.user,
                track: req.body.track,
                datetime: trackHistory.datetime,},
        });
    } catch (error) {
        return res.status(500).send({ error: 'Internal Server Error' });
    }

});

trackHistoryRouter.get('/', auth, async (req: RequestWithUser, res) => {
    try {
        const user = req.user?._id;

        if (!user) {
            return res.status(401).send({ error: 'Not found!' });
        }

        const trackHistory = await TrackHistory.find({ user: user })
            .populate('track', 'title artist');

        return res.send({ message: 'success', trackHistory });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});

export default trackHistoryRouter;