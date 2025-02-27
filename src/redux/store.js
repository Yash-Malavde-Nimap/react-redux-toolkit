import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../redux/movies/movieSlice.js'

export const store = configureStore({
    reducer:{
        movies:movieReducer,
    }
})