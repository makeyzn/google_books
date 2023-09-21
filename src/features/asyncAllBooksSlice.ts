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
  isLoading: boolean;
}

const initialState: BooksState = {
  totalItems: 0,
  items: [],
  isLoading: false,
};

const asyncAllBooksSlice = createSlice({
  name: "@books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchAllBooks.fulfilled,
        (state, action: PayloadAction<BooksState>) => {
          state.isLoading = false;
          state.totalItems = action.payload.totalItems;
          state.items = action.payload.items;
        }
      );
  },
});

export default asyncAllBooksSlice.reducer;
