import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Grid, Typography, Card, CardContent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchTracks } from './tracksThunk';
import { selectTracks } from './tracksSlice';
import { addTrackHistory } from '../trackHistory/trackHistoryThunk.ts';
import { selectUserToken } from '../users/usersSlice';

const Tracks: React.FC = () => {
    const { albumId } = useParams<{ albumId: string }>();
    const dispatch = useAppDispatch();
    const tracks = useAppSelector(selectTracks);
    const userToken = useAppSelector(selectUserToken);

    useEffect(() => {
        if (albumId) {
            dispatch(fetchTracks(albumId));
        }
    }, [dispatch, albumId]);

    const handleAddClick = async (trackId: string) => {
        try {
            if (!userToken) {
                console.error("User is not authorized");
                return;
            }

            await dispatch(addTrackHistory({ user: userToken, track: trackId }));
        } catch (error) {
            //error
        }
    };

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
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleAddClick(track._id)}
                            >
                                Play
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Tracks;
