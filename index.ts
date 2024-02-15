import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import config from "./config";

import usersRouter from './routers/usersRouter';
import albumsRouter from "./routers/albumsRouter";
import artistsRouter from "./routers/artistsRouter";
import tracksRouter from "./routers/tracksRouter";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.use('/albums', albumsRouter);
app.use('/artists', artistsRouter);
app.use('/tracks', tracksRouter);
app.use('/users', usersRouter);

const run = async () => {
    await mongoose.connect(config.mongoose.db);

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });

    process.on('exit', () => {
        mongoose.disconnect();
        console.log('disconnected');
    });
};

void run();


