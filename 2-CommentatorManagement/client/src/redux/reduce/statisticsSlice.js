import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getStatisticsAsync = createAsyncThunk("api/CommentatorMatchsByID",async(id)=>{
    const response = await axios.get("https://localhost:5001/api/CommentatorMatchs/GetById?id="+id)
    return await response.data;
})

export const statisticsSlice = createSlice({
    name:"statistics",
    initialState:{
        items:[]
    },extraReducers:{
        [getStatisticsAsync.fulfilled]:(state,action)=>{
            state.items = action.payload
        }
    }
})

export const statisticList = (state)=>state.statistics.items
export default statisticsSlice.reducer;