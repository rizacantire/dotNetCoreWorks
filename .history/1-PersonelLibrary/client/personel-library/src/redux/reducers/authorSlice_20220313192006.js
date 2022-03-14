import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAuthorsAsync = createAsyncThunk("api/GetAuthors",async()=>{
    const response = await axios.get("https://localhost:44345/api/Author")
    return await response.data
})

export const addAuthorAsync =  createAsyncThunk("api/AddAuthor",async(data)=>{
    const response = await axios.post("https://localhost:44345/api/Author",data)
    return await response.data
})
export const deleteAuthorAsync =  createAsyncThunk("api/AddAuthor",async(data)=>{
    const response = await axios.delete("https://localhost:44345/api/Author?id="+data)
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
        [addAuthorAsync.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
        },
        [deleteAuthorAsync.fulfilled]:(state,action)=>{
            const id = action.meta.arg;
            const filtered = state.items.filter(item=>item.id!==id)
            state.items = filtered
     
        }
    }
})

export const authorList = (state)=>state.authors.items
export default authorSlice.reducer