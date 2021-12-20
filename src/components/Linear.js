import React from "react";
import girl1 from "../media/girl1.png";
import girl2 from "../media/girl2.png";
import right from "../media/right.png";
import wrong from "../media/wrong.png";
import medal from "../media/medal.png";
import buttontick from "../media/buttontick.png";

const Linear = () => {
  return (
    <div class="min-h-screen flex items-center linearbackground absolute lg:top-200 md:top-220 ">
      <div className="flex-1 max-w-4-xl mx-20 p-20">
        <ul
          class="grid lg:grid-cols-3 lg:grid-rows-3 
        md:grid-cols-3 md:grid-rows-3
        lg:gap-x-18 grid-flow-row lg:gap-y-9
        md:gap-x-8 md:gap-y-8"
        >
          <li class="col-start-1 col-span-3 row-start-1 row-span-6 w-92 h-24 lg:p-8 md:pt-1 text-white">
            <div class="font-extrabold text-4xl"> Do you want to vote Our singers song </div>
            <div>
              <br />
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic{" "}
            </div>
          </li>

          <li class=" h-96 lg:col-span-1 md:col-span-3">
            <div class="grid grid-cols-1 font-bold text-3xl pt-8 pl-16 text-yellow-500">Click to vote your decision</div>
            <div class=" mt-20">
            <img src={right} alt="John" className="absolute tickbox w-120 h-120" />
            <img src={wrong} alt="John" className=" absolute tickbox w-120 h-120 ml-40" />
            </div>
          </li>

          <li class="lg:col-span-2 md:col-span-4 px-14">
            <div class="grid grid-cols-2 gap-8">
              <li class="bg-white rounded-2xl shadow-xl h-84  lg:col-span-1">
                <div class="grid grid-cols-3">
                  <div class="col-span-1"></div>
                  <div class="col-span-1 pt-5">
                    <img src={girl1} alt="John"></img>
                  </div>
                  <div class="col-span-1"></div>
                </div>

                <div className="text-center font-bold text-gray-800 mb-3">
                  Jonathan James
                  <br />
                </div>
                <img src={medal} alt="medal" className=" pl-7 float-left" />
                <span className="text-normal pl-3">
                  Just the way you are the way yo...
                  <button class="bg-teal-600 hover:bg-green-700 text-white font-bold py-3  rounded-full w-72 ml-5 mt-24">
                <img src={buttontick} alt="medal" className=" pl-16 float-left" /> <span class="pr-20">Vote</span>
              </button>

                </span>
                
              </li>

              <li class="bg-white rounded-2xl shadow-xl h-84  lg:col-span-1">
                <div class="grid grid-cols-3">
                  <div class="col-span-1"></div>
                  <div class="col-span-1 pt-5">
                    <img src={girl2} alt="John"></img>
                  </div>
                  <div class="col-span-1"></div>
                </div>

                <div className="text-center font-bold text-gray-800 mb-3">
                  Albert Flores
                  <br />
                </div>
                <img src={medal} alt="medal" className=" pl-7 float-left" />
                <span className="text-normal pl-3">
                  Just the way you are the way yo...
                </span>
                <button class="bg-teal-600 hover:bg-green-700 text-white font-bold py-3  rounded-full w-72 ml-5 mt-28">
                 Vote
              </button>
              </li>
            </div>
          </li>
        </ul>
      </div>
    </div>

  );
};
export default Linear;
