import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signInAsync = createAsyncThunk("api/login",async(entity)=>{
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/Auth/SignIn`,entity)
    return await res.data
})
export const authenticationSlice = createSlice({
    name:"authentications",
    extraReducers:{

    }

})
export default authenticationSlice.reducer;