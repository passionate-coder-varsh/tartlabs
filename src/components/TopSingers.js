import React from "react";
import box1 from "../media/box1.png";
import box2 from "../media/box2.png";
import box3 from "../media/box3.png";
import box4 from "../media/box4.png";
import box5 from "../media/box5.png";
import box6 from "../media/box6.png";
import share from "../media/share.png";

const TopSingers = () => {
  return (
    <div className="min-h-screen flex items-center bg-black absolute lg:top-240 md:top-260">
      <div className="flex-1 max-w-4-xl lg:mx-40 md:mx-4 p-10 mt-10">

        <ul 
          class="grid lg:grid-cols-3 lg:grid-rows-2 
        md:grid-cols-2 md:grid-rows-2
        sm:grid-cols-2 sm:grid-rows-2
        xs:grid-cols-2 xs:grid-rows-2
        gap-8 grid-flow-row "
        >

<li class="col-start-1 lg:col-span-3 md:col-span-2 row-start-1 row-span-6 w-92 h-24 lg:p-0 md:pt-1 text-center text-white">
            <div class="font-extrabold text-4xl"> Our top singers </div>
            <div>
              <br />
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic{" "}
            </div>
          </li>



          <li class="col-span-1 w-92 bg-gray-800 rounded-lg shadow-xl h-96">

            <div class="grid grid-cols-3">
              <div class="col-span-1"></div>
              <div class="col-span-1 pt-5">
                <img src={box1} alt="John"></img>
              </div>
              <div class="col-span-1"></div>


              {/* <div className="innerbox1 text-white font-bold text-center text-lg pt-5 lg:mt-36 lg:ml-400 md:ml-4">
             Average score
             <br />
             <span className="text-white font-extrabold text-center text-3xl">
               94.9%
            </span>
           </div> */}
            </div>


            <div class="grid grid-cols-3">
              <div class="col-span-3 pt-32 m-9 mt-24 rounded-lg shadow-xl bg-gray-400 content-center justify-evenly">
              </div>
            </div>

          </li>

          <li class="bg-gray-800 rounded-lg shadow-xl  col-span-1 h-96">
            <div class="grid grid-cols-3">
              <div class="col-span-1"></div>
              <div class="col-span-1 pt-5">
                <img src={box2} alt="John"></img>
              </div>
              <div class="col-span-1"></div>
            </div>


            
            <div class="grid grid-cols-3">
              <div class="col-span-3 pt-32 m-9 mt-24 rounded-lg shadow-xl bg-gray-400 content-center justify-evenly">
              </div>
            </div>
          </li>

          <li class="bg-gray-800  rounded-lg shadow-xl col-span-1 h-96">
            <div class="grid grid-cols-3">
              <div class="col-span-1"></div>
              <div class="col-span-1 pt-5">
                <img src={box3} alt="John"></img>
              </div>
              <div class="col-span-1"></div>
            </div>


            
            <div class="grid grid-cols-3">
              <div class="col-span-3 pt-32 m-9 mt-24 rounded-lg shadow-xl bg-gray-400 content-center justify-evenly">
              </div>
            </div>
          </li>

          <li class="bg-gray-800 rounded-lg shadow-xl h-96 col-span-1">
            <div class="grid grid-cols-3">
              <div class="col-span-1"></div>
              <div class="col-span-1 pt-5">
                <img src={box5} alt="John"></img>
              </div>
              <div class="col-span-1"></div>
            </div>


            
            <div class="grid grid-cols-3">
              <div class="col-span-3 pt-32 m-9 mt-24 rounded-lg shadow-xl bg-gray-400 content-center justify-evenly">
              </div>
            </div>
          </li>

          <li class="bg-gray-800 rounded-lg shadow-xl h-96 col-span-1">
            <div class="grid grid-cols-3">
              <div class="col-span-1"></div>
              <div class="col-span-1 pt-5">
                <img src={box4} alt="John"></img>
              </div>
              <div class="col-span-1"></div>
            </div>


            
            <div class="grid grid-cols-3">
              <div class="col-span-3 pt-32 m-9 mt-24 rounded-lg shadow-xl bg-gray-400 content-center justify-evenly">
              </div>
            </div>
          </li>

          <li class="bg-gray-800 rounded-lg shadow-xl h-96 col-span-1">
            <div class="grid grid-cols-3">
              <div class="col-span-1"></div>
              <div class="col-span-1 pt-5">
                <img src={box6} alt="John"></img>
              </div>
              <div class="col-span-1"></div>
            </div>

            
            <div class="grid grid-cols-3">
              <div class="col-span-3 pt-32 m-9 mt-24 rounded-lg shadow-xl bg-gray-400 content-center justify-evenly">
              </div>
            </div>
          </li>

          <li class="bg-gray-800 rounded-lg shadow-xl h-20 lg:col-span-3 md:col-span-2">
            <div class="grid grid-cols-3">
              <div class="col-span-1"></div>
              <div class="col-span-1 pt-5 content-center justify-evenly">
                View More button
              </div>
              <div class="col-span-1"></div>
            </div>
          </li>

        </ul>
      </div>
    </div>

    // <div className="largeblack">
    //   <div>

    //     <div className="largebox1-1">
    //       <img src={share} alt="Share" className="absolute shares" />
    //       <img src={box1} alt="John" className="absolute  top-12 left-32" />
    //       <div className="innerbox1 text-white font-bold text-center text-lg pt-5">
    //         Average score
    //         <br />
    //         <span className="text-white font-extrabold text-center text-3xl">
    //           94.9%
    //         </span>
    //       </div>
    //     </div>

    //     <div className="largebox1-2">
    //       <img src={share} alt="Share" className="absolute shares" />
    //       <img
    //         src={box2}
    //         alt="John"
    //         className="absolute  top-12 left-32 fill-transparent"
    //       />
    //       <div className="innerbox2 text-white font-bold text-center text-lg pt-5">
    //         Average score
    //         <br />
    //         <span className="text-white font-extrabold text-center text-3xl">
    //           94.9%
    //         </span>
    //       </div>
    //     </div>

    //     <div className="largebox1-3">
    //       <img src={share} alt="Share" className="absolute shares" />
    //       <img src={box3} alt="John" className="absolute  top-12 left-32" />
    //       <div className="innerbox3 text-white font-bold text-center text-lg pt-5">
    //         Average score
    //         <br />
    //         <span className="text-white font-extrabold text-center text-3xl">
    //           94.9%
    //         </span>
    //       </div>
    //     </div>

    //     <div className="largebox2-2">
    //       <img src={share} alt="Share" className="absolute shares" />
    //       <img src={box4} alt="John" className="absolute  top-12 left-32" />
    //       <div className="innerbox4 text-white font-bold text-center text-lg pt-5">
    //         Average score
    //         <br />
    //         <span className="text-white font-extrabold text-center text-3xl">
    //           94.9%
    //         </span>
    //       </div>
    //     </div>

    //     <div className="largebox2-1">
    //       <img src={share} alt="Share" className="absolute shares" />
    //       <img src={box5} alt="John" className="absolute  top-12 left-32" />
    //       <div className="innerbox5 text-white font-bold text-center text-lg pt-5">
    //         Average score
    //         <br />
    //         <span className="text-white font-extrabold text-center text-3xl">
    //           94.9%
    //         </span>
    //       </div>
    //     </div>

    //     <div className="largebox2-3">
    //       <img src={share} alt="Share" className="absolute shares" />
    //       <img src={box6} alt="John" className="absolute  top-12 left-32" />
    //       <div className="innerbox6 text-white font-bold text-center text-lg pt-5">
    //         Average score
    //         <br />
    //         <span className="text-white font-extrabold text-center text-3xl">
    //           94.9%
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="viewmore"> View More </div>
    // </div>
  );
};
export default TopSingers;
