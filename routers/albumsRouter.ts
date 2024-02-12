import { Router, } from 'express';
import Album from '../models/albumModel';
import {uploadItemImage} from '../multer';
import { Album as AlbumInterface } from "../types";

const albumsRouter = Router();

albumsRouter.get("/", async (req, res) => {
    try {
        let albums;
        if (req.query.artist) {
            albums = await Album.find({ artist: req.query.artist }).populate('artist', 'name');
        } else {
            albums = await Album.find().populate('artist', 'name');
        }
        return res.send(albums);
    } catch (error) {
        return res.sendStatus(500);
    }
});

albumsRouter.post("/", uploadItemImage.single('image'),async (req, res) => {
    const albumData: AlbumInterface  = {
        title: req.body.title,
        artist: req.body.artist,
        year: req.body.year,
        coverImage: req.file ? req.file.filename : null,
    };

    const album = new Album(albumData);

    try {
        await album.save();
        return res.send(album);
    } catch (error) {
        return res.status(400).send(error);
    }
});

albumsRouter.get("/:id", async (req, res) => {
    try {
        const album = await Album.findById(req.params.id).populate('artist', 'name');
        if (!album) {
            return res.status(404).json({ error: 'Album not found' });
        }
        return res.send(album);
    } catch (error) {
        return res.status(500).send(error);
    }
});

export default albumsRouter;
