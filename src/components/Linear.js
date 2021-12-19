import React from "react";
import girl1 from "../media/girl1.png";
import girl2 from "../media/girl2.png";
import right from "../media/right.png";
import wrong from "../media/wrong.png";
import medal from "../media/medal.png";

const Linear = () => {
  return (
    <div class="min-h-screen flex items-center bg-rose-400 absolute lg:top-200 md:top-220">
      <div className="flex-1 max-w-4-xl mx-20 p-10 mt-16">
        <ul
          class="grid lg:grid-cols-3 lg:grid-rows-3 
        md:grid-cols-3 md:grid-rows-3
        lg:gap-x-14 grid-flow-row lg:gap-y-6
        md:gap-x-8 md:gap-y-8"
        >
          <li class="col-start-1 col-span-3 row-start-1 row-span-6 w-92 h-24">
            <div> Do you want to vote Our singers song </div>
            <div>
              <br />
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic{" "}
            </div>
          </li>

          <li class="bg-gray-800 rounded-lg shadow-xl h-72 lg:col-span-1 md:col-span-3">
            <h1 class="font-extrabold h-32 text-lg relative text-orange-500 not-italic w-48 left-6 top-6">
              Step - 1
            </h1>
            <div className="step1"></div>
            <h1 class="font-lg h-20 text-md relative text-white not-italic text-center -top-10 p-20">
              Users sing along to their favourite song
            </h1>
          </li>

          <li class="rounded-lg shadow-xl h-72  lg:col-span-2 md:col-span-4 px-14">
            <div class="grid grid-cols-2 gap-6">
              <li class="bg-white rounded-lg shadow-xl h-72  lg:col-span-1">
                <div class="grid grid-cols-3">
                  <div class="col-span-1"></div>
                  <div class="col-span-1 pt-5">
                    <img src={girl2} alt="John"></img>
                  </div>
                  <div class="col-span-1"></div>
                </div>

                <div className="text-center font-bold text-gray-800 mb-3">
                  Jonathan James
                  <br />
                </div>
                <img src={medal} alt="medal" className=" pl-11 float-left" />
                <span className="text-normal pl-5">
                  Just the way you are the way yo...
                </span>
              </li>

              <li class="bg-white rounded-lg shadow-xl h-72  lg:col-span-1">
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
                <img src={medal} alt="medal" className=" pl-11 float-left" />
                <span className="text-normal pl-5">
                  Just the way you are the way yo...
                </span>
              </li>
            </div>
          </li>
        </ul>
      </div>
    </div>

    // <div className="linear">
    //   <div className="doyouwanttovote"> Do you want to vote Our singers song </div>
    //   <div className="doyouwanttovotesent">
    //     Leverage agile frameworks to provide a robust synopsis for high level
    //     overviews. Iterative approaches to corporate strategy foster
    //     collaborative thinking to further the overall value proposition.
    //     Organically grow the holistic{" "}
    //   </div>
    //   <div className="clicktovote">Click to vote your decision</div>
    //   <div>
    //     <img src={right} alt="John" className="tickbox w-134 h-134" />
    //   </div>

    //   <div>
    //     <img src={wrong} alt="John" className="crossbox w-134 h-134" />
    //   </div>

    //   <div className="whitebox1">
    //     <img src={girl1} alt="John" className="absolute  top-12 left-32" />
    //     <div className="text-center font-bold text-gray-800 pl-8 pt-48 mb-3">Jonathan James<br/></div>
    //     <img src={medal} alt="medal" className=" pl-11 float-left"/><span className="text-normal pl-5">Just the way you are the way yo...</span>

    //   </div>

    //   <div className="whitebox2">
    //     <img src={girl2} alt="John" className="absolute  top-12 left-32" />
    //     <div className="text-center font-bold text-gray-800 pl-8 pt-48 mb-3">Albert Flores<br/></div>
    //     <img src={medal} alt="medal" className=" pl-11 float-left"/><span className="text-normal pl-5">Just the way you are the way yo...</span>
    //   </div>
    // </div>
  );
};
export default Linear;
