import { RootState } from "../store";

export const selectAsyncBooks = (state: RootState) => state.books;
export const selectAsyncBookPage = (state: RootState) => state.book;

