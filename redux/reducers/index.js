import {combineReducers} from "redux";
import { deliveryReducer } from "./deliveryReducer";
import { userReducer } from "./userReducer";

export const reducers = combineReducers({
    "user": userReducer,
    "product": deliveryReducer
})