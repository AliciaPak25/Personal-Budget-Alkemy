const initialState = {
    budgets: [],
    budget: [],
    auxiliar: []
}

const budgetReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'fetch':
            return {
                ...state,
                budgets: action.payload,
            }
        
        case 'fetchOneRecord':
            const findId = action.payload.budgets.find(record=> record.id === action.payload.id)
            return{
                ...state,
                budget: findId
            }

        case 'createRecord':
            let budgets = [...state.budgets]
            budgets.push(action.payload)
            return {
                ...state,
                budgets,
                auxiliar:[...budgets]
            }
            

        case 'deleteRecord':
            return {
                ...state,
                budgets: action.payload,
            }
                
        default:
            return state

    }






}

export default budgetReducer;