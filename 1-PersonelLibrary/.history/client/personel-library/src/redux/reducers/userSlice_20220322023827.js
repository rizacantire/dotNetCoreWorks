import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getUsersAsync = createAsyncThunk("api/getUsers",async()=>{
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/Users`)
    return res.data
})

export const updatePassAsync = createAsyncThunk("api/updatePass",async(entity)=>{
    const res = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/Users`,entity)
    return res.data
})

export const userSlice = createSlice({
    name:"users",
    initialState:{
        items:[]
    },
    extraReducers:{
        [getUsersAsync.fulfilled]:(state,action)=>{
            state.items = action.payload
        },
        [updatePassAsync.fulfilled]:(state,action)=>{
            const {id} = action.meta.arg
            const updateUser = action.meta.arg
            const index = state.items.findIndex((item)=>item.id === id)
            state.items[index] = updateUser
        }
    }
})
export const userList = (state)=>state.users.items;
export default userSlice.reducer;