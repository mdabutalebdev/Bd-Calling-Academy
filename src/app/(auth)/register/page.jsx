import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
 

function RegisterPage() {
  return (
    <div className="py-20 bg-gray-100">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Image */}
        <div className="w-full hidden sm:block lg:w-1/2">
       
          <Image
            src="/images/Login Image.png"
            alt="login"
            width={500}
            height={500}
          />
        </div>

        {/* Sign Up Card */}
        <div className="w-full lg:w-[800px] bg-[#e6eded] shadow-lg rounded-lg p-6 sm:p-10 mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Sign Up
          </h1>
          <h2 className="text-lg sm:text-xl text-gray-600 text-center mt-3">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-[#41bfb8] font-semibold underline">
                Log in
              </span>
            </Link>
          </h2>

          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="w-full sm:w-1/2">
              <h1 className="text-lg sm:text-2xl text-gray-600">FIRST NAME</h1>
              <input
                className="w-full h-[50px] sm:h-[60px] bg-white rounded-lg outline-[#F79952] px-4 mt-3"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <h1 className="text-lg sm:text-2xl text-gray-600">LAST NAME</h1>
              <input
                className="w-full h-[50px] sm:h-[60px] bg-white rounded-lg outline-[#F79952] px-4 mt-3"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Username & Email */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="w-full sm:w-1/2">
              <h1 className="text-lg sm:text-2xl text-gray-600">USER NAME</h1>
              <input
                className="w-full h-[50px] sm:h-[60px] bg-white rounded-lg outline-[#F79952] px-4 mt-3"
                type="text"
                placeholder="User Name"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <h1 className="text-lg sm:text-2xl text-gray-600">EMAIL</h1>
              <input
                className="w-full h-[50px] sm:h-[60px] bg-white rounded-lg outline-[#F79952] px-4 mt-3"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>

          {/* Password Fields */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="w-full sm:w-1/2 relative">
              <h1 className="text-lg sm:text-2xl text-gray-600">PASSWORD</h1>
              <input
                className="w-full h-[50px] sm:h-[60px] bg-white rounded-lg outline-[#F79952] px-4 mt-3"
                type="password"
                placeholder="Password"
              />
              <MdOutlineRemoveRedEye
                className="crd absolute right-4 bottom-4 cursor-pointer"
                size={25}
              />
            </div>
            <div className="w-full sm:w-1/2 relative">
              <h1 className="text-lg sm:text-2xl text-gray-600">
                RE-ENTER PASSWORD
              </h1>
              <input
                className="w-full h-[50px] sm:h-[60px] bg-white rounded-lg outline-[#F79952] px-4 mt-3"
                type="password"
                placeholder="Re-Enter Password"
              />
              <MdOutlineRemoveRedEye
                className="crd absolute right-4 bottom-4 cursor-pointer"
                size={25}
              />
            </div>
          </div>

          {/* Terms */}
          <h1 className="text-base sm:text-xl text-gray-600 mt-6">
            Accept the Terms and Privacy Policy
          </h1>

          {/* Register Button */}
          <div className="mt-6">
            <button className="btn w-full h-[60px] sm:h-[75px] bg-[#41bfb8] text-xl sm:text-2xl text-white rounded-lg border-none hover:bg-[#F79952] hover:text-black">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
