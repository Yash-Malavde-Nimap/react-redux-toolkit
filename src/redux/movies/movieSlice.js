import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    add_Movie: (state, action) => {
      const mov = {
        id: Math.floor(Math.random() * 10000),
        title: action.payload,
      };
      state.movies.push(mov);
    },

    remove_Movie: (state, action) => {
      state.movies = state.movies.filter((mov) => mov.id != action.payload);
    },

    edit_Movie: (state, action) => {
      state.movies = state.movies.map((mov) =>
        mov.id === action.payload.id
          ? { ...mov, title: action.payload.title }
          : mov
      );
    },
  },
});

export const { add_Movie, remove_Movie, edit_Movie } = movieSlice.actions;
export default movieSlice.reducer;
