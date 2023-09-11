import { createSlice } from "@reduxjs/toolkit";
import { fetchAllBooks } from "./booksAsyncActions";

// const initialState = {
//   status: "idle",
//   list: [],
// };

const asyncBooksSlice = createSlice({
  name: "@books",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
      //   state.status = "finished";
      console.log(action.payload);
      return action.payload;
    });
  },
});

export default asyncBooksSlice.reducer;
