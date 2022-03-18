import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import AuthHeader from "../helpers/authHeader"


export const getUserBooksAsync = createAsyncThunk("api/UserBooks/getByUser",async()=>{
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/UserBooks/getByUser`,{headers:AuthHeader()})
    return await res.data.result;
})

export const addUserBookAsync = createAsyncThunk("api/addUserBook",async(data)=>{
   
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/UserBooks`,data,{headers:AuthHeader()})
    return res.data
})

export const updateUserBookAsync = createAsyncThunk("api/updateUserBook",async(data)=>{
    const res = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/UserBooks`,data,{headers:AuthHeader()})
    return res.data
})
export const userBookSlice = createSlice({
    name:"userBooks",
    initialState:{
        items:[],
        isUpdated:false
    },extraReducers:{
        [getUserBooksAsync.fulfilled]:(state,action)=>{
            state.items = action.payload
        },
        [addUserBookAsync.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
        },
        [updateUserBookAsync.fulfilled]:(state,action)=>{
            const {id} = action.meta.arg
            const updateUserBook = action.meta.arg
            console.log(action);
            const index = state.items.findIndex((item)=>item.id === id)
            state.items[index] = updateUserBook
            console.log(state.items[index]);
            state.isUpdated = true;                       
        },
        [updateUserBookAsync.pending]: (state, action) => {
            state.isUpdated = false;
        },
        [updateUserBookAsync.rejected]: (state, action) => {
            state.isUpdated = false;
        },

    }
})

export const userBookList = (state)=>state.userBooks.items;
export default userBookSlice.reducer;