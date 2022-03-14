import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";

export const categoryAdapter = createEntityAdapter();
const initialState = categoryAdapter.getInitialState();

const categorySlice = createSlice({
    name:"categories",
    initialState,
    reducers:{
        addCategory : categoryAdapter.addOne,
    }
});
export const {addCategory} = categorySlice.actions;
export default categorySlice.reducer;