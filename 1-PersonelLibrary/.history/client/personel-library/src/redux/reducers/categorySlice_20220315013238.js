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
    const res = await axios.delete("https://localhost:5001/api/Category?Id="+cat)
    return await res.data
})

export const updateCategoryAsync = createAsyncThunk("api/updateCategory",async(cat)=>{
    const res = await axios.put("https://localhost:5001/api/Category",cat)
    return res
})
export const categorySlice = createSlice({
    name:"categories",
    initialState:{
        items:[],
        isActiveForUpdate:false,

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
        },
        [updateCategoryAsync.fulfilled]:(state,action)=>{
            //const id = action.meta.arg
            const {id,name} = action.meta.arg
            const index = state.items.findIndex((item)=>item.id === id)
            state.items[index].name = name
            state.isActiveForUpdate=false
            console.log(action);
        }
    }
})

export const categoryList = (state) => state.categories.items;
export default categorySlice.reducer;