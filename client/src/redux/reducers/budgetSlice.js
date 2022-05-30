import { createSlice } from '@reduxjs/toolkit'
import { extraBudget } from '../actions/budgetActions';

const initialState = {
    budget: [],
    status: 'loading',
    error: '',
}

const budgetSlice = createSlice({
    name: 'budget', // name of the state
    initialState,
    reducers: {},
    extraReducers: { ...extraBudget },
})

export default budgetSlice.reducer