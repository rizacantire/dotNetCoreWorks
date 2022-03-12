import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCommentatorMatchAsync = createAsyncThunk("api/CommentatorMatchs",async()=>{
    const response = await axios.get("https://localhost:5001/api/CommentatorMatchs");
    return await response.data;
})


export const addCommentatorMatchAsync = createAsyncThunk("api/AddCommentatorMatch",async(data)=>{
    const response = await axios.post("https://localhost:5001/api/CommentatorMatchs",data)
    return await response.data;
})
export const deleteCommentatorMatchAsync = createAsyncThunk("api/DeleteCommentatorMatch",async(data)=>{
    const response = await axios.delete("https://localhost:5001/api/CommentatorMatchs?id="+data)
    return await response.data;
})

export const commentatorMatchSlice = createSlice({
    name:"commentatorMatchs",
    initialState:{
        items:[],
        isLoading : false,
        error:null
    },
    reducers:{
        //addCommentatorMatch:
        
    },
    extraReducers:{
        [getCommentatorMatchAsync.pending]:(state,action) =>{
            state.isLoading = true
        },
        [getCommentatorMatchAsync.fulfilled]:(state,action)=>{
           
            state.items = action.payload;
            state.isLoading = false;

        },
        [getCommentatorMatchAsync.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        },
        [addCommentatorMatchAsync.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
        },
        [deleteCommentatorMatchAsync.fulfilled]:(state,action)=>{
            const id = action.meta.arg;
            const filtered = state.items.filter(item=>item.id!==id)
            state.items = filtered
        }
       
    }
})
export const commentatorMatchList = (state)=> state.commentatorMatchs.items;
export default commentatorMatchSlice.reducer;
