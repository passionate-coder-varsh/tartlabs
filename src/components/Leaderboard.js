import React from "react";
import johndoe from "../media/johndoe.png";
import badge from "../media/badge.png";
import art from "../media/art.png";
import auto from "../media/auto.png";
import cups from "../media/cups.png";
import iwanttosing from "../media/iwanttosing.png";

const Leaderboard = () => {
  return (
    <div className="min-h-screen w-full lg:flex items-center bg-black leaderpush overflow-hidden ">
      <div className="flex-1 max-w-4-xl mx-20 p-10 mt-16">
        <ul
          class="grid lg:grid-cols-6 lg:grid-rows-6 
        md:grid-cols-4 md:grid-rows-6
        gap-8 grid-flow-row"
        >
          <li class="col-start-1 col-span-2 row-start-1 row-span-6 w-92 h-192 bg-white rounded-lg shadow-xl">


          </li>




          <li class="bg-white rounded-lg shadow-xl h-192 w-192 col-span-4 row-start-1 row-span-6">
            
            <table class="overflow-scroll">
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
              <tbody className="tbody ">
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
                    <img src={auto} alt="art" className="absolute pt-11 pl-10" />
                    <span className="float-right pt-11 pl-20 font-bold ">
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
                  <td className="font-bold pt-14 pl-12">95.3%</td>
                  <td>
                    <img src={art} alt="art" className="absolute pt-10 pl-12" />
                    <span className="float-right pt-12 pr-7 pl-20 font-bold artcolor">
                      20K
                    </span>
                  </td>
                  <td>
                    <img src={auto} alt="art" className="absolute pt-11 pl-10" />
                    <span className="float-right pt-11 pl-20 font-bold ">
                      20K
                    </span>
                  </td>
                </tr>                <tr>
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
                    <img src={auto} alt="art" className="absolute pt-11 pl-10" />
                    <span className="float-right pt-11 pl-20 font-bold ">
                      20K
                    </span>
                  </td>
                </tr>                <tr>
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
                    <img src={auto} alt="art" className="absolute pt-11 pl-10" />
                    <span className="float-right pt-11 pl-20 font-bold ">
                      20K
                    </span>
                  </td>
                </tr>                <tr>
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
                    <img src={auto} alt="art" className="absolute pt-11 pl-10" />
                    <span className="float-right pt-11 pl-20 font-bold ">
                      20K
                    </span>
                  </td>
                </tr>                <tr>
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
                    <img src={auto} alt="art" className="absolute pt-11 pl-10" />
                    <span className="float-right pt-11 pl-20 font-bold ">
                      20K
                    </span>
                  </td>
                </tr>                <tr>
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
                    <img src={auto} alt="art" className="absolute pt-11 pl-10" />
                    <span className="float-right pt-11 pl-20 font-bold ">
                      20K
                    </span>
                  </td>
                </tr>                <tr>
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
                    <img src={auto} alt="art" className="absolute pt-11 pl-10" />
                    <span className="float-right pt-11 pl-20 font-bold ">
                      20K
                    </span>
                  </td>
                </tr>                <tr>
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
                    <img src={auto} alt="art" className="absolute pt-11 pl-10" />
                    <span className="float-right pt-11 pl-20 font-bold ">
                      20K
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
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
