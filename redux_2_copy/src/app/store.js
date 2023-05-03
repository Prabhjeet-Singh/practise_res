import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../features/posts/PostSlice";

export const store = configureStore({
    reducer:{
        posts:PostSlice,
    },
})