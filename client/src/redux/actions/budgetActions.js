import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit'

export const addRecord = createAsyncThunk(
    'adopt/addRecord',
    (concept, amount, dateOfRecord, typeOfRecord, category) => {
        return async() => {
            await axios.post('http://localhost:5000/create', {concept, amount, dateOfRecord, typeOfRecord, category}).then(() => {
                console.log("success");
            })
        }
        
    }
)

export const extraBudget = {
    [addRecord.pending]: (state, action) => {
        state.status = 'loading'
    },
    [addRecord.fulfilled]: (state, action) => {
        state.status = 'success'
        state.budget = action.payload.data
    },
    [addRecord.rejected]: (state, action) => {
        state.status = 'failed'
    },
}

/* const budgetActions = {
    
    addRecord: (concept, amount, dateOfRecord, typeOfRecord, category) => {
            return async(dispatch) => {
                const response = await axios.post('https://localhost:5000/api/budget', {concept, amount, dateOfRecord, typeOfRecord, category})
                dispatch({type:'createRecord', payload: response.data.response, success: response.data.success})
            }
            
        }
    }
export default budgetActions; */