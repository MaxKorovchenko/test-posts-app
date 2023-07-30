import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPosts, fetchPost } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    post: {},
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, handlePending)
      .addCase(fetchAllPosts.rejected, handleRejected)
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchPost.pending, handlePending)
      .addCase(fetchPost.rejected, handleRejected)
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.post = action.payload;
      });
  },
});
