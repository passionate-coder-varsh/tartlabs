import React from "react";
import musig from "../media/musig.png";
import arrow from "../media/arrow.png";

const Musigprofooter = () => {
  return (
  <div class="MusicFooter">
    <div className="min-h-screen flex items-center bg-black singpush ">
      <div className="flex-1 max-w-4-xl mx-20 p-10 mt-16">


    <div class="bg-amber-200 grid h-80 lg:grid-cols-4 md:grid-cols-1 2xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">


      <div class="relative lg:block items-center justify-center">
        <img
          class="sm:m-2 lg:m-14 md:m-6 xs:m-1"
          src={musig}
          alt="Woman workcationing on the beach"
        />
      </div>


      <div class="relative lg:block">
         <div class="m-8">
          <h1 class="text-2xl font-semibold text-gray-900 sm:mt-8 lg:text-2xl md:text-lg sm:text-lg xs:text-lg">
            Information</h1>

            <div class="grid grid-cols-2 gap-1">
                <a href="/home"><div class=" pt-10 hover:text-orange-500 ">Our Singers</div></a>
                {/* <a href="/home"><div class=" pt-10 hover:text-orange-500">Terms of Service</div></a>
                <a href="/home"><div class=" pt-5 hover:text-orange-500">Blog</div></a> */}
                {/* <a href="/home"><div class=" pt-5 hover:text-orange-500">Contact Us</div></a>
                <a href="/home"><div class=" pt-5 hover:text-orange-500">About Us</div></a>
                <a href="/home"><div class=" pt-5 hover:text-orange-500">Privacy Policy</div></a> */}
            </div>
            </div>

      </div>

      <div class="relative lg:block">
         <div class="m-8">
          <h1 class="text-2xl font-semibold text-gray-900 sm:mt-8 lg:text-2xl md:text-lg sm:text-lg xs:text-lg">
            Follow Us</h1>

            <div class="grid grid-cols gap-2 mb-6">

                <a href="/home"><div class="col-span-2 pt-2">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                  <a href="/home" class="fa fa-facebook"></a>
                  <a href="/home" class="fa fa-twitter"></a>
                  <a href="/home" class="fa fa-instagram"></a>
                </div></a>


                <a href="/home"><div class="pt-3 font-light">Drop your email to receive updates <br /> from musigpro</div></a>
                <div class="pt-3">
                  
                <input type="email" placeholder="Your email address"></input>
                  
                  </div>
            </div>
            </div>

      </div>


    

      <div class="relative lg:block">
      <div class="m-8">
          <h1 class="text-xl font-semibold text-gray-900 lg:text-2xl md:text-lg sm:text-lg xs:text-lg">
          Download MusigPro
          </h1>
          <div class="mt-6">
              <a class="btn btn-google text-black" href="/home" title="Google Play">Google Play</a>    
            </div>
            <div class="mt-6">
              <a class="btn btn-apple px-8" href="/home" title="Google Play">App Store    </a>    
            </div>
            
            </div>   
      
      </div>


    </div>
    </div>
</div>
  </div>
  );
};
export default Musigprofooter;
