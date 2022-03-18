import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const getBooksAsync = createAsyncThunk("api/getBooks",async()=>{
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/Book`)
    return await res.data
})

export const getBooksByAuthorAsync = createAsyncThunk("api/getBooks",async(authorId)=>{
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/Book/`+authorId)
    return await res.data
})

export const addBookAsync = createAsyncThunk("api/addBook",async(cat)=>{
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/Book`,cat)
    return await res.data

})

export const deleteBookAsync = createAsyncThunk("api/deleteBook",async(cat)=>{
    const res = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/Book?Id=`+cat)
    return await res.data
})

export const updateBookAsync = createAsyncThunk("api/updateBook",async(cat)=>{
    const res = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/Book`,cat)
    return res
})
export const bookSlice = createSlice({
    name:"books",
    initialState:{
        items:[],
        authorBooks:[]

    },extraReducers:{
        [getBooksAsync.fulfilled]:(state,action)=>{
            state.items = action.payload;
        },
        [getBooksByAuthorAsync.fulfilled]:(state,action)=>{
            state.authorBooks = action.payload;
        },
        [addBookAsync.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
           
        },
        [deleteBookAsync.fulfilled]:(state,action)=>{
            const id = action.meta.arg
            const filtered = state.items.filter(item=>item.id!==id)
            state.items = filtered
        },
        [updateBookAsync.fulfilled]:(state,action)=>{
            const {id,name} = action.meta.arg
            const index = state.items.findIndex((item)=>item.id === id)
            state.items[index].name = name
            
        }
    }
})

export const bookList = (state) => state.books.items;
export const authorBookList = (state) => state.books.authorBooks;
export default bookSlice.reducer;