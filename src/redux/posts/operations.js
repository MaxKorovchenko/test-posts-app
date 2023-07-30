import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const fetchAllPosts = createAsyncThunk("posts/fetchAllPosts", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("/posts");

    return data;
  } catch (e) {
    return rejectWithValue(e.message);
  }
});

export const fetchPost = createAsyncThunk("posts/fetchPost", async (id, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/posts/${id}`);

    return data;
  } catch (e) {
    return rejectWithValue(e.message);
  }
});
