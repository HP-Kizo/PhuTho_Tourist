// src/redux/store.ts
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import jobReducer from "./jobSlice";
import blogReducer from "./blogSlice";
import bgReducer from "./bgSlice";

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
    blogs: blogReducer,
    bg: bgReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
