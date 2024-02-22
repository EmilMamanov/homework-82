import {User} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {register} from "./usersThunk.ts";

interface UsersState {
    user: User | null ;
    registerLoading: boolean;
    registerError: boolean;
}

const initialState: UsersState = {
    user: null,
    registerLoading: false,
    registerError: false,
};

export const usersSlice = createSlice( {
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.registerLoading = true;
            state.registerError = false;

        });
        builder.addCase(register.fulfilled, (state, {payload: user}) => {
            state.registerLoading = false;
            state.user = user;

        });
        builder.addCase(register.rejected, (state) => {
            state.registerLoading = false;
            state.registerError = true;

        })
    }
});

export const usersReducer = usersSlice.reducer;

export const selectorUser = (state: RootState) => state.users.user;
export const selectorRegisterLoading = (state: RootState) => state.users.registerLoading;
export const selectorRegisterError = (state: RootState) => state.users.registerError;
