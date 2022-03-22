import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const getBooksAsync = createAsyncThunk("api/getBooks",async()=>{
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/Book`)
    return await res.data
})

export const getBooksByAuthorAsync = createAsyncThunk("api/getBooksByAuthor",async(authorId)=>{
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/Book/`+authorId)
    return await res.data
})

export const getBooksByExcel = createAsyncThunk("api/GetBookWithXml",async(file)=>{
    const formData = new FormData()
    formData.append("file",file)
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/Book/GetBookWithXml`,formData)
    return await res.data.result
})
export const addBookAsync = createAsyncThunk("api/addBook",async(book)=>{
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/Book`,book)
    return await res.data

})

export const addBookRangeAsync = createAsyncThunk("api/addBookRangeAsync",async(entity)=>{
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/Book/AddRange`,entity)
    return await res.data
})

export const deleteBookAsync = createAsyncThunk("api/deleteBook",async(id)=>{
    const res = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/Book?Id=`+id)
    return await res.data
})

export const updateBookAsync = createAsyncThunk("api/updateBook",async(book)=>{
    const res = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/Book`,book)
    return res
})
export const bookSlice = createSlice({
    name:"books",
    initialState:{
        items:[],
        authorBooks:[],
        xmlItems:[],
        status:"",

    },reducers:{
        removeBookXmlItem:(state,action)=>{
            const xmlItem = action.payload
            const filtered = state.xmlItems.filter((e)=>e.name!==xmlItem.name)
            state.xmlItems = filtered;

        }
    },
    extraReducers:{
        [getBooksAsync.fulfilled]:(state,action)=>{
            state.items = action.payload;
        },
        [getBooksByAuthorAsync.fulfilled]:(state,action)=>{
            state.authorBooks = action.payload;
        },
        [getBooksByExcel.fulfilled]:(state,action)=>{
            state.xmlItems = action.payload;
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
            const updateItem = action.meta.arg
            const index = state.items.findIndex((item)=>item.id === updateItem.id)
            state.items[index] = updateItem
            
        },
        [addBookRangeAsync.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.status = 'Success';
            state.xmlItems = []
        },
        [addBookRangeAsync.pending]: (state, action) => {
            state.status = 'Loading';
        },
        [addBookRangeAsync.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
})

export const bookList = (state) => state.books.items;
export const authorBookList = (state) => state.books.authorBooks;
export const bookXmlList = (state) => state.books.xmlItems;
export const {removeBookXmlItem} = bookSlice.actions;
export default bookSlice.reducer;