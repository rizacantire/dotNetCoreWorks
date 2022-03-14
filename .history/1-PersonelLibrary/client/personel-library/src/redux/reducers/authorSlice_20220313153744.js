import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAuthorsAsync = createAsyncThunk("api/Author",async()=>{
    const response = await axios.get("https://localhost:5001/api/Author")
    return await response.data
})
export const authorSlice = createSlice({
    name:"authors",
    initialState:{
        items:[]
    },
    extraReducers:{
        [getAuthorsAsync.fulfilled]:(state,action)=>{
            state.items = action.payload
           
        }
    }
})

export const authorList = (state)=>state.authors.items
export default authorSlice.reducer