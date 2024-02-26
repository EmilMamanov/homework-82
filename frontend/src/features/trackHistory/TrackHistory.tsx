import React, { useEffect } from 'react';
import { Grid, Card, CardContent, Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchTrackHistory } from './trackHistoryThunk';
import { selectTrackHistory } from './trackHistorySlice';

const TrackHistory: React.FC = () => {
    const dispatch = useAppDispatch();
    const { trackHistory } = useAppSelector(selectTrackHistory);

    useEffect(() => {
        dispatch(fetchTrackHistory());
    }, [dispatch]);

    if (!trackHistory || !Array.isArray(trackHistory)) {
        return null;
    }

    return (
        <Grid container spacing={2}>
            {trackHistory.map((trackHistoryItem) => (
                <Grid item key={trackHistoryItem._id} xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{trackHistoryItem.track.title}</Typography>
                            <Typography variant="caption">{trackHistoryItem.datetime}</Typography>
                            <Button variant="contained" color="primary">
                                Play
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default TrackHistory;
