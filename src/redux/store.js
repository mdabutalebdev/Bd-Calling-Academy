import { configureStore } from '@reduxjs/toolkit'
import courseReduser from "./CourseSlice"

export default configureStore({
  reducer: {
    courses: courseReduser
  },
})