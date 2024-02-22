import mongoose from 'mongoose';
import config from './config';
import Album from './models/albumModel';
import Artist from './models/artistModel';
import Track from './models/trackModel';

const dropCollection = async (
    db: mongoose.Connection,
    collectionName: string,
) => {
    try {
        await db.dropCollection(collectionName);
    } catch (e) {
        console.log(`Collection ${collectionName} was missing, skipping drop...`);
    }
};

const run = async () => {
    await mongoose.connect(config.mongoose.db);
    const db = mongoose.connection;

    const collections = ['tracks', 'artists', 'albums'];

    for (const collectionName of collections) {
        await dropCollection(db, collectionName);
    }

    const artistPortugal = await Artist.create({
        name: 'Portugal. the Man',
        information: 'Portugal. The Man is an American indie rock band from Wasilla, Alaska.',
        photo: 'fixtures/portugaltheman.jpg',
    });

    const albumEvilFriends = await Album.create({
        title: 'Evil Friends',
        artist: artistPortugal._id,
        year: 2013,
        coverImage: 'fixtures/evilfriends.jpg',
    });

    const albumWoodstock = await Album.create({
        title: 'Woodstock',
        artist: artistPortugal._id,
        year: 2017,
        coverImage: 'fixtures/woodstock.jpg',
    });

    await Track.create({
        title: 'Plastic Soldiers',
        album: albumEvilFriends._id,
        duration: '5:04',
    });

    await Track.create({
        title: 'Modern Jesus',
        album: albumEvilFriends._id,
        duration: '5:04',
    });

    await Track.create({
        title: 'In one ear',
        album: albumEvilFriends._id,
        duration: '5:04',
    });

    await Track.create({
        title: 'Judas',
        album: albumEvilFriends._id,
        duration: '5:04',
    });

    await Track.create({
        title: 'Creep in a T-Shirt',
        album: albumEvilFriends._id,
        duration: '3:53',
    });

    await Track.create({
        title: 'Feel it still',
        album: albumWoodstock._id,
        duration: '2:43',
    });

    await Track.create({
        title: 'So young',
        album: albumWoodstock._id,
        duration: '4:07',
    });

    await Track.create({
        title: 'Easy Tiger',
        album: albumWoodstock._id,
        duration: '3:38',
    });

    await Track.create({
        title: 'Tidal Wave',
        album: albumWoodstock._id,
        duration: '3:32',
    });

    await Track.create({
        title: 'Rich Friends',
        album: albumWoodstock._id,
        duration: '3:42',
    });

    const artistCageTheElephant = await Artist.create({
        name: 'Cage the Elephant',
        information: 'Cage the Elephant is an American rock band from Bowling Green, Kentucky.',
        photo: 'fixtures/cagetheelephant.jpg',
    });

    const albumSocialCues = await Album.create({
        title: 'Social Cues',
        artist: artistCageTheElephant._id,
        year: 2019,
        coverImage: 'fixtures/socialcues.jpg',
    });

    await Track.create({
        title: 'Broken Boy',
        album: albumSocialCues._id,
        duration: '3:48',
    });

    await Track.create({
        title: 'Social Cues',
        album: albumSocialCues._id,
        duration: '3:39',
    });

    await Track.create({
        title: 'Black Madonna',
        album: albumSocialCues._id,
        duration: '3:28',
    });

    await Track.create({
        title: 'Night Running',
        album: albumSocialCues._id,
        duration: '3:28',
    });

    const albumCageTheElephant = await Album.create({
        title: 'Cage the Elephant',
        artist: artistCageTheElephant._id,
        year: 2008,
            coverImage: 'fixtures/cagetheelephantal.jpg',
    });

    await Track.create({
        title: 'In One Ear',
        album: albumCageTheElephant._id,
        duration: '4:03',
    });

    await Track.create({
        title: 'Aint No Rest for the Wicked',
        album: albumCageTheElephant._id,
        duration: '2:55',
    });

    await Track.create({
        title: 'Back Against the Wall',
        album: albumCageTheElephant._id,
        duration: '3:48',
    });

    await Track.create({
        title: 'Tiny Little Robots',
        album: albumCageTheElephant._id,
        duration: '4:09',
    });

    await Track.create({
        title: 'Back Stabbin Betty',
        album: albumCageTheElephant._id,
        duration: '3:35',
    });

    await db.close();
};

void run();