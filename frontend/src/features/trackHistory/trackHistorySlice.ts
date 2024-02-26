import {TrackHistory} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {addTrackHistory, fetchTrackHistory} from "./trackHistoryThunk.ts";

interface TrackHistoryState {
    trackHistories: TrackHistory[];
    fetchLoading: boolean;
    createLoading: boolean;
}

const initialState: TrackHistoryState = {
    trackHistories: [],
    fetchLoading: false,
    createLoading: false,
};

export const trackHistorySlice = createSlice({
    name: 'trackHistory',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTrackHistory.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchTrackHistory.fulfilled, (state, { payload: trackHistory }) => {
            state.fetchLoading = false;
            state.trackHistories = trackHistory;
        });
        builder.addCase(addTrackHistory.pending, (state) => {
            state.createLoading = true;
        });
        builder.addCase(addTrackHistory.fulfilled, (state, { payload }) => {
            state.createLoading = false;
            state.trackHistories = [...state.trackHistories, payload];
        });
    },
});




export const trackHistoryReducer = trackHistorySlice.reducer;
export const selectTrackHistory = (state: RootState) => state.trackHistory.trackHistories;
