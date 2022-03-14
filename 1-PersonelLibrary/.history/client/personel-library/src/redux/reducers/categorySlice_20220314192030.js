import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const getCategoriesAsync = createAsyncThunk("api/getCategoryies",async()=>{
    const res = await axios.get("https://localhost:5001/api/Category")
    return await res.data
})

export const addCategoryAsync = createAsyncThunk("api/addCategory",async(cat)=>{
    const res = await axios.post("https://localhost:5001/api/Category",cat)
    return await res.data

})

export const deleteCategoryAsync = createAsyncThunk("api/deleteCategory",async(cat)=>{
    const res = await axios.post("https://localhost:5001/api/Category?id="+cat)
    return await res.data

})
export const categorySlice = createSlice({
    name:"categories",
    initialState:{
        items:[]
    },extraReducers:{
        [getCategoriesAsync.fulfilled]:(state,action)=>{
            state.items = action.payload;
        },
        [addCategoryAsync.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
        },
        [deleteCategoryAsync.fulfilled]:(state,action)=>{
            const id = action.meta.arg
            const filtered = state.items.filter(item=>item.id!==id)
            state.items = filtered
        }
    }
})

export const categoryList = (state) => state.categoryies.items;
export default categorySlice.reducer;