import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const getAuthorsAsync = createAsyncThunk("api/Author",async()=>{
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/Author`)
    return await response.data
})

export const addAuthorAsync = createAsyncThunk("api/addAuth",async(cat)=>{
    const res = await axios.post("https://localhost:5001/api/Author",cat)
    return await res.data

})

export const deleteAuthorAsync = createAsyncThunk("api/deleteAuth",async(cat)=>{
    const res = await axios.post("https://localhost:5001/api/Author?id="+cat)
    return await res.data

})
export const authorSlice = createSlice({
    name:"authors",
    initialState:{
        items:[]
    },extraReducers:{
        [getAuthorsAsync.fulfilled]:(state,action)=>{
            state.items = action.payload;
        },
        [addAuthorAsync.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
        },
        [deleteAuthorAsync.fulfilled]:(state,action)=>{
            const id = action.meta.arg
            const filtered = state.items.filter(item=>item.id!==id)
            state.items = filtered
        }
    }
})

export const authorList = (state) => state.authors.items;
export default authorSlice.reducer;