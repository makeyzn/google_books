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

export interface BooksState {
  totalItems: number;
  items: Book[];
}

const initialState: BooksState = {
  totalItems: 0,
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
        (_, action: PayloadAction<BooksState>) => {
          return action.payload;
        }
      )
  },
});

export default asyncAllBooksSlice.reducer;
