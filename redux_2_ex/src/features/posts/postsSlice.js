import {createSlice} from '@reduxjs/toolkit'

const initialState=[
    {id:'1',title:'Learning redux toolkit',content:"I've heard good thing."},
    {id:'2',title:'slices....',content:"The more I say slice,  the more I want pizza"}
]

const postsSlice= createSlice({
    name:'posts',
    initialState,
    reducers:{

    }
})

export default postsSlice.reducer