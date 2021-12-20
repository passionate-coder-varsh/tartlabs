import React from "react";
import step1 from "../media/step1.png";
import step2 from "../media/step2.png";
import step3 from "../media/step3.png";
import step4 from "../media/step4.png";

const Sing = () => {
  return (
    <div className="min-h-screen flex items-center bg-black singpush ">
      <div className="flex-1 max-w-4-xl mx-20 p-10 mt-16">
        <ul
          class="grid lg:grid-cols-6 lg:grid-rows-6 
        md:grid-cols-2 md:grid-rows-6
        gap-8 grid-flow-row"
        >
          <li class="col-start-1 col-span-2 row-start-1 row-span-6 w-92 h-156 bg-orange-500 rounded-lg shadow-xl">
            <h1 class="font-extrabold h-32 text-4xl relative text-white not-italic w-48 left-9 top-10">
              MusigPro works like this....!
            </h1>
            <div className="singergirl"></div>
          </li>

          <li class="singbggray rounded-lg shadow-xl h-72 col-span-2">
            <h1 class="font-extrabold h-32 text-lg relative text-orange-500 not-italic w-48 left-6 top-6">
              Step - 1
              <div class="grid grid-cols-3 w-80">
                  <div class="col-span-1"></div>
                  <div class="col-span-1 pl-16 "> 
                  <img src={step1} alt="John" height={50} width={80} class="mb-8"></img>
                  </div>
                  <div class="col-span-1">
                  
                  </div>
                </div>
            </h1>
           
            <div className="step1">
            
            </div>
            
            <h1 class="font-lg h-20 text-md relative text-white not-italic text-center -top-10 p-20">
              Users sing along to their favourite song
            </h1>
          </li>

          <li class="singbggray  rounded-lg shadow-xl h-72 col-span-2">
            <h1 class="font-extrabold h-32 text-lg relative text-orange-500 not-italic w-48 left-6 top-6">
              Step - 2<div class="grid grid-cols-3 w-80 h-56">
                  <div class="col-span-1"></div>
                  <div class="col-span-1 left-7"> 
                  <img src={step2} alt="John" class="w-32" ></img><br/>
                  </div>
                  <div class="col-span-1">
                  
                  </div>
                </div>
              
            </h1>
            <div className="step2"></div>
            <h1 class="font-lg h-20 text-md  relative text-white not-italic text-center -top-10 p-20">
            Analysis - Our Patent pending algorithm rates the performance for
         Pitch, Rhythm, Timbre & Vibrato
            </h1>
          </li>

          <li class="singbggray rounded-lg shadow-xl h-72 col-span-2">
            <h1 class="font-extrabold h-32 text-lg relative text-orange-500 not-italic w-48 left-6 top-6">
              Step - 3<div class="grid grid-cols-3 w-80 h-56">
                  <div class="col-span-1"></div>
                  <div class="col-span-1 w-40 "> 
                  <img src={step3} alt="John" class="pl-10 h-18" ></img><span class="font-bold text-white pl-8 my-20">AI Score</span>
                  </div>
                  <div class="col-span-1">
                  
                  </div>
                </div>
            </h1>
            <div className="step3"></div>
            <h1 class="font-lg h-20 text-md  relative text-white not-italic text-center top-18 p-10">
            The AI judge provides the singing quality score out of 100, along
         with graphical feedback, and position on the leaderboard.
            </h1>
          </li>

          <li class="singbggray rounded-lg shadow-xl h-72 col-span-2">
            <h1 class="font-extrabold h-32 text-lg relative text-orange-500 not-italic w-48 left-6 top-6">
              Step - 4<div class="grid grid-cols-3 w-80 h-56">
                  <div class="col-span-1"></div>
                  <div class="col-span-1 w-40 "> 
                  <img src={step2} alt="John" class="pl-8 h-18" ></img><span class="font-bold text-white pl-4">Popular Score</span>
                  </div>
                  <div class="col-span-1">
                  
                  </div>
                </div>
            </h1>
            <div className="step4"></div>
            <h1 class="font-lg h-20 text-md  relative text-white not-italic text-center -top-6 p-16">
            The user can share their performance to gather likes and rise up the
         leaderboard through popularity
            </h1>
          </li>
        </ul>
      </div>
    </div>

  );
};
export default Sing;
