import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "../reducers/categoryReducer";

const rootReducer = combineReducers({
    category : categoryReducer
})

export default rootReducer;