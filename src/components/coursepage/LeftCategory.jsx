"use client";

import { fetchCategories } from "@/redux/categorySlice";
import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const LeftCategory = () => {
  const dispatch = useDispatch();
  const { items: courseCategories, status, error } = useSelector(
    (state) => state.categories
  );

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCheckboxChange = (categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((item) => item !== categoryName)
        : [...prev, categoryName]
    );
  };

  const onSearch = (query) => setSearchQuery(query);

  const filteredCategories = courseCategories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="relative mb-6">
        <input
          className="w-full pl-4 pr-10 py-3 text-base crd placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F79952] focus:border-transparent transition-all duration-200"
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
        />
        <IoSearchSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl cursor-pointer hover:text-[#F79952] transition-colors duration-200" />
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 bg-gray-50 px-6 py-4 border-b border-gray-200">
          Categories
        </h3>

        <div className="flex flex-col gap-2 p-4">
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p>{error}</p>}
          {status === "succeeded" &&
            filteredCategories.map((category) => (
              <label
                key={category.id}
                className={`flex items-center gap-3 cursor-pointer ${
                  selectedCategories.includes(category.name)
                    ? "text-[#F79952] font-medium"
                    : "crd hover:text-[#F79952]"
                }`}
                onClick={() => handleCheckboxChange(category.name)}
              >
                <input
                  type="checkbox"
                  className="checkbox w-5 h-5 rounded-sm"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => handleCheckboxChange(category.name)}
                />
                <span className="text-base md:text-lg">{category.name}</span>
              </label>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LeftCategory;
