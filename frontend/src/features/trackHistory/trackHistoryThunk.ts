import { createAsyncThunk } from '@reduxjs/toolkit';
import { TrackHistory} from '../../types';
import axiosApi from '../../axiosApi';
import {selectUserToken} from "../users/usersSlice.ts";
import { RootState } from '../../app/store';

export const fetchTrackHistory = createAsyncThunk<TrackHistory[]>(
    'track_history/fetchAll',
    async (_, { getState }) => {
        const token = selectUserToken(getState() as RootState); // Получите токен из стейта пользователя
        const trackHistoryResponse = await axiosApi.get<TrackHistory[]>('/track_history', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return trackHistoryResponse.data;
    }
);

export const addTrackHistory = createAsyncThunk<TrackHistory, { user: string, track: string }>(
    'trackHistory/addTrackToHistory',
    async ({ user, track }, { getState }) => {
        const token = selectUserToken(getState() as RootState);

        const response = await axiosApi.post<TrackHistory>(
            '/track_history',
            { user, track },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;
    }
);


