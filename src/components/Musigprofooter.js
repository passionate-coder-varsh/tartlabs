import React from "react";
import musig from "../media/musig.png";
import Header from "./Header";
import john from "../media/john.png";
import playbutton from "../media/playbutton.png";
import path from "../media/path.png"

const Musigprofooter = () => {
  return (
    
    
    <footer className=" flex items-center bg-white w-full h-auto absolute lg:top-280 md:top-300">
       
      
      <div className="flex-1 max-w-4-xl">
        <ul
          class="grid lg:grid-cols-2 xl:grid-cols-4
        md:grid-cols-2
        sm:grid-cols-1
        xs:grid-cols-1
        gap-x-2 "
        >
          <li class="col-span-1 flex object-center justify-center w-92  rounded-lg h-80">
            <div class="absolute lg:block items-center justify-center">
              <img
                class="sm:m-2 lg:m-14 lg:ml-14 md:m-6 xs:m-1"
                src={musig}
                alt="Woman workcationing on the beach"
              />
            </div>
          </li>

          <li class=" rounded-lg  col-span-1 h-80">
            <div class="m-8">
              <h1 class="text-2xl font-semibold text-gray-900 sm:mt-8 lg:text-2xl md:text-lg sm:text-lg xs:text-lg">
                Information
              </h1>

              <div class="grid grid-cols-2 gap-1">
                <a href="/home">
                  <div class=" pt-10 hover:text-orange-500 ">Our Singers</div>
                </a>
                <a href="/home">
                  <div class=" pt-10 hover:text-orange-500">
                    Terms of Service
                  </div>
                </a>
                <a href="/home">
                  <div class=" pt-5 hover:text-orange-500">Blog</div>
                </a>
                <a href="/home">
                  <div class=" pt-5 hover:text-orange-500">Contact Us</div>
                </a>
                <a href="/home">
                  <div class=" pt-5 hover:text-orange-500">About Us</div>
                </a>
                <a href="/home">
                  <div class=" pt-5 hover:text-orange-500">Privacy Policy</div>
                </a>
              </div>
            </div>
          </li>

          <li class=" rounded-lg col-span-1 h-80">
            <div class="m-8">
              <h1 class="text-2xl font-semibold text-gray-900 sm:mt-8 lg:text-2xl md:text-lg sm:text-lg xs:text-lg">
                Follow Us
              </h1>

              <div class="grid grid-cols gap-2 mb-6">
                <a href="/home">
                  <div class="col-span-2 pt-2">
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                    <a href="/home" class="fa fa-facebook"></a>
                    <a href="/home" class="fa fa-twitter"></a>
                    <a href="/home" class="fa fa-instagram"></a>
                  </div>
                </a>

                <a href="/home">
                  <div class="pt-3 font-light">
                    Drop your email to receive updates <br /> from musigpro
                  </div>
                </a>
                <div class="pt-3">
                  <input type="email" placeholder="Your email address"></input>
                </div>
              </div>
            </div>
          </li>

          <li class=" rounded-lg  h-80 col-span-1">
            <div class="m-8">
              <h1 class="text-xl font-semibold text-gray-900 lg:text-2xl md:text-lg sm:text-lg xs:text-lg">
                Download MusigPro
              </h1>
              <div class="mt-6">
                <a
                  class="btn btn-google text-black"
                  href="/home"
                  title="Google Play"
                >
                  Google Play
                </a>
              </div>
              <div class="mt-6">
                <a class="btn btn-apple px-8" href="/home" title="Google Play">
                  App Store{" "}
                </a>
              </div>
            </div>
          </li>
        </ul>
        <ul
          class="grid lg:grid-cols-3 xl:grid-cols-3
        md:grid-cols-2
        sm:grid-cols-1
        xs:grid-cols-1
        gap-x-2 "
        >
          <li class="col-span-4 flex object-center justify-center w-92 text-center p-5 text-white h-16 bg-orange-600">
            © 2021 MuSigPro, Inc. All Rights Reserved.
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Musigprofooter;
