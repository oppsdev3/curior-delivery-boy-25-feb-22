import {ADD_USER, DELETE_USER, MARK_DELIVERED} from "./actionTypes"

export const add_user =(user)=>{
    return{
        type: ADD_USER,
        payload: user
    }
}

export const remove_user = ()=>{
    return{
        type: DELETE_USER
    }
}

export const mark_delivered=(product)=>{
    return{
        type: MARK_DELIVERED,
        payload: product
    }
}