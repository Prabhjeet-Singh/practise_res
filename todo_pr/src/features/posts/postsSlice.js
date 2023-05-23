import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState=[
    {id:1,title:"first title",content:"this is the content of first todo id"},
    {id:2,title:"second title",content:"this is the content of second todo"}
]


export const postsSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,content){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content
                    }
                }
            }
        
        }
    }
})

export const {postAdded}=postsSlice.actions

export const showAllPosts=state=>state.posts

export default postsSlice.reducer;