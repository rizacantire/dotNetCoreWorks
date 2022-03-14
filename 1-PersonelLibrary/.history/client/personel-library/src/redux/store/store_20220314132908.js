import {configureStore} from "@reduxjs/toolkit"
import authorReducer from "../reducers/authorSlice"
import authorsSlice from "../reducers/authorsSlice"
import categorySlice from "../reducers/categorySlice"
import  catSlice  from "../reducers/catSlice"
export const store = configureStore({
    reducer : {
        authors:authorReducer,
        //categories:categorySlice
        cats:catSlice,
        auths:authorsSlice
    }
})