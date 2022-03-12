import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMatchsAsync = createAsyncThunk("api/matchs",async()=>{
    const response = await axios.get("https://localhost:5001/api/matchs")
    return await response.data.result
})

export const matchSlice = createSlice({
    name:"matchs",
    initialState:{
        items:[]
    },
    extraReducers:{
        [getMatchsAsync.fulfilled]:(state,action)=>{
           
            state.items = action.payload
        }
    }
})

export const matchList = (state)=>state.matchs.items;
export default matchSlice.reducer;