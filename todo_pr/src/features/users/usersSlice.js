import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:1,name:'prabh'},
    {id:2,name:'tarshan'},
    {id:3,name:'karan'}
]


export const usersSlice=createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})

export const allUsersName=state=>state.users;

export default usersSlice.reducer