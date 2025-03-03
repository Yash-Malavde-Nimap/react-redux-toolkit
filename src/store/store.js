import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../store/movies/movieSlice.js'
import todoReducer from '../store/todos/todoSlice.js'

export const store = configureStore({
    reducer:{
        movies:movieReducer,
        todos:todoReducer,
    }
})