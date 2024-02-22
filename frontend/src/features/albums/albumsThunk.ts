import { createAsyncThunk } from '@reduxjs/toolkit';
import {Album} from '../../types';
import axiosApi from '../../axiosApi';

export const fetchAlbums = createAsyncThunk<Album[], string>(
    'albums/fetchByArtistId',
    async (artistId: string) => {
        const response = await axiosApi.get<Album[]>(`/albums?artist=${artistId}`);
        return response.data;
    }
);

