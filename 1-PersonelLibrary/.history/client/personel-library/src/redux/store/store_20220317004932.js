import {configureStore
} from "@reduxjs/toolkit"
import authorReducer from "../reducers/authorSlice"
import categoryReducer from "../reducers/categorySlice"
import bookReducer from '../reducers/bookSlice'
import authenticationSlice from "../reducers/authenticationSlice"
import userSlice from "../reducers/userSlice"
export const store = configureStore({
    reducer : {
        authors:authorReducer,
        categories:categoryReducer,
        books:bookReducer,
        authentications:authenticationSlice,
        users:userSlice
    }
})