import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAuthorsAsync = createAsyncThunk("api/Author",async()=>{
    const response = await axios.get("https://localhost:44345/api/Author").then(res=>console.log(res))
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
           
        },
        [getAuthorsAsync.rejected]:(state,action)=>{
            state.error = action.error.message;
        },
    }
})

export const authorList = (state)=>state.authors.items
export default authorSlice.reducer