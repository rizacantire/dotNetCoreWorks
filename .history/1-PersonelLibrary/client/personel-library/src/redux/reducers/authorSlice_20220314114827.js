import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAuthorsAsync = createAsyncThunk("api/Author",async()=>{
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/Author`)
    return await response.data
})

export const addAuthorAsync =  createAsyncThunk("api/AddAuthor",async(entity)=>{
    const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/Author`,entity)
    return await response.data
})
export const deleteAuthorAsync =  createAsyncThunk("api/AddAuthor",async(id)=>{
    const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/Author?id=`+id)
    return await response.data
})
export const authorSlice = createSlice({
    name:"authors",
    initialState:{
        items:[],
        isLoading : false,
        error:null
    },
    reducers:{

    },
    extraReducers:{
        [getAuthorsAsync.pending]:(state,action) =>{
            state.isLoading = true
        },
        [getAuthorsAsync.fulfilled]:(state,action)=>{
            state.items = action.payload;
            state.isLoading = false       ;    
        },
        [getAuthorsAsync.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        },
        [addAuthorAsync.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
        },
        [addAuthorAsync.rejected]:(state,action)=>{
            state.error = action.error.message;
        },
        [deleteAuthorAsync.fulfilled]:(state,action)=>{
            const id = action.meta.arg;
            const filtered = state.items.filter(item=>item.id!==id)
            state.items = filtered
        },
        [deleteAuthorAsync.rejected]:(state,action)=>{
            state.error = action.error.message;
        },
    }
})

export const authorList = (state)=>state.authors.items
export default authorSlice.reducer