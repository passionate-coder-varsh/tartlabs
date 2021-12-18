import React from "react";
import musig from "../media/musig.png";

const Musigprofooter = () => {
  return (
  <div class="MusicFooter">
    <div class="bg-white grid h-80 lg:grid-cols-4 2xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">


      <div class="relative lg:block items-center justify-center">
        <img
          class="sm:m-2 lg:m-14 md:m-6 xs:m-1"
          src={musig}
          alt="Woman workcationing on the beach"
        />
      </div>


      <div class="relative lg:block">
         <div class="m-8">
          <h1 class="text-2xl font-semibold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
            Information</h1>

            <div class="grid grid-cols-2 gap-2 mb-6">
                <a href="/home"><div class=" pt-10 hover:text-orange-500 ">Our Singers</div></a>
                <a href="/home"><div class=" pt-10 hover:text-orange-500">Terms of Service</div></a>
                <a href="/home"><div class=" pt-5 hover:text-orange-500">Blog</div></a>
                <a href="/home"><div class=" pt-5 hover:text-orange-500">Contact Us</div></a>
                <a href="/home"><div class=" pt-5 hover:text-orange-500">About Us</div></a>
                <a href="/home"><div class=" pt-5 hover:text-orange-500">Privacy Policy</div></a>
            </div>
            </div>

      </div>

      <div class="relative lg:block">
         <div class="m-8">
          <h1 class="text-2xl font-semibold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
            Follow Us</h1>

            <div class="grid grid-cols gap-2 mb-6">

                <a href="/home"><div class="col-span-2 pt-2">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                  <a href="/home" class="fa fa-facebook">A</a>
                  <a href="/home" class="fa fa-instagram">A</a>
                  <a href="/home" class="fa fa-twitter">A</a>
                </div></a>


                <a href="/home"><div class="pt-3 font-light">Drop your email to receive updates <br /> from musigpro</div></a>
                <a href="/home"><div class="pt-3">
                  
                <input type="email" />
                  
                  </div></a>
            </div>
            </div>

      </div>


    

      <div class="relative h-80 lg:block">
        <a class="btn btn-google" href="/home" title="Google Play">Google Play</a>       
      
      </div>


    </div>
  </div>
  );
};
export default Musigprofooter;
