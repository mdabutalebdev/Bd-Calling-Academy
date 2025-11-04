"use client";

import Link from "next/link";
import Hero from "@/components/sheard/Home/Hero";
 
import HomeCategory from "@/components/sheard/Home/HomeCategory";
import PopularCourse from "@/components/sheard/Home/PopularCourse";
import SeminarAndEvent from "@/components/sheard/Home/SeminarAndEvent";
import WhatWeProvide from "@/components/sheard/Home/WhatWeProvide";
import Concerns from "@/components/sheard/Home/Concerns";
import SuccesHistory from "@/components/sheard/Home/SuccesHistory";

const HomePage = () => {
  return (
    <div>
      {/* Hero section start */}
      <div className="relative">
        {/* Fixed Vertical Join Seminar Button */}
        <div
          className="animated-bg fixed z-50 left-0 top-7/12 -translate-y-1/2 text-white  px-3 md:px-6 py-2 rounded-l-lg cursor-pointer shadow-2xl "
          style={{
            writingMode: "vertical-rl",
            transform: "translateY(-50%) rotate(180deg)",
          }}
        >
          <Link href="/events">
            <h3 className=" font-normal text-[14px] lg:outfit-semibold uppercase">Join Seminar</h3>
          </Link>
        </div>

        {/* Inline animations */}
        <style>
          {`
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-2px); }
            50% { transform: translateX(2px); }
            75% { transform: translateX(-2px); }
            100% { transform: translateX(0); }
          }
        `}
        </style>

        {/* Hero Section */}
        <div
          className="max-h-[calc(100vh-8rem)] py-12 md:py-16 lg:py-24 bg-cover bg-center bg-no-repeat w-full relative"
          style={{ backgroundImage: `url("/images/bgg.png")` }}
        >
          <div className="flex items-center 2xl:py-5 relative">
            
            <Hero />
          </div>
        </div>
      </div>
      {/* Hero section end */}
      <HomeCategory/>
      <div
        className=" container mx-auto rounded-2xl mb-20 bg-cover"
        style={{ backgroundImage: `url("/images/bg1.png")` }}
      >
        <PopularCourse />
      </div>
      <SeminarAndEvent/>
      <WhatWeProvide/>
      <Concerns/>
      <SuccesHistory/>
    </div>
  );
};

export default HomePage;
