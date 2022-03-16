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

})

export default userSlice.reducer;