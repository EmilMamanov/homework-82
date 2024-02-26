import {Artist} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {fetchArtists} from "./artistsThunk.ts";

interface ArtistsState {
    artists: Artist[];
    fetchLoading: boolean;
    createLoading: boolean;
}

const initialState: ArtistsState = {
    artists: [],
    fetchLoading: false,
    createLoading: false,
};

export const artistsSlice = createSlice({
    name: 'artists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArtists.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchArtists.fulfilled, (state, {payload: artists}) => {
            state.fetchLoading = false;
            state.artists = artists;
        });
    },
});

export const artistsReducer = artistsSlice.reducer;
export const selectArtists = (state: RootState) => state.artists.artists;