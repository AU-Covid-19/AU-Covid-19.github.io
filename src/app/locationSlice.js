import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Locations from "../logic/LocationsHandler";
import STATUS from './status';

const initialState = {
    id: 15,
    data: null,
    status: STATUS.LOADING,
}

export const downloadAsync = createAsyncThunk(
    "location/download",
    async () => {
        const data = await Locations.getLocation(0);
        return data;
    }
)

export const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.id = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(downloadAsync.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(downloadAsync.fulfilled, (state, action) => {
                state.status = STATUS.READY;
                state.data = action.payload;
            })
    }
})

export const { setLocation } = locationSlice.actions;

export const selectStatus = (state) => state.location.status;
export const selectID = (state) => state.location.id;
export const selectData = (state) => state.location.data;

export default locationSlice.reducer;