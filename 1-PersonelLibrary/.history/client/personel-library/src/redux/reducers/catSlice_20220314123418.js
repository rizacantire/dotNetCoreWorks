import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const getCats = createAsyncThunk("api/getCats",async()=>{
    const res = await axios.get("https://localhost:5001/api/Category")
    return await res.data
})

export const addCatAsync = createAsyncThunk("api/addCat",async(cat)=>{
    const res = await axios.post("https://localhost:5001/api/Category",cat)
    return await res.data

})

export const deleteCatAsync = createAsyncThunk("api/deleteCat",async(cat)=>{
    const res = await axios.post("https://localhost:5001/api/Category?id="+cat)
    return await res.data

})
export const catSlice = createSlice({
    name:"cats",
    initialState:{
        items:[]
    },extraReducers:{
        [getCats.fulfilled]:(state,action)=>{
            state.items = action.payload;
        },
        [addCatAsync.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
        },
        [deleteCatAsync.fulfilled]:(state,action)=>{
            const id = action.meta.arg
            const filtered = state.items.filter(item=>item.id!==id)
            state.items = filtered
        }
    }
})

export const catList = (state) => state.cats.items;
export default catSlice.reducer;