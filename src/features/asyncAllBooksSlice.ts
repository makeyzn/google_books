import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchAllBooks } from "./booksAsyncActions";

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    categories: string[];
    imageLinks: {
      thumbnail: string;
    };
    authors: string[];
  };
}

interface BooksState {
  totalItems: string;
  items: Book[];
}

const initialState: BooksState = {
  totalItems: "",
  items: [],
};

const asyncAllBooksSlice = createSlice({
  name: "@books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchAllBooks.fulfilled,
        (state, action: PayloadAction<BooksState>) => {
          return action.payload;
        }
      )
  },
});

export default asyncAllBooksSlice.reducer;
