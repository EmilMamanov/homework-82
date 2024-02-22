import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import {apiURL} from "../../constants.ts";
import imageNotAvailable from '../../../public/imageNotAvailable.png';

interface AlbumItemProps {
    albumId: string;
    title: string;
    coverImage: string | null;
    year: number;
    artistId: string;
}

const AlbumItem: React.FC<AlbumItemProps> = ({ albumId, title, coverImage, year, artistId }) => {
    let cardImage = imageNotAvailable;

    if (coverImage) {
        cardImage = apiURL + '/' + coverImage;
    }
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={cardImage}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Year: {year}
                </Typography>
                <Link to={`/artists/${artistId}/albums/${albumId}/tracks`} style={{ textDecoration: 'none', color: 'green' }}>
                    View Tracks
                </Link>
            </CardContent>
        </Card>
    );
};

export default AlbumItem;
