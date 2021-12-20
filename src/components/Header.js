import React from "react";
import logo from "../media/logo.png";


const Header = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src={logo}
          alt="art"
          class="fill-current h-12 w-48 mr-2"
          viewBox="0 0 54 54"
        />
      </div>
      <div class="block lg:hidden md:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto sm:hidden xs:hidden md:float-right">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 float-right text-white hover:text-orange-500 mr-20"
          >
            Contact Us
          </a>

          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 float-right text-white hover:text-orange-500 mr-20"
          >
            Our Singers
          </a>

          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 float-right text-white hover:text-orange-500 mr-20"
          >
            About Us
          </a>

          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 float-right text-white hover:text-orange-500 mr-20"
          >
            Home
          </a>
        </div>
        <div>
          <a
            href="/home"
            class="inline-block text-sm px-8 py-2 mr-10 leading-none bg-orange-500 text-white hover:text-orange-500 font-bold text-white-300 rounded transition duration-300 hover:bg-white mt-4 lg:mt-0"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
