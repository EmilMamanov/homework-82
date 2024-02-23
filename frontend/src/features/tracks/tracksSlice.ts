import {Track} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {fetchTracks} from './tracksThunk.ts';

interface TracksState {
    tracks: Track[];
    fetchLoading: boolean;
    createLoading: boolean;
}

const initialState: TracksState = {
    tracks: [],
    fetchLoading: false,
    createLoading: false,
};

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTracks.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchTracks.fulfilled, (state, { payload: tracks }) => {
            state.fetchLoading = false;
            state.tracks = tracks;
        });
    },
});


export const tracksReducer = tracksSlice.reducer;
export const selectTracks = (state: RootState) => state.tracks.tracks;