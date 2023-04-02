import { createSlice } from "@reduxjs/toolkit";


export const run = createSlice({
    name:'fetch_the_value',
    initialState:{
        value:11,
    },
    reducers:{
        increment:(state)=>{
            state.value += 1
        },
    }
})


export const {increment} = run.actions;
export default run.reducer;