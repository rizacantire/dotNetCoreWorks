import { createSlice } from "@reduxjs/toolkit";

export const userBookSlice = createSlice({
    name:"userBooks",
    initialState:{
        items:[]
    },extraReducers:{

    }
})

export const userBookList = (state)=>state.userBooks.items;
export default userBookSlice.reducer;