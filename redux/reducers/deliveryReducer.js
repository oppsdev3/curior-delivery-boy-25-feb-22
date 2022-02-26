import { MARK_DELIVERED } from "../actionTypes"

const initialState={
    product:[]
}

export const deliveryReducer=(state=initialState, action)=>{
    switch(action.type){
        case MARK_DELIVERED:
            return{
                ...state,
                product:[...state.product, action.payload]
            }
        default:
            return state
    }
}