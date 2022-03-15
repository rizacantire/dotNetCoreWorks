import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signInAsync = createAsyncThunk("api/login",async(values)=>{
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/Auth/SignIn?email=${values}&password=${values}`)
    return await res.data
})
export const authenticationSlice = createSlice({
    name:"authentications",
    reducers:{
    },
    extraReducers:{
        [signInAsync.fulfilled]:(state,action)=>{
            //localStorage.setItem("token", JSON.stringify(action.data));
            console.log(action);
        },
        
    }

})
export default authenticationSlice.reducer;