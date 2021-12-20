import React from "react";
import step1 from "../media/step1.png";
import step2 from "../media/step2.png";
import step3 from "../media/step3.png";
import step4 from "../media/step4.png";
import girl1 from "../media/girl1.png";
import girl2 from "../media/girl2.png";
import right from "../media/right.png";
import wrong from "../media/wrong.png";
import medal from "../media/medal.png";
import buttontick from "../media/buttontick.png";
import musicbar from "../media/musicbar.png";

const Sing = () => {
  return (
    <div className=" flex items-center bg-white w-full absolute top-250 ">
      <div className="flex-1 max-w-4-xl">
        <div className="bg-black w-full pl-40 pr-40 pt-20">
          <ul
            class="grid lg:grid-cols-6 lg:grid-rows-2
                      md:grid-cols-2 md:grid-rows-3
                      sm:grid-cols-2 sm:grid-rows-3
                      gap-8 grid-flow-row"
          >
            <li class="col-start-1 col-span-2 row-start-1 row-span-6 w-92 h-156 bg-orange-500 rounded-lg shadow-xl">
              <h1 class="font-extrabold h-32 text-4xl relative text-white not-italic w-48 left-9 top-10">
                MusigPro works like this....!
              </h1>
              <div className="singergirl"></div>
            </li>

            <li class="singbggray rounded-lg shadow-xl h-72 col-span-2">
              <div class="grid grid-rows-2 grid-cols-3">
                <div class="row-span-2 text-orange-500 text-ld font-bold mt-8 ml-8">
                  Step - 1
                </div>
              </div>

              <div class="grid grid-cols-3">
                <div class="col-span-1"></div>
                <div class="col-span-1">
                  <img src={step1} alt="John" className="ml-8 mt-4 w-1/2"></img>
                </div>
                <div class="col-span-1"></div>
              </div>

              <div class="col-span-3 ml-8 mr-8 mt-2 rounded-lg content-center">
                <h1 class="font-lg h-20 text-md relative ml-8 mr-8 text-white not-italic text-center">
                  Users sing along to their favourite song
                </h1>
              </div>
            </li>

            <li class="singbggray rounded-lg shadow-xl h-72 col-span-2">
              <div class="grid grid-rows-2 grid-cols-3">
                <div class="row-span-2 text-orange-500 text-ld font-bold mt-8 ml-8">
                  Step - 2
                </div>
              </div>

              <div class="grid grid-cols-3">
                <div class="col-span-1"></div>
                <div class="col-span-1">
                  <img src={step2} alt="John" className="ml-8 mt-4 w-1/2"></img>
                </div>
                <div class="col-span-1"></div>
              </div>

              <div class="col-span-3 ml-8 mr-8 mt-2 rounded-lg content-center">
              <h1 class="font-lg h-20 text-md  relative text-white not-italic text-center -top-10 p-8">
                Analysis - Our Patent pending algorithm rates the performance
                for Pitch, Rhythm, Timbre & Vibrato
              </h1>
              </div>
            </li>

            <li class="singbggray rounded-lg shadow-xl h-72 col-span-2">
              <div class="grid grid-rows-2 grid-cols-3">
                <div class="row-span-2 text-orange-500 text-ld font-bold mt-8 ml-8">
                  Step - 2
                </div>
              </div>

              <div class="grid grid-cols-3">
                <div class="col-span-1"></div>
                <div class="col-span-1">
                  <img src={step2} alt="John" className="ml-8 mt-4 w-1/2"></img>
                </div>
                <div class="col-span-1"></div>
              </div>

              <div class="col-span-3 ml-8 mr-8 mt-2 rounded-lg content-center">
                <h1 class="font-lg h-20 text-md relative ml-8 mr-8 text-white not-italic text-center">
                  Users sing along to their favourite song
                </h1>
              </div>
            </li>

            <li class="singbggray rounded-lg shadow-xl h-72 col-span-2">
              <div class="grid grid-rows-2 grid-cols-3">
                <div class="row-span-2 text-orange-500 text-ld font-bold mt-8 ml-8">
                  Step - 2
                </div>
              </div>

              <div class="grid grid-cols-3">
                <div class="col-span-1"></div>
                <div class="col-span-1">
                  <img src={step2} alt="John" className="ml-8 mt-4 w-1/2"></img>
                </div>
                <div class="col-span-1"></div>
              </div>

              <div class="col-span-3 ml-8 mr-8 mt-2 rounded-lg content-center">
                <h1 class="font-lg h-20 text-md relative ml-8 mr-8 text-white not-italic text-center">
                  Users sing along to their favourite song
                </h1>
              </div>
            </li>

            {/* <li class="singbggray  rounded-lg shadow-xl h-72 col-span-2">
              <h1 class="font-extrabold h-32 text-lg relative text-orange-500 not-italic w-48 left-6 top-6">
                Step - 2
                <div class="grid grid-cols-3 w-80 h-56">
                  <div class="col-span-1"></div>
                  <div class="col-span-1 left-7">
                    <img src={step2} alt="John" class="w-32"></img>
                    <br />
                  </div>
                  <div class="col-span-1"></div>
                </div>
              </h1>
              <div className="step2"></div>
              <h1 class="font-lg h-20 text-md  relative text-white not-italic text-center -top-10 p-20">
                Analysis - Our Patent pending algorithm rates the performance
                for Pitch, Rhythm, Timbre & Vibrato
              </h1>
            </li>

            <li class="singbggray rounded-lg shadow-xl h-72 col-span-2">
              <h1 class="font-extrabold h-32 text-lg relative text-orange-500 not-italic w-48 left-6 top-6">
                Step - 3
                <div class="grid grid-cols-3 w-80 h-56">
                  <div class="col-span-1"></div>
                  <div class="col-span-1 w-40 ">
                    <img src={step3} alt="John" class="pl-10 h-18"></img>
                    <span class="font-bold text-white pl-8 my-20">
                      AI Score
                    </span>
                  </div>
                  <div class="col-span-1"></div>
                </div>
              </h1>
              <div className="step3"></div>
              <h1 class="font-lg h-20 text-md  relative text-white not-italic text-center top-18 p-10">
                The AI judge provides the singing quality score out of 100,
                along with graphical feedback, and position on the leaderboard.
              </h1>
            </li>

            <li class="singbggray rounded-lg shadow-xl h-72 col-span-2">
              <h1 class="font-extrabold h-32 text-lg relative text-orange-500 not-italic w-48 left-6 top-6">
                Step - 4
                <div class="grid grid-cols-3 w-80 h-56">
                  <div class="col-span-1"></div>
                  <div class="col-span-1 w-40 ">
                    <img src={step2} alt="John" class="pl-8 h-18"></img>
                    <span class="font-bold text-white pl-4">Popular Score</span>
                  </div>
                  <div class="col-span-1"></div>
                </div>
              </h1>
              <div className="step4"></div>
              <h1 class="font-lg h-20 text-md  relative text-white not-italic text-center -top-6 p-16">
                The user can share their performance to gather likes and rise up
                the leaderboard through popularity
              </h1>
            </li> */}
          </ul>
        </div>

        <div className="linearbackground w-full pl-40 pr-40 pt-20">
          <ul
            class="grid lg:grid-cols-3 lg:grid-rows-2 
        md:grid-cols-2 md:grid-rows-2
        sm:grid-cols-2 sm:grid-rows-2
        xs:grid-cols-2 xs:grid-rows-2
        gap-8 "
          >
            <li class="col-start-1 lg:col-span-3 md:col-span-3 sm:col-span-2 xs:col-span-2  row-start-1 row-span-6 w-92 h-24 lg:p-0 md:pt-1 text-left text-white">
              <div class="font-extrabold text-md lg:text-4xl md:text-3xl">
                Do you want to vote Our singers song
              </div>
              <div>
                <br />
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic{" "}
              </div>
            </li>
          </ul>

          <ul
            class="grid lg:grid-cols-3 lg:grid-rows-1
        md:grid-cols-2 md:grid-rows-2
        sm:grid-cols-2 sm:grid-rows-2
        xs:grid-cols-2 xs:grid-rows-2
        gap-8 "
          >
            <li class="rounded-lg  h-97 col-span-1">
              <ul
                class="grid grid-cols-2 grid-rows-2
         gap-y-2 "
              >
                <li class="h-40 col-span-2 font-bold text-3xl pt-16 pl-6 text-yellow-500">
                  Click to vote your decision
                </li>
                <li class="h-40 col-span-1 row-span-2">
                  <img src={right} alt="John" />
                </li>
                <li class="h-40 col-span-1 row-span-2">
                  <img src={wrong} alt="John" />
                </li>
              </ul>
            </li>

            <li class="bg-white rounded-lg  h-97 col-span-1">
              <div class="grid grid-cols-3">
                <div class="col-span-1"></div>
                <div class="col-span-1 pt-5">
                  <img src={girl1} alt="John" className="float-top"></img>
                  <span className="mt-12 font-bold pl-4">Annette Black</span>
                </div>
                <div class="col-span-1"></div>
              </div>

              <div class="grid grid-cols-3 grid-rows-3">
                <div class="col-span-3 row-span-1 mt-6 text-black font-extralight ">
                  <img src={medal} alt="medal" className=" pl-16 float-left" />
                  <span className="text-normal pl-1">
                    {"  "}Just the way you are the way yo...
                  </span>
                </div>
                <div class="col-span-3 row-span-1 text-center text-black font-thin ">
                  <img
                    src={musicbar}
                    alt="medal"
                    className=" pl-4 float-left"
                  />
                </div>

                <div class="col-span-3 ml-16 mr-16 mt-3 p-4 rounded-2xl shadow-xl bg-green-500 text-white content-center">
                  <div class="text-center">
                    <img
                      src={buttontick}
                      alt="medal"
                      className=" pl-16 float-left"
                    />{" "}
                    <span class="pr-20">Vote</span>
                  </div>
                </div>
              </div>
            </li>

            <li class="bg-white rounded-lg  h-97 col-span-1">
              <div class="grid grid-cols-3">
                <div class="col-span-1"></div>
                <div class="col-span-1 pt-5">
                  <img src={girl2} alt="John" className="float-top"></img>
                  <span className="mt-12 font-bold pl-4">Annette Black</span>
                </div>
                <div class="col-span-1"></div>
              </div>

              <div class="grid grid-cols-3 grid-rows-3">
                <div class="col-span-3 row-span-1 mt-6 text-black font-extralight ">
                  <img src={medal} alt="medal" className=" pl-16 float-left" />
                  <span className="text-normal pl-1">
                    {"  "}Just the way you are the way yo...
                  </span>
                </div>
                <div class="col-span-3 row-span-1 text-center text-black font-thin ">
                  <img
                    src={musicbar}
                    alt="medal"
                    className=" pl-4 float-left"
                  />
                </div>

                <div class="col-span-3 ml-16 mr-16 mt-3 p-4 rounded-2xl shadow-xl bg-green-400 text-white content-center">
                  <div class="text-center">Vote</div>
                </div>
              </div>
            </li>

            <li class=" rounded-lg shadow-xl h-20 lg:col-span-3 md:col-span-2">
              <div class=" grid grid-cols-3"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sing;
