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
        status:" ",
        isUpdated:false,
        isAdded:false,
        isDeleted:false



    },extraReducers:{
        [getCategoriesAsync.fulfilled]:(state,action)=>{
            state.items = action.payload;
        },
        [addCategoryAsync.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.isAdded = true;           
        },
        [addCategoryAsync.pending]: (state, action) => {
            state.isAdded = false;
        },
        [addCategoryAsync.rejected]: (state, action) => {
            state.isAdded = false;
        },
        [deleteCategoryAsync.fulfilled]:(state,action)=>{
            const id = action.meta.arg
            const filtered = state.items.filter(item=>item.id!==id)
            state.items = filtered
            state.isDeleted = true;           

        },
        [deleteCategoryAsync.pending]: (state, action) => {
            state.isDeleted = false;
        },
        [deleteCategoryAsync.rejected]: (state, action) => {
            state.isDeleted = false;
        },
        [updateCategoryAsync.fulfilled]:(state,action)=>{
            const {id,name} = action.meta.arg
            const index = state.items.findIndex((item)=>item.id === id)
            state.items[index].name = name
            state.isUpdated = true;                       
        },
        [updateCategoryAsync.pending]: (state, action) => {
            state.isUpdated = false;
        },
        [updateCategoryAsync.rejected]: (state, action) => {
            state.isUpdated = false;
        },
    }
})

export const categoryList = (state) => state.categories.items;
export default categorySlice.reducer;