import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const getCategoriesAsync = createAsyncThunk("api/getCategoryies",async()=>{
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/Category`)
    return await res.data
})

export const addCategoryAsync = createAsyncThunk("api/addCategory",async(cat)=>{
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/Category`,cat)
    return await res.data

})

export const deleteCategoryAsync = createAsyncThunk("api/deleteCategory",async(cat)=>{
    const res = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/Category?Id=`+cat)
    return await res.data
})

export const updateCategoryAsync = createAsyncThunk("api/updateCategory",async(cat)=>{
    const res = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/Category`,cat)
    return res
})
export const categorySlice = createSlice({
    name:"categories",
    initialState:{
        items:[],
        status:"",


    },extraReducers:{
        [getCategoriesAsync.fulfilled]:(state,action)=>{
            state.items = action.payload;
        },
        [addCategoryAsync.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.status = 'Success';           
        },
        [addCategoryAsync.pending]: (state, action) => {
            state.status = 'Loading';
        },
        [addCategoryAsync.rejected]: (state, action) => {
            state.status = 'failed';
        },
        [deleteCategoryAsync.fulfilled]:(state,action)=>{
            const id = action.meta.arg
            const filtered = state.items.filter(item=>item.id!==id)
            state.items = filtered
            state.status = 'Success';           

        },
        [deleteCategoryAsync.pending]: (state, action) => {
            state.status = 'Loading';
        },
        [deleteCategoryAsync.rejected]: (state, action) => {
            state.status = 'failed';
        },
        [updateCategoryAsync.fulfilled]:(state,action)=>{
            const {id,name} = action.meta.arg
            const index = state.items.findIndex((item)=>item.id === id)
            state.items[index].name = name
            state.status = 'Success';                       
        },
        [updateCategoryAsync.pending]: (state, action) => {
            state.status = 'Loading';
        },
        [updateCategoryAsync.rejected]: (state, action) => {
            state.status = 'failed';
        },
    }
})

export const categoryList = (state) => state.categories.items;
export default categorySlice.reducer;