import {configureStore, nanoid} from '@reduxjs/toolkit'
import todoReducer from '../Features/todoSlice'
export const store = configureStore({
    reducer: todoReducer
})