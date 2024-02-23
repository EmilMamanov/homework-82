import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Card, CardContent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchTracks } from './tracksThunk';
import { selectTracks } from './tracksSlice';

const Tracks: React.FC = () => {
    const { albumId } = useParams<{ albumId: string }>();
    const dispatch = useAppDispatch();
    const tracks = useAppSelector(selectTracks);

    useEffect(() => {
        if (albumId) {
            dispatch(fetchTracks(albumId));
        }
    }, [dispatch, albumId]);

    return (
        <Grid container spacing={2}>
            {tracks.map((track) => (
                <Grid item key={track._id} xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                Track {track.number}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {track.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Duration: {track.duration}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Tracks;