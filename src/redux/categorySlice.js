// redux/categorySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async fetch
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetch("/Data/courseCategory.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to fetch categories");
    const data = await response.json();
    return data;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => { state.status = "loading"; })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
