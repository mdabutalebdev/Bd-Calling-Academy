"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { feachCourseData } from "@/redux/CourseSlice";
import Image from "next/image";

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
          
          <div className="">
            <Image 
            src={course.image}
            alt={course.id}
            height={100}
            width={100}
            />
          </div>
          {course.title}
        </div>
      ))}
    </div>
  );
};

export default page;
