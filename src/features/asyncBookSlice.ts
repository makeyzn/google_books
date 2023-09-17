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
};

const asyncBookSlice = createSlice({
  name: "@books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchBook.fulfilled,
      (_, action: PayloadAction<BookPage>) => {
        return action.payload;
      }
    );
  },
});

export default asyncBookSlice.reducer;
