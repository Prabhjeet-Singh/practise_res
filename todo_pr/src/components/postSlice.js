import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
    todo:[]
}

export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
        onSubmit:(state,action)=>{
         
            state.todo.push(action.payload)

        }

      
    }
})

export const {increment,decrement,onSubmit}=postSlice.actions;

export default postSlice.reducer


