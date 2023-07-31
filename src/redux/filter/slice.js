import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterPosts: (_, action) => {
      return action.payload;
    },
  },
});

export const { filterPosts } = filterSlice.actions;
