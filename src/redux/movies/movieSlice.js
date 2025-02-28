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

    // 1st Method
    edit_Movie: (state, action) => {
      state.movies = state.movies.map((mov) =>
        mov.id === action.payload.id
          ? { ...mov, title: action.payload.title }
          : mov
      );
    },

    // 2nd Method
    editMovie2: (state, action) => {
      const { id, title } = action.payload;
      const objtoUpdate = state.movies.find((mov) => mov.id === id);
      if (objtoUpdate) {
        objtoUpdate.title = title;
      }
    },
  },
});

export const { add_Movie, remove_Movie, edit_Movie, editMovie2 } =
  movieSlice.actions;
export default movieSlice.reducer;
