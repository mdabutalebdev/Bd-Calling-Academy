import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching courses
export const feachCourseData = createAsyncThunk(
  "course/feachCourseData",
  async () => {
    try {
      const response = await fetch("/Data/Courses.json");
      console.log("Response status:", response.status);  
      const CoursesData = await response.json();
      console.log("Fetched Data:", CoursesData);      
      return CoursesData;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }
);

 
export const courseSlice = createSlice({
  name: "course",
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(feachCourseData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(feachCourseData.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;  
      })
      .addCase(feachCourseData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch";
      });
  },
});

export default courseSlice.reducer;
