import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./posts/slice";
import { filterSlice } from "./filter/slice";

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
