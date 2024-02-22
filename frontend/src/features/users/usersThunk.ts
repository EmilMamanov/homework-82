import {createAsyncThunk} from "@reduxjs/toolkit";
import {RegisterMutation} from "../../types";
import axiosApi from "../../axiosApi.ts";

export const register = createAsyncThunk(
    'users/register',
    async (registerMutation: RegisterMutation) => {
        const response = await axiosApi.post('/users', registerMutation);
        return response.data;
    }
);

