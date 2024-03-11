import { actionType } from "../actions"

const initialState={
    content:[],
   
}

const viewNews=(state=initialState,action)=>
{
    switch(action.type)
    {
        case actionType.VIEW_NEWS:
        return{
            ...state,content:[action.payload],
        }
        default:return state
    }
}
export default viewNews