import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signInAsync = createAsyncThunk("api/login",async(values)=>{
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/Auth/SignIn?email=${values.email}&password=${values.password}`)
    return await res.data
})

export const singOutAsync = async()=>{
    localStorage.removeItem("token")
}
export const authenticationSlice = createSlice({
    name:"authentications",
    initialState:{
        users:[],
        isAuthenticated:false
    },
    
    extraReducers:{
        [signInAsync.fulfilled]:(state,action)=>{
            localStorage.setItem("token", JSON.stringify(action.payload));
            console.log(action);
            state.isAuthenticated=true
        },
        [singOutAsync.fulfilled]:(state,action)=>{
            state.isAuthenticated=true
        }
        
    }

})
export default authenticationSlice.reducer;