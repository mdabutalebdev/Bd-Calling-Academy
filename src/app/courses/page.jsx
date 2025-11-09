"use client";

import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/sheard/SectionHeading";

 
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { feachCourseData } from "@/redux/CourseSlice";
import Image from "next/image";
import LeftCategory from "@/components/coursepage/LeftCategory";
import RightCoursesDetalis from "@/components/coursepage/RightCoursesDetalis";

const Course = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [courseCategories, setCourseCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("All");
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const coursesPerPage = 12;
  const detailsRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);
  useEffect(() => {
    dispatch(feachCourseData());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch("/Course-Data/Courses.json")
      .then((res) => res.json())
      .then((data) => {
        setAllCourses(data);
        setCourses(data.slice(0, coursesPerPage));
        setInitialLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("/Course-Data/CourseCategorys.json")
      .then((res) => res.json())
      .then((data) => setCourseCategories(data));
  }, []);

  const handleCheckboxChange = (categoryName) => {
    setSelectedCategories(categoryName);
    const params = new URLSearchParams();
    params.set("category", encodeURIComponent(categoryName));
    if (searchQuery) {
      params.set("search", encodeURIComponent(searchQuery));
    }
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const params = new URLSearchParams();
    if (selectedCategories !== "All") {
      params.set("category", encodeURIComponent(selectedCategories));
    }
    if (query) {
      params.set("search", encodeURIComponent(query));
    }
    setSearchParams(params);
  };

  const filteredcourses = allCourses.filter((course) => {
    const categoryMatch =
      selectedCategories === "All" || course.category === selectedCategories;

    const searchMatch =
      searchQuery === "" ||
      (course.title &&
        course.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (course.specialization &&
        course.specialization
          .toLowerCase()
          .includes(searchQuery.toLowerCase()));

    return categoryMatch && searchMatch;
  });

  const displayedcourses =
    selectedCategories === "All" && searchQuery === ""
      ? courses
      : filteredcourses;

  const loadMorecourses = () => {
    setLoadMoreLoading(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const nextcourses = allCourses.slice(0, nextPage * coursesPerPage);
      setCourses(nextcourses);
      setCurrentPage(nextPage);
      setLoadMoreLoading(false);
    }, 500);
  };

  const getTransformValue = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      const maxScroll = 300;
      const scrollProgress = Math.min(scrollY, maxScroll) / maxScroll;
      return `translateY(${-scrollProgress * 0}px)`;
    }
    return "none";
  };

  return (
    <>
      <div
        className="animated-bg fixed z-50 left-0 top-7/12 -translate-y-1/2 text-white px-6 py-2 rounded-l-lg cursor-pointer shadow-2xl "
        style={{
          writingMode: "vertical-rl",
          transform: "translateY(-50%) rotate(180deg)",
        }}
      >
        <Link href="/events">
          <h3 className=" outfit-semibold uppercase">Join Seminar</h3>
        </Link>
      </div>

      <div className="bg-[#ecfcfb] py-8">
        <div className="mb-24 ">
          <SectionHeading
            title={"Discover Your Next Skill"}
            description={
              "Unlock a wide range of practical, in-demand courses designed to align with your career goals. Whether you’re taking your first step into tech or advancing your expertise, our learning paths are crafted by industry experts to ensure you gain real-world knowledge that truly makes a difference."
            }
          />
        </div>
        <div className="w-11/12 md:w-10/11  mx-auto">
         <div className="flex items-center gap-10">
           <div className="w-1/5">
            <LeftCategory />
          </div>
          <div className="w-1/5">
           {/* <RightCoursesDetalis/> */}
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default Course;

// <div className="">
//         <div>
//           {initialLoading ? (
//             <div className="flex justify-center items-center h-screen">
//               <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#F79952]"></div>
//             </div>
//           ) : (
//             <div className="flex flex-col-reverse lg:flex-row gap-4">
//               <div className="w-full lg:w-[20%] lg:sticky lg:top-30 lg:self-start">
//                 <LeftCategory
//                   courseCategories={courseCategories}
//                   selectedCategories={selectedCategories}
//                   handleCheckboxChange={handleCheckboxChange}
//                   searchQuery={searchQuery}
//                   onSearch={handleSearch}
//                 />
//               </div>
//               <div
//                 className="w-full lg:w-3/4"
//                 ref={detailsRef}
//                 style={{ transform: getTransformValue() }}
//               >
//                 <RightCoursesDetalis filteredCourses={displayedcourses} />
//                 {selectedCategories === "All" &&
//                   searchQuery === "" &&
//                   allCourses.length > courses.length && (
//                     <div className="flex justify-center my-3">
//                       <button
//                         onClick={loadMorecourses}
//                         disabled={loadMoreLoading}
//                         className={`px-6 py-2 cursor-pointer ${loadMoreLoading
//                             ? "bg-[#F79952]cursor-not-allowed"
//                             : "bg-[#f2a56a] hover:bg-[#F79952]"
//                           } text-white rounded-lg transition duration-300`}
//                       >
//                         {loadMoreLoading ? "Loading..." : "Load More"}
//                       </button>
//                     </div>
//                   )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
