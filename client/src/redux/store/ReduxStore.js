import { configureStore } from '@reduxjs/toolkit'
import budgetSlice from '../reducers/budgetSlice';

const ReduxStore = configureStore({
    reducer: {
        budget: budgetSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these field paths in all actions
                ignoredActionPaths: ['payload'],
            },
        }),
})

export default ReduxStore;

/*
The slice reducers were automatically passed to combineReducers()
The redux-thunk middleware was automatically added
Dev-mode middleware was added to catch accidental mutations
The Redux DevTools Extension was automatically set up
The middleware and DevTools enhancers were composed together and added to the store
*/