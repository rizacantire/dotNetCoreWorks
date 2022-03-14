import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const getAuthorsAsync = createAsyncThunk("api/getAuthors",async()=>{
    const res = await axios.get("https://localhost:5001/api/Author")
    return await res.data
})

export const addAuthorAsync = createAsyncThunk("api/addAuthor",async(cat)=>{
    const res = await axios.post("https://localhost:5001/api/Author",cat)
    return await res.data

})

export const deleteAuthorAsync = createAsyncThunk("api/deleteAuthor",async(cat)=>{
    const res = await axios.delete("https://localhost:5001/api/Author?Id="+cat)
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