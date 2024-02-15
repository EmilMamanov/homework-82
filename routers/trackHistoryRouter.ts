import express from "express";
import User from '../models/userModel';
import Track from "../models/trackModel";
import TrackHistory from "../models/trackHistoryModel";
import { TrackHistory as TrackHistoryInterface } from '../types';

const trackHistoryRouter = express.Router();

trackHistoryRouter.post('/', async (req, res) => {
    try {
    const token = req.get('Authorization');

    if (!token) {
        return res.status(401).send({error: 'No token sent'});
    }


    const user = await User.findOne({token});

    if (!user) {
        return res.status(401).send({error: 'Wrong token!'});
    }

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
                datetime: req.body.datetime,},
        });
    } catch (error) {
        return res.status(500).send({ error: 'Internal Server Error' });
    }

});

export default trackHistoryRouter;