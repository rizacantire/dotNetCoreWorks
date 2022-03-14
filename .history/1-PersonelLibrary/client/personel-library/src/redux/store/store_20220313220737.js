import {configureStore} from "@reduxjs/toolkit"
import authorReducer from "../reducers/authorSlice"

export const store = configureStore({
    reducer : {
        authors:authorReducer
    }
})