import { configureStore } from '@reduxjs/toolkit'
import BudgetReducer from '../features/budgetSlice'

export default configureStore({
    reducer: {
        budget: BudgetReducer,
    },
});


/*
The slice reducers were automatically passed to combineReducers()
The redux-thunk middleware was automatically added
Dev-mode middleware was added to catch accidental mutations
The Redux DevTools Extension was automatically set up
The middleware and DevTools enhancers were composed together and added to the store
*/