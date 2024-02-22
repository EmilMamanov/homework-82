import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import {apiURL} from "../../constants.ts";
import imageNotAvailable from '../../../public/imageNotAvailable.png';

interface ArtistItemProps {
    artistId: string;
    name: string;
    photo: string | null;
}

const ArtistItem: React.FC<ArtistItemProps> = ({ artistId, name, photo }) => {
    let cardImage = imageNotAvailable;

    if (photo) {
        cardImage = apiURL + '/' + photo;
    }
    return (
        <Card>
            <Link to={`/artists/${artistId}/albums` } style={{ textDecoration: 'none', color: 'green' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={cardImage}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    );
};

export default ArtistItem;
