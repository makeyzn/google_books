import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FieldValues } from "react-hook-form";

const API_KEY = "AIzaSyCmnNBGLWUUMO62vrcnAGmnQTrGlmvj5gU";

export const fetchAllBooks = createAsyncThunk(
  "books/fetchBooks",
  async ({ search, sorting, category }: FieldValues) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${category}&orderBy=${sorting}&key=` +
        API_KEY
    );
    return response.data;
  }
);

export const fetchBook = createAsyncThunk("books/fetchBook", async (id: string) => {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=` + API_KEY
  );
  return response.data;
});
