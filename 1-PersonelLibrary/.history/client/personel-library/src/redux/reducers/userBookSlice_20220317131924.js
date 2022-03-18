import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getUserBooksAsync = createAsyncThunk("api/UserBooks/getByUser",async()=>{
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/UserBooks/getByUser`)
    return await res.data;
})

export const addUserBookAsync = createAsyncThunk("api/addUserBook",async(data)=>{
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/UserBooks`,data)
    return res.data
})
export const userBookSlice = createSlice({
    name:"userBooks",
    initialState:{
        items:[]
    },extraReducers:{
        [getUserBooksAsync.fulfilled]:(state,action)=>{
            state.items = action.payload
        },
        [addUserBookAsync.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
        }
    }
})

export const userBookList = (state)=>state.userBooks.items;
export default userBookSlice.reducer;