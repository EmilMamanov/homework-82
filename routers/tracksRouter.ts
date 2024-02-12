import { Router } from 'express';
import Track from '../models/trackModel';
import { Track as TrackInterface } from "../types";

const tracksRouter = Router();

tracksRouter.get("/", async (req, res) => {
    try {
        let tracks;
        if (req.query.album) {
            tracks = await Track.find({ album: req.query.album }).populate('album', 'title');
        } else {
            tracks = await Track.find().populate('album', 'title');
        }
        return res.send(tracks);
    } catch (error) {
        return res.sendStatus(500);
    }
});

tracksRouter.post("/", async (req, res) => {
    const trackData:TrackInterface = {
        title: req.body.title,
        album: req.body.album,
        duration: req.body.duration,
    };

    const track = new Track(trackData);

    try {
        await track.save();
        return res.send(track);
    } catch (error) {
        return res.status(400).send(error);
    }
});

export default tracksRouter;
