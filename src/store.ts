import { combineReducers, configureStore } from "@reduxjs/toolkit";
import asyncAllBooksSlice from "./features/asyncAllBooksSlice";
import asyncBookSlice from "./features/asyncBookSlice";

const rootReducer = combineReducers({
  books: asyncAllBooksSlice,
  book: asyncBookSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
