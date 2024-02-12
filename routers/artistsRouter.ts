import { Router } from 'express';
import Artist from '../models/artistModel';
import {uploadItemImage} from "../multer";

const artistsRouter = Router();

artistsRouter.get("/", uploadItemImage.single('image'), async (req, res) => {
    try {
        const artists = await Artist.find();
        return res.send(artists);
    } catch (error) {
        return res.sendStatus(500);
    }
});

artistsRouter.post("/", async (req, res) => {
    const artistData = {
        name: req.body.name,
        photo: req.file ? req.file.filename : null,
        information: req.body.information,
    };

    const artist = new Artist(artistData);

    try {
        await artist.save();
        return res.send(artist);
    } catch (error) {
        return res.status(400).send(error);
    }
});

export default artistsRouter;
