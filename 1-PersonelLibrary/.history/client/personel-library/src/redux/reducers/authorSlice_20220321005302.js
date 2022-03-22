import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const getAuthorsAsync = createAsyncThunk("api/getAuthors",async()=>{
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/Author`)
    return await res.data
})

export const getAuthorsByExcel = createAsyncThunk("api/getAuthorsByExcel",async(file)=>{
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/GetAuthorWithXml`,file)
    return await res.data
})

export const addAuthorAsync = createAsyncThunk("api/addAuthor",async(entity)=>{
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/Author`,entity)
    return await res.data

})

export const deleteAuthorAsync = createAsyncThunk("api/deleteAuthor",async(entity)=>{
    const res = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/Author?Id=`+entity)
    return await res.data

})
export const updateAuthorAsync = createAsyncThunk("api/updateAuthor",async(entity)=>{
    const res = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/Author`,entity)
    return res
})
export const authorSlice = createSlice({
    name:"authors",
    initialState:{
        items:[],
        xmlItems:[],
        status:"",
    },extraReducers:{
        [getAuthorsAsync.fulfilled]:(state,action)=>{
            state.items = action.payload;
        },
        [getAuthorsByExcel.fulfilled]:(state,action)=>{
            state.xmlItems = action.payload;
        },
        [addAuthorAsync.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.status = 'Success';

        },
        [addAuthorAsync.pending]: (state, action) => {
            state.status = 'Loading';
        },
        [addAuthorAsync.rejected]: (state, action) => {
            state.status = 'failed';
        },
        [deleteAuthorAsync.fulfilled]:(state,action)=>{
            const id = action.meta.arg
            const filtered = state.items.filter(item=>item.id!==id)
            state.items = filtered
            state.status = 'Success';

        },
        [deleteAuthorAsync.pending]: (state, action) => {
            state.status = 'Success';

        },
        [deleteAuthorAsync.rejected]: (state, action) => {
            state.status = 'failed';
        },
        [updateAuthorAsync.fulfilled]:(state,action)=>{
            const {id} = action.meta.arg
            const updateAuthor = action.meta.arg
            const index = state.items.findIndex((item)=>item.id === id)
            state.items[index] = updateAuthor
            state.status = 'Success';

        },
        [updateAuthorAsync.pending]: (state, action) => {
            state.status = 'Loading';
        },
        [updateAuthorAsync.rejected]: (state, action) => {
            state.status = 'failed';
        },
    }
})

export const authorList = (state) => state.authors.items;
export const authorXmlList = (state) => state.authors.xmlItems;

export default authorSlice.reducer;