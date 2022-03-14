import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const getAuthsAsync = createAsyncThunk("api/getCats",async()=>{
    const res = await axios.get("https://localhost:5001/api/Author")
    return await res.data
})

export const addAuthAsync = createAsyncThunk("api/addCat",async(cat)=>{
    const res = await axios.post("https://localhost:5001/api/Author",cat)
    return await res.data

})

export const deleteAuthAsync = createAsyncThunk("api/deleteCat",async(cat)=>{
    const res = await axios.post("https://localhost:5001/api/Author?id="+cat)
    return await res.data

})
export const authorsSlice = createSlice({
    name:"auths",
    initialState:{
        items:[]
    },extraReducers:{
        [getAuthsAsync.fulfilled]:(state,action)=>{
            state.items = action.payload;
        },
        [addAuthAsync.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
        },
        [deleteAuthAsync.fulfilled]:(state,action)=>{
            const id = action.meta.arg
            const filtered = state.items.filter(item=>item.id!==id)
            state.items = filtered
        }
    }
})

export const authList = (state) => state.auths.items;
export default authorsSlice.reducer;