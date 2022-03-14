import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const getAuthsAsync = createAsyncThunk("api/getAuths",async()=>{
    const res = await axios.get("https://localhost:5001/api/Author")
    return await res.data
})

export const addAuthAsync = createAsyncThunk("api/addAuth",async(cat)=>{
    const res = await axios.post("https://localhost:5001/api/Author",cat)
    return await res.data

})

export const deleteAuthAsync = createAsyncThunk("api/deleteAuth",async(cat)=>{
    const res = await axios.post("https://localhost:5001/api/Author?id="+cat)
    return await res.data

})
export const authorSlice = createSlice({
    name:"authors",
    initialState:{
        items:[]
    },extraReducers:{
        [getAuthsAsync.fulfilled]:(state,action)=>{
            state.items = action.payload;
        },
        [addAuthAsync.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
        },
        [deleteAuthAsync.fulfilled]:(state,action)=>{
            const id = action.meta.arg
            const filtered = state.items.filter(item=>item.id!==id)
            state.items = filtered
        }
    }
})

export const authorList = (state) => state.authors.items;
export default authorSlice.reducer;