import React from "react";
import johndoe from "../media/johndoe.png";
import badge from "../media/badge.png";
import art from "../media/art.png";
import auto from "../media/auto.png";
import cups from "../media/cups.png";
import iwanttosing from "../media/iwanttosing.png";

const Leaderboard = () => {
  return (
    <div className="min-h-screen flex items-center bg-black leaderpush ">
      <div className="flex-1 max-w-4-xl mx-20 p-10 mt-16">
        <ul
          class="grid lg:grid-cols-6 lg:grid-rows-6 
        md:grid-cols-2 md:grid-rows-6
        gap-8 grid-flow-row"
        >
          <li class="col-start-1 col-span-2 row-start-1 row-span-6 w-92 h-192 bg-white rounded-lg shadow-xl">













          </li>




          <li class="bg-white rounded-lg shadow-xl h-192 w-192 col-span-4 row-start-1 row-span-6">
            
            <table class="table-auto">
              <thead>
                <tr>
                  <th
                    scope="col-2"
                    className="text-center pl-16 pr-14 pt-6 text-white"
                  >
                    Rank
                  </th>
                  <th
                    scope="col-4"
                    className="text-center pr-20 pt-6 text-white"
                  >
                    Singer Name
                  </th>
                  <th
                    scope="col-2"
                    className="text-center pr-14 pt-6 text-white"
                  >
                    AI Score
                  </th>
                  <th
                    scope="col-2"
                    className="text-center pr-12 pt-6 text-white"
                  >
                    Likes
                  </th>
                  <th scope="col-2" className=" text-center pt-6 text-white">
                    Song
                  </th>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr>
                  <th scope="row" className="paddingrow1">
                    1
                  </th>
                  <td>
                    {" "}
                    <img
                      src={johndoe}
                      alt="Johndoe"
                      className="absolute pt-12"
                    />
                    <img
                      src={badge}
                      alt="Johndoe"
                      className="absolute pl-9 pt-10"
                    />
                    <span className="float-right pr-14 pt-14 font-bold">
                      John Doe
                    </span>
                  </td>
                  <td className="font-bold pt-14 pl-12">95.3%</td>
                  <td>
                    <img src={art} alt="art" className="absolute pt-10 pl-12" />
                    <span className="float-right pt-12 pr-7 pl-20 font-bold artcolor">
                      20K
                    </span>
                  </td>
                  <td>
                    <img src={auto} alt="art" className="absolute pt-11 " />
                    <span className="float-right pt-12 pl-10 font-bold ">
                      20K
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="paddingrow1">
                    1
                  </th>
                  <td>
                    {" "}
                    <img
                      src={johndoe}
                      alt="Johndoe"
                      className="absolute pt-12"
                    />
                    <img
                      src={badge}
                      alt="Johndoe"
                      className="absolute pl-9 pt-10"
                    />
                    <span className="float-right pr-14 pt-14 font-bold">
                      John Doe
                    </span>
                  </td>
                  <td className="font-bold pt-14">95.3%</td>
                  <td>
                    <img src={art} alt="art" className="absolute pt-10 " />
                    <span className="float-right pt-12 pr-7 font-bold artcolor">
                      20K
                    </span>
                  </td>
                  <td>
                    <img src={auto} alt="art" className="absolute pt-11 " />
                    <span className="float-right pt-12 pl-10 font-bold ">
                      20K
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="paddingrow1">
                    1
                  </th>
                  <td>
                    {" "}
                    <img
                      src={johndoe}
                      alt="Johndoe"
                      className="absolute pt-12"
                    />
                    <img
                      src={badge}
                      alt="Johndoe"
                      className="absolute pl-9 pt-10"
                    />
                    <span className="float-right pr-14 pt-14 font-bold">
                      John Doe
                    </span>
                  </td>
                  <td className="font-bold pt-14">95.3%</td>
                  <td>
                    <img src={art} alt="art" className="absolute pt-10 " />
                    <span className="float-right pt-12 pr-7 font-bold artcolor">
                      20K
                    </span>
                  </td>
                  <td>
                    <img src={auto} alt="art" className="absolute pt-11 " />
                    <span className="float-right pt-12 pl-10 font-bold ">
                      20K
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="paddingrow1">
                    1
                  </th>
                  <td>
                    {" "}
                    <img
                      src={johndoe}
                      alt="Johndoe"
                      className="absolute pt-12"
                    />
                    <img
                      src={badge}
                      alt="Johndoe"
                      className="absolute pl-9 pt-10"
                    />
                    <span className="float-right pr-14 pt-14 font-bold">
                      John Doe
                    </span>
                  </td>
                  <td className="font-bold pt-14">95.3%</td>
                  <td>
                    <img src={art} alt="art" className="absolute pt-10 " />
                    <span className="float-right pt-12 pr-7 font-bold artcolor">
                      20K
                    </span>
                  </td>
                  <td>
                    <img src={auto} alt="art" className="absolute pt-11 " />
                    <span className="float-right pt-12 pl-10 font-bold ">
                      20K
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="paddingrow1">
                    1
                  </th>
                  <td>
                    {" "}
                    <img
                      src={johndoe}
                      alt="Johndoe"
                      className="absolute pt-12"
                    />
                    <img
                      src={badge}
                      alt="Johndoe"
                      className="absolute pl-9 pt-10"
                    />
                    <span className="float-right pr-14 pt-14 font-bold">
                      John Doe
                    </span>
                  </td>
                  <td className="font-bold pt-14">95.3%</td>
                  <td>
                    <img src={art} alt="art" className="absolute pt-10 " />
                    <span className="float-right pt-12 pr-7 font-bold artcolor">
                      20K
                    </span>
                  </td>
                  <td>
                    <img src={auto} alt="art" className="absolute pt-11 " />
                    <span className="float-right pt-12 pl-10 font-bold ">
                      20K
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="paddingrow1">
                    1
                  </th>
                  <td>
                    {" "}
                    <img
                      src={johndoe}
                      alt="Johndoe"
                      className="absolute pt-12"
                    />
                    <img
                      src={badge}
                      alt="Johndoe"
                      className="absolute pl-9 pt-10"
                    />
                    <span className="float-right pr-14 pt-14 font-bold">
                      John Doe
                    </span>
                  </td>
                  <td className="font-bold pt-14">95.3%</td>
                  <td>
                    <img src={art} alt="art" className="absolute pt-10 " />
                    <span className="float-right pt-12 pr-7 font-bold artcolor">
                      20K
                    </span>
                  </td>
                  <td>
                    <img src={auto} alt="art" className="absolute pt-11 " />
                    <span className="float-right pt-12 pl-10 font-bold ">
                      20K
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="paddingrow1">
                    1
                  </th>
                  <td>
                    {" "}
                    <img
                      src={johndoe}
                      alt="Johndoe"
                      className="absolute pt-12"
                    />
                    <img
                      src={badge}
                      alt="Johndoe"
                      className="absolute pl-9 pt-10"
                    />
                    <span className="float-right pr-14 pt-14 font-bold">
                      John Doe
                    </span>
                  </td>
                  <td className="font-bold pt-14">95.3%</td>
                  <td>
                    <img src={art} alt="art" className="absolute pt-10 " />
                    <span className="float-right pt-12 pr-7 font-bold artcolor">
                      20K
                    </span>
                  </td>
                  <td>
                    <img src={auto} alt="art" className="absolute pt-11 " />
                    <span className="float-right pt-12 pl-10 font-bold ">
                      20K
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="paddingrow1">
                    1
                  </th>
                  <td>
                    {" "}
                    <img
                      src={johndoe}
                      alt="Johndoe"
                      className="absolute pt-12"
                    />
                    <img
                      src={badge}
                      alt="Johndoe"
                      className="absolute pl-9 pt-10"
                    />
                    <span className="float-right pr-14 pt-14 font-bold">
                      John Doe
                    </span>
                  </td>
                  <td className="font-bold pt-14">95.3%</td>
                  <td>
                    <img src={art} alt="art" className="absolute pt-10 " />
                    <span className="float-right pt-12 pr-7 font-bold artcolor">
                      20K
                    </span>
                  </td>
                  <td>
                    <img src={auto} alt="art" className="absolute pt-11 " />
                    <span className="float-right pt-12 pl-10 font-bold ">
                      20K
                    </span>
                  </td>
                </tr>
                <tr>
                    <th scope="row" className="paddingrow1">
                      1
                    </th>
                    <td>
                      {" "}
                      <img
                        src={johndoe}
                        alt="Johndoe"
                        className="absolute pt-12"
                      />
                      <img
                        src={badge}
                        alt="Johndoe"
                        className="absolute pl-9 pt-10"
                      />
                      <span className="float-right pr-14 pt-14 font-bold">
                        John Doe
                      </span>
                    </td>
                    <td className="font-bold pt-14">95.3%</td>
                    <td>
                      <img src={art} alt="art" className="absolute pt-10 " />
                      <span className="float-right pt-12 pr-7 font-bold artcolor">
                        20K
                      </span>
                    </td>
                    <td>
                      <img src={auto} alt="art" className="absolute pt-11 " />
                      <span className="float-right pt-12 pl-10 font-bold ">
                        20K
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="paddingrow1">
                      1
                    </th>
                    <td>
                      {" "}
                      <img
                        src={johndoe}
                        alt="Johndoe"
                        className="absolute pt-12"
                      />
                      <img
                        src={badge}
                        alt="Johndoe"
                        className="absolute pl-9 pt-10"
                      />
                      <span className="float-right pr-14 pt-14 font-bold">
                        John Doe
                      </span>
                    </td>
                    <td className="font-bold pt-14">95.3%</td>
                    <td>
                      <img src={art} alt="art" className="absolute pt-10 " />
                      <span className="float-right pt-12 pr-7 font-bold artcolor">
                        20K
                      </span>
                    </td>
                    <td>
                      <img src={auto} alt="art" className="absolute pt-11 " />
                      <span className="float-right pt-12 pl-10 font-bold ">
                        20K
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="paddingrow1">
                      1
                    </th>
                    <td>
                      {" "}
                      <img
                        src={johndoe}
                        alt="Johndoe"
                        className="absolute pt-12"
                      />
                      <img
                        src={badge}
                        alt="Johndoe"
                        className="absolute pl-9 pt-10"
                      />
                      <span className="float-right pr-14 pt-14 font-bold">
                        John Doe
                      </span>
                    </td>
                    <td className="font-bold pt-14">95.3%</td>
                    <td>
                      <img src={art} alt="art" className="absolute pt-10 " />
                      <span className="float-right pt-12 pr-7 font-bold artcolor">
                        20K
                      </span>
                    </td>
                    <td>
                      <img src={auto} alt="art" className="absolute pt-11 " />
                      <span className="float-right pt-12 pl-10 font-bold ">
                        20K
                      </span>
                    </td>
                  </tr>
              </tbody>
            </table>







            <div className="step1"></div>
            
            <h1 class="font-lg h-20 text-md relative text-white not-italic text-center -top-10 p-20">
              Users sing along to their favourite song
            </h1>
          </li>

          <li class="bg-gray-800  rounded-lg shadow-xl h-72 col-span-2">
            <h1 class="font-extrabold h-32 text-lg relative text-orange-500 not-italic w-48 left-6 top-6">
              Step - 2
            </h1>
            <div className="step2"></div>
            <h1 class="font-lg h-20 text-md  relative text-white not-italic text-center -top-10 p-20">
            Analysis - Our Patent pending algorithm rates the performance for
         Pitch, Rhythm, Timbre & Vibrato
            </h1>
          </li>

          <li class="bg-gray-800 rounded-lg shadow-xl h-72 col-span-2">
            <h1 class="font-extrabold h-32 text-lg relative text-orange-500 not-italic w-48 left-6 top-6">
              Step - 3
            </h1>
            <div className="step3"></div>
            <h1 class="font-lg h-20 text-md  relative text-white not-italic text-center top-18 p-10">
            The AI judge provides the singing quality score out of 100, along
         with graphical feedback, and position on the leaderboard.
            </h1>
          </li>

          <li class="bg-gray-800 rounded-lg shadow-xl h-72 col-span-2">
            <h1 class="font-extrabold h-32 text-lg relative text-orange-500 not-italic w-48 left-6 top-6">
              Step - 4
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

    // <section>
    //   <div className="largeblack1 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">

    //     <div className="LeadBox">
    //       <div className="leaderboard_heading">

    //         <div className="iwanttosing"></div>
    //         <img
    //           src={iwanttosing}
    //           alt="iwanttosing"
    //           className="absolute pt-12 h-20 left-64 "
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};
export default Leaderboard;
