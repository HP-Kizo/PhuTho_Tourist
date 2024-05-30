// src/redux/jobSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Blog } from "../typescripts/Interface";

interface BlogState {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
};

const BlogSlice = createSlice({
  name: "Blogs",
  initialState,
  reducers: {
    fetchBlogsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchBlogsSuccess(state, action: PayloadAction<Blog[]>) {
      state.blogs = action.payload;
      state.loading = false;
    },
    fetchBlogsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchBlogsStart, fetchBlogsSuccess, fetchBlogsFailure } =
  BlogSlice.actions;

export default BlogSlice.reducer;
