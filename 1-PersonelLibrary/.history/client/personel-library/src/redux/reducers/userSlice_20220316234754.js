import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersAsync = createAsyncThunk("api/getUsers",async()=>{
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/Category`)
})
export const userSlice = createSlice({

})

export default userSlice.reducer;