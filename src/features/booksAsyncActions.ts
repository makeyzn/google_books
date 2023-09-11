import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "AIzaSyCmnNBGLWUUMO62vrcnAGmnQTrGlmvj5gU";

export const fetchAllBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=react&key=" + API_KEY
  );
  return response.data.items;
});
