import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState=[
    {id:'1',text:'this is text'},{id:'2',text:'this is text 2'}
]


export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
       
        postAdded:{
            reducer(state,action){
            state.push(action.payload)
            },
            prepare(text){
                return{
                    payload:{
                        id:nanoid(),
                        text
                    }
                }
            },
        },
      
    }
})

export const {postAdded}=postSlice.actions;

export default postSlice.reducer


