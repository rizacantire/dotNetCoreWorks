import {configureStore} from "@reduxjs/toolkit"
import authorReducer from "../reducers/authorSlice"
import categoryReducer from "../reducers/categorySlice"
export const store = configureStore({
    reducer : {
        authors:authorReducer,
        categories:categoryReducer
    }
})