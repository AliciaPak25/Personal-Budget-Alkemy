import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getAllRecords = createAsyncThunk('record/getAllRecords', async () => {
    return fetch('http://localhost:5000/records').then((res) =>
    res.json(),
    );
});

const budgetSlice = createSlice({
    name: "budget",
    initialState: {
        budget: [],
        loading: false,
        error: null,
        edit: false,
    },
    extraReducers: {
        [getAllRecords.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllRecords.fulfilled]: (state, action) => {
            state.loading = false;
            state.budget = [action.payload.data];
        },
        [getAllRecords.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default budgetSlice.reducer;