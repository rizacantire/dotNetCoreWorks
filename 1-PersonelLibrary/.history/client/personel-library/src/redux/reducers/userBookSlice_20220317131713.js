import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getUserBooksAsync = createAsyncThunk("api//api/UserBooks/getByUser",async()=>{
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/UserBooks/getByUser`)
    return await res.data;
})
export const userBookSlice = createSlice({
    name:"userBooks",
    initialState:{
        items:[]
    },extraReducers:{
        [getUserBooksAsync.fulfilled]:(state,action)=>{
            state.items = action.payload
        }
    }
})

export const userBookList = (state)=>state.userBooks.items;
export default userBookSlice.reducer;