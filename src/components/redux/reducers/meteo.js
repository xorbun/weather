import { actionType } from "../actions"

const initialState={
    content:[],
   
}

const viewMeteo=(state=initialState, action)=>
{
    switch (action.type)
    {
        case actionType.VIEW_METEO:
            return{
                ...state,
                content:[ action.payload],
                
            }
        
            default:return state
    }
}
export default viewMeteo