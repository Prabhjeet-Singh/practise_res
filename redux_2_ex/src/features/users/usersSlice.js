import { CreateSliceOptions, createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:'0' , name:'prabh'},
    {id:'1' , name:'tarshan'},
    {id:'3' , name:'karan'}

]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})

export const selectAllUsers =(state)=> state.users;

export default usersSlice.reducer