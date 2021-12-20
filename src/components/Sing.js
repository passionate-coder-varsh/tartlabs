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

const Sing = () => {
  return (
    <div className=" flex items-center bg-white w-full absolute ">
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














                <div className="linearbackground w-full pl-40 pr-40 pt-20">




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
    </div>

  );
};
export default Sing;
