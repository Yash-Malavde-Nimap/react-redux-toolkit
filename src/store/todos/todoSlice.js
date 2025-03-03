import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const todoState = {
  todos: [],
  loading: false,
  error: false,
};

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/todos");
  // console.log(data);
  return data.data;
});

const todoSlice = createSlice({
  name: "Todos",
  initialState: todoState,
  reducers: {
    // fetch_Todos: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });

    builder.addCase(fetchTodos.rejected, (state) => {
      state.error = true;
    });
  },
});

// export const { } = todoSlice.actions;
export default todoSlice.reducer;
