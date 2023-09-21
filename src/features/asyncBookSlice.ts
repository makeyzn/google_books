import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchBook } from "./booksAsyncActions";

export interface BookPage {
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    description: string;
    imageLinks: {
      medium: string;
    };
  };
  isLoading: boolean;
}

const initialState: BookPage = {
  volumeInfo: {
    title: "",
    authors: [""],
    categories: [""],
    description: "",
    imageLinks: {
      medium: "",
    },
  },
  isLoading: false,
};

const asyncBookSlice = createSlice({
  name: "@books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchBook.fulfilled,
        (state, action: PayloadAction<BookPage>) => {
          state.isLoading = false;
          state.volumeInfo = action.payload.volumeInfo;
        }
      );
  },
});

export default asyncBookSlice.reducer;
