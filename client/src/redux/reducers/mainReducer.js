import { combineReducers } from "redux";
import budgetReducer from './budgetReducer';
import expensesReducer from './expensesReducer';
import incomesReducer from './incomesReducer';
import usersReducer from './usersReducer';

const mainReducer = combineReducers({
    budgetReducer,
    expensesReducer,
    incomesReducer,
    usersReducer
});

export default mainReducer;