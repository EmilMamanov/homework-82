import { createAsyncThunk } from '@reduxjs/toolkit';
import { Track } from '../../types';
import axiosApi from '../../axiosApi';

export const fetchTracks = createAsyncThunk<Track[], string>(
    'tracks/fetchByAlbumId',
    async (albumId: string) => {
        const response = await axiosApi.get<Track[]>(`/tracks?album=${albumId}`);
        return response.data;
    }
);

