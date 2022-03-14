import {configureStore} from "@reduxjs/toolkit"
import AuthorReducer from "../reducers/authorSlice"

export const store = configureStore({
    reducer : {
        authors:AuthorReducer
    }
})