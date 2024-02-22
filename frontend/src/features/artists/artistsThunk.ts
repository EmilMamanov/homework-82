import { createAsyncThunk } from '@reduxjs/toolkit';
import { Artist } from '../../types';
import axiosApi from '../../axiosApi';

export const fetchArtists = createAsyncThunk<Artist[]>(
    'artists/fetchAll',
    async () => {
        const artistsResponse = await axiosApi.get<Artist[]>('/artists');
        return artistsResponse.data;
    }
);

