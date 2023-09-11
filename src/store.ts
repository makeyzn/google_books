import { combineReducers, configureStore } from "@reduxjs/toolkit";
import asyncBooksReducer from "./features/asyncBooksSlice";

const rootReducer = combineReducers({
  books: asyncBooksReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
