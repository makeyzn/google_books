import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "AIzaSyCmnNBGLWUUMO62vrcnAGmnQTrGlmvj5gU";

export const fetchAllBooks = createAsyncThunk(
  "books/fetchBooks",
  async ({ search, sorting, category }) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${category}&orderBy=${sorting}&key=` +
        API_KEY
    );
    console.log(response);
    return response.data.items;
  }
);
