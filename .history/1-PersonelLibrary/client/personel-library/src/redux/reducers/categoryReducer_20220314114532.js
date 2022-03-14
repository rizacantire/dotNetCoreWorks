import { ADD_CATEGORY, REMOVE_CATEGORY } from "../actions/categoryActions";
import {categoryItems} from "../initailValues/categoryItems"

const initialState = {
    categoryItems:categoryItems
}

export default function categoryReducer(state=initialState,{type,payload}){
    switch (type) {
        case ADD_CATEGORY:
            let category = state.categoryItems.find(c=>c.id === payload.id)
            if (category) {
                return{
                    ...state
                }
            } else {
                return{
                    ...state,
                    categoryItems:[...state.categoryItems,payload]
                }
            }
        case REMOVE_CATEGORY:
            return{
                ...state,
                categoryItems:state.categoryItems.filter(c=>c.id!==payload.id)
            }
    
        default:
            break;
    }
}