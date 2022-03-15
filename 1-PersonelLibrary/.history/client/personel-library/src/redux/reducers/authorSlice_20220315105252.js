import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const getAuthorsAsync = createAsyncThunk("api/getAuthors",async()=>{
    const res = await axios.get("https://localhost:5001/api/Author")
    return await res.data
})

export const addAuthorAsync = createAsyncThunk("api/addAuthor",async(entity)=>{
    const res = await axios.post("https://localhost:5001/api/Author",entity)
    return await res.data

})

export const deleteAuthorAsync = createAsyncThunk("api/deleteAuthor",async(entity)=>{
    const res = await axios.delete("https://localhost:5001/api/Author?Id="+entity)
    return await res.data

})
export const updateAuthorAsync = createAsyncThunk("api/updateAuthor",async(entity)=>{
    const res = await axios.put("https://localhost:5001/api/Author",entity)
    return res
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
        },
        [updateAuthorAsync.fulfilled]:(state,action)=>{
            const {id} = action.meta.arg
            const updateAuthor = action.meta.arg
            const index = state.items.findIndex((item)=>item.id === id)
            state.items[index] = updateAuthor
            
        }
    }
})

export const authorList = (state) => state.authors.items;
export default authorSlice.reducer;