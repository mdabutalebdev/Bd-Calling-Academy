"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { feachCourseData } from "@/redux/CourseSlice";

const page = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);
  useEffect(() => {
    dispatch(feachCourseData());
  }, []);

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          {" "}
       
          {course.title}
        </div>
      ))}
    </div>
  );
};

export default page;
