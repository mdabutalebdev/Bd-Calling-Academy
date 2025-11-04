import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function LoginPage() {
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

        {/* Login Card */}
        <div className="w-full lg:w-1/2 bg-[#e6eded] shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">Login</h1>
          <h2 className="text-lg sm:text-xl text-gray-600 text-center mt-4 sm:mt-6">
            Don't have an account yet?{" "}
            <Link href="/register">
              <span className="text-[#41bfb8] font-semibold underline">
                Register
              </span>
            </Link>
          </h2>

          <div className="mt-6">
            <h1 className="text-lg sm:text-2xl text-gray-600">
              USERNAME OR EMAIL
            </h1>
            <input
              className="w-full h-[50px] sm:h-[60px] bg-white rounded-lg outline-[#F79952] px-4 mt-3"
              type="text"
              placeholder="Your Username or Email"
            />
          </div>

          <div className="mt-6 relative">
            <h1 className="text-lg sm:text-2xl text-gray-600">PASSWORD</h1>
            <input
              className="w-full h-[50px] sm:h-[60px] bg-white rounded-lg outline-[#F79952] px-4 mt-3"
              type="password"
              placeholder="Password"
            />
            <MdOutlineRemoveRedEye
              className="crd absolute right-4 bottom-4 sm:bottom-5 cursor-pointer"
              size={25}
            />
          </div>

          <div className="mt-8">
            <button className="btn w-full h-[60px] sm:h-[75px] bg-[#41bfb8] text-xl sm:text-2xl text-white rounded-lg border-none hover:bg-[#F79952] hover:text-black">
              Login
            </button>
          </div>

          <div className="flex items-center gap-4 justify-center mt-6">
            <hr className="w-[80px] sm:w-[100px] border-gray-300" />
            <h1 className="text-base sm:text-xl text-gray-800">
              or Log-in with
            </h1>
            <hr className="w-[80px] sm:w-[100px] border-gray-300" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
            <div className="flex items-center relative w-full">
              <RiFacebookFill
                className="text-[#41bfb8] absolute left-4"
                size={25}
              />
              <button className="btn w-full h-[60px] sm:h-[70px] bg-base-200 pl-12 rounded-lg text-base sm:text-xl hover:outline-2 outline-[#F79952] border-none">
                Facebook
              </button>
            </div>
            <div className="flex items-center relative w-full">
              <FaGoogle className="text-[#41bfb8] absolute left-4" size={25} />
              <button className="btn  w-full h-[60px] sm:h-[70px] bg-base-200 pl-12 rounded-lg text-base sm:text-xl hover:outline-2 outline-[#F79952] border-none">
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
