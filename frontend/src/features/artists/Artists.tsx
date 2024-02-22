import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchArtists } from './artistsThunk.ts';
import { selectArtists } from "./artistsSlice.ts";
import ArtistItem from './ArtistItem.tsx';

const Artists: React.FC = () => {
    const dispatch = useAppDispatch();
    const artists = useAppSelector(selectArtists);

    useEffect(() => {
        dispatch(fetchArtists());
    }, [dispatch]);

    return (
        <Grid container spacing={2} style={{ margin: '16px', justifyContent: 'center' }}>
            {artists.map((artist) => (
                <Grid item key={artist._id} xs={12} sm={6} md={4} lg={3}>
                    <ArtistItem
                        artistId={artist._id}
                        name={artist.name}
                        photo={artist.photo || null}
                    />
                </Grid>
            ))}
            {artists.length === 0 && (
                <Typography variant="subtitle1" color="textSecondary">
                    No artists available.
                </Typography>
            )}
        </Grid>
    );
};

export default Artists;
