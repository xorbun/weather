import { VIEW_METEO } from "../actions";
import {SET_CITY} from "../actions";

const initialState={
    content:[],
    cityname:"",
}

const viewMeteo=(state=initialState, action)=>
{
    switch (action.type)
    {
        case VIEW_METEO:
            return{
                ...state,
                content:[ action.payload],
                
            }
        case SET_CITY:
            return{
                ...state,
                cityname:[action.payload]
            }
            default:return state
    }
}
export default viewMeteo