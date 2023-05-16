import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../components/postSlice'

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
})