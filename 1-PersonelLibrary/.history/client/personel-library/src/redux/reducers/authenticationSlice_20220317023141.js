import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const signInAsync = createAsyncThunk("api/login",async(values)=>{
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/Auth/SignIn?email=${values.email}&password=${values.password}`)
    return await res.data
})
export const signUpAsync = createAsyncThunk("api/login",async(entity)=>{
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/Auth/SignUp`,entity)
    return await res.data
})

export const authenticationSlice = createSlice({
    name:"authentications",
    initialState:{
        users:[],
        isAuthenticated:false,
        createNewUser:false
    },
    reducers:{
        signOutReduce:(state)=>{
            localStorage.removeItem("token")
            state.isAuthenticated=false
        }
    },
    
    extraReducers:{
        [signInAsync.fulfilled]:(state,action)=>{
            localStorage.setItem("token", JSON.stringify(action.payload));
            state.isAuthenticated=true
        }, 
        [signUpAsync.fulfilled]:(state,action)=>{
            state.createNewUser=true
            console.log(action);
        }, 
    }

})
export const {signOutReduce} =authenticationSlice.actions
export default authenticationSlice.reducer;