import React from "react";
import johndoe from "../media/johndoe.png";
import badge from "../media/badge.png";
import art from "../media/art.png";
import auto from "../media/auto.png";
import cups from "../media/cups.png";
import iwanttosing from "../media/iwanttosing.png";

const Leaderboard = () => {
  return (
    
<div className="min-h-screen flex items-center bg-black  ">
      <div className="flex-1 max-w-4-xl mx-20 p-10 mt-16">
        <ul
          class="grid lg:grid-cols-3 lg:grid-rows-6 
        md:grid-cols-1 md:grid-rows-6
        gap-8 grid-flow-col"
        >
          <li class="col-start-1 col-span-1 row-start-1 row-span-6 own h-156 bg-orange-500 rounded-lg shadow-xl">
            <div className="">
                <table className="table table-bordered">
                    <tbody className="tbody">
                        <tr>
                          <td>
                            <img src={cups} alt="art" className="absolute pt-7 pl-4 float-left" />
                            <span class=" font-extrabold pl-36 artcolor mt-10 absolute">Cups</span><br/>
                            <span class=" font-bold pl-36 mt-11 absolute leadername">Anna Kendrick</span><br/>
                            <pre class=" font-bold pl-36 mt-12 absolute leaderdate">Start: 6th July 2020  End: 27th July 2020</pre>
                            <hr className="line mt-28 ml-4"/>
                          </td>
                          
                        </tr>
                        <tr>
                          <td>
                            <img src={cups} alt="art" className="absolute pt-6 pl-4" />
                            <span class=" font-extrabold pl-36 artcolor mt-9 absolute">Cups</span><br/>
                            <span class=" font-bold pl-36 mt-10 absolute leadername">Anna Kendrick</span><br/>
                            <pre class=" font-bold pl-36 mt-11 absolute leaderdate">Start: 6th July 2020  End: 27th July 2020</pre>
                            <hr className="line mt-28 ml-4"/>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <img src={cups} alt="art" className="absolute pt-6 pl-4" />
                            <span class=" font-extrabold pl-36 artcolor mt-9 absolute">Cups</span><br/>
                            <span class=" font-bold pl-36 mt-10 absolute leadername">Anna Kendrick</span><br/>
                            <pre class=" font-bold pl-36 mt-11 absolute leaderdate">Start: 6th July 2020  End: 27th July 2020</pre>
                            <hr className="line mt-28 ml-4"/>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <img src={cups} alt="art" className="absolute pt-6 pl-4" />
                            <span class=" font-extrabold pl-36 artcolor mt-9 absolute">Cups</span><br/>
                            <span class=" font-bold pl-36 mt-10 absolute leadername">Anna Kendrick</span><br/>
                            <pre class=" font-bold pl-36 mt-11 absolute leaderdate">Start: 6th July 2020  End: 27th July 2020</pre>
                            <hr className="line mt-28 ml-4"/>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <img src={cups} alt="art" className="absolute pt-6 pl-4" />
                            <span class=" font-extrabold pl-36 artcolor mt-9 absolute">Cups</span><br/>
                            <span class=" font-bold pl-36 mt-10 absolute leadername">Anna Kendrick</span><br/>
                            <pre class=" font-bold pl-36 mt-11 absolute leaderdate">Start: 6th July 2020  End: 27th July 2020</pre>
                            <hr className="line mt-24 ml-4"/>
                          </td>
                        </tr>
                      </tbody>
                  </table>

        </div>

          </li>

          <li class="bg-gray-800 rounded-lg shadow-xl ml-28 ow-span-6 w-92 h-156">
            <h1 class="font-extrabold h-32 text-lg relative text-orange-500 not-italic w-48 left-6 top-6">
              Step - 1
            </h1>
            <div className="step1"></div>
            <h1 class="font-lg h-20 text-md relative text-white not-italic text-center -top-10 p-20">
              Users sing along to their favourite song
            </h1>
          </li>

        </ul>
      </div>
    </div>




    // <section>
    //   <div className="largeblack1 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        










    //     <div className="LeadBox">
    //       <div className="leaderboard_heading">
    //         <table className="table table-bordered">
    //           <thead>
    //             <tr>
    //               <th
    //                 scope="col-2"
    //                 className="text-center pl-16 pr-14 pt-6 text-white"
    //               >
    //                 Rank
    //               </th>
    //               <th
    //                 scope="col-4"
    //                 className="text-center pr-20 pt-6 text-white"
    //               >
    //                 Singer Name
    //               </th>
    //               <th
    //                 scope="col-2"
    //                 className="text-center pr-14 pt-6 text-white"
    //               >
    //                 AI Score
    //               </th>
    //               <th
    //                 scope="col-2"
    //                 className="text-center pr-12 pt-6 text-white"
    //               >
    //                 Likes
    //               </th>
    //               <th scope="col-2" className=" text-center pt-6 text-white">
    //                 Song
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody className="tbody">
    //             <tr>
    //               <th scope="row" className="pt-12 font-bold">
    //                 1
    //               </th>
    //               <td>
    //                 {" "}
    //                 <img
    //                   src={johndoe}
    //                   alt="Johndoe"
    //                   className="absolute pt-12"
    //                 />
    //                 <img
    //                   src={badge}
    //                   alt="Johndoe"
    //                   className="absolute pl-9 pt-10"
    //                 />
    //                 <span className="float-right pr-14 pt-14 font-bold">
    //                   John Doe
    //                 </span>
    //               </td>
    //               <td className="font-bold pt-14">95.3%</td>
    //               <td>
    //                 <img src={art} alt="art" className="absolute pt-10 " />
    //                 <span className="float-right pt-12 pr-7 font-bold artcolor">
    //                   20K
    //                 </span>
    //               </td>
    //               <td>
    //                 <img src={auto} alt="art" className="absolute pt-11 " />
    //                 <span className="float-right pt-12 pl-10 font-bold ">
    //                   20K
    //                 </span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <th scope="row" className="pt-12 font-bold">
    //                 1
    //               </th>
    //               <td>
    //                 {" "}
    //                 <img
    //                   src={johndoe}
    //                   alt="Johndoe"
    //                   className="absolute pt-12"
    //                 />
    //                 <img
    //                   src={badge}
    //                   alt="Johndoe"
    //                   className="absolute pl-9 pt-10"
    //                 />
    //                 <span className="float-right pr-14 pt-14 font-bold">
    //                   John Doe
    //                 </span>
    //               </td>
    //               <td className="font-bold pt-14">95.3%</td>
    //               <td>
    //                 <img src={art} alt="art" className="absolute pt-10 " />
    //                 <span className="float-right pt-12 pr-7 font-bold artcolor">
    //                   20K
    //                 </span>
    //               </td>
    //               <td>
    //                 <img src={auto} alt="art" className="absolute pt-11 " />
    //                 <span className="float-right pt-12 pl-10 font-bold ">
    //                   20K
    //                 </span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <th scope="row" className="pt-12 font-bold">
    //                 1
    //               </th>
    //               <td>
    //                 {" "}
    //                 <img
    //                   src={johndoe}
    //                   alt="Johndoe"
    //                   className="absolute pt-12"
    //                 />
    //                 <img
    //                   src={badge}
    //                   alt="Johndoe"
    //                   className="absolute pl-9 pt-10"
    //                 />
    //                 <span className="float-right pr-14 pt-14 font-bold">
    //                   John Doe
    //                 </span>
    //               </td>
    //               <td className="font-bold pt-14">95.3%</td>
    //               <td>
    //                 <img src={art} alt="art" className="absolute pt-10 " />
    //                 <span className="float-right pt-12 pr-7 font-bold artcolor">
    //                   20K
    //                 </span>
    //               </td>
    //               <td>
    //                 <img src={auto} alt="art" className="absolute pt-11 " />
    //                 <span className="float-right pt-12 pl-10 font-bold ">
    //                   20K
    //                 </span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <th scope="row" className="pt-12 font-bold">
    //                 1
    //               </th>
    //               <td>
    //                 {" "}
    //                 <img
    //                   src={johndoe}
    //                   alt="Johndoe"
    //                   className="absolute pt-12"
    //                 />
    //                 <img
    //                   src={badge}
    //                   alt="Johndoe"
    //                   className="absolute pl-9 pt-10"
    //                 />
    //                 <span className="float-right pr-14 pt-14 font-bold">
    //                   John Doe
    //                 </span>
    //               </td>
    //               <td className="font-bold pt-14">95.3%</td>
    //               <td>
    //                 <img src={art} alt="art" className="absolute pt-10 " />
    //                 <span className="float-right pt-12 pr-7 font-bold artcolor">
    //                   20K
    //                 </span>
    //               </td>
    //               <td>
    //                 <img src={auto} alt="art" className="absolute pt-11 " />
    //                 <span className="float-right pt-12 pl-10 font-bold ">
    //                   20K
    //                 </span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <th scope="row" className="pt-12 font-bold">
    //                 1
    //               </th>
    //               <td>
    //                 {" "}
    //                 <img
    //                   src={johndoe}
    //                   alt="Johndoe"
    //                   className="absolute pt-12"
    //                 />
    //                 <img
    //                   src={badge}
    //                   alt="Johndoe"
    //                   className="absolute pl-9 pt-10"
    //                 />
    //                 <span className="float-right pr-14 pt-14 font-bold">
    //                   John Doe
    //                 </span>
    //               </td>
    //               <td className="font-bold pt-14">95.3%</td>
    //               <td>
    //                 <img src={art} alt="art" className="absolute pt-10 " />
    //                 <span className="float-right pt-12 pr-7 font-bold artcolor">
    //                   20K
    //                 </span>
    //               </td>
    //               <td>
    //                 <img src={auto} alt="art" className="absolute pt-11 " />
    //                 <span className="float-right pt-12 pl-10 font-bold ">
    //                   20K
    //                 </span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <th scope="row" className="pt-12 font-bold">
    //                 1
    //               </th>
    //               <td>
    //                 {" "}
    //                 <img
    //                   src={johndoe}
    //                   alt="Johndoe"
    //                   className="absolute pt-12"
    //                 />
    //                 <img
    //                   src={badge}
    //                   alt="Johndoe"
    //                   className="absolute pl-9 pt-10"
    //                 />
    //                 <span className="float-right pr-14 pt-14 font-bold">
    //                   John Doe
    //                 </span>
    //               </td>
    //               <td className="font-bold pt-14">95.3%</td>
    //               <td>
    //                 <img src={art} alt="art" className="absolute pt-10 " />
    //                 <span className="float-right pt-12 pr-7 font-bold artcolor">
    //                   20K
    //                 </span>
    //               </td>
    //               <td>
    //                 <img src={auto} alt="art" className="absolute pt-11 " />
    //                 <span className="float-right pt-12 pl-10 font-bold ">
    //                   20K
    //                 </span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <th scope="row" className="pt-12 font-bold">
    //                 1
    //               </th>
    //               <td>
    //                 {" "}
    //                 <img
    //                   src={johndoe}
    //                   alt="Johndoe"
    //                   className="absolute pt-12"
    //                 />
    //                 <img
    //                   src={badge}
    //                   alt="Johndoe"
    //                   className="absolute pl-9 pt-10"
    //                 />
    //                 <span className="float-right pr-14 pt-14 font-bold">
    //                   John Doe
    //                 </span>
    //               </td>
    //               <td className="font-bold pt-14">95.3%</td>
    //               <td>
    //                 <img src={art} alt="art" className="absolute pt-10 " />
    //                 <span className="float-right pt-12 pr-7 font-bold artcolor">
    //                   20K
    //                 </span>
    //               </td>
    //               <td>
    //                 <img src={auto} alt="art" className="absolute pt-11 " />
    //                 <span className="float-right pt-12 pl-10 font-bold ">
    //                   20K
    //                 </span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <th scope="row" className="pt-12 font-bold">
    //                 1
    //               </th>
    //               <td>
    //                 {" "}
    //                 <img
    //                   src={johndoe}
    //                   alt="Johndoe"
    //                   className="absolute pt-12"
    //                 />
    //                 <img
    //                   src={badge}
    //                   alt="Johndoe"
    //                   className="absolute pl-9 pt-10"
    //                 />
    //                 <span className="float-right pr-14 pt-14 font-bold">
    //                   John Doe
    //                 </span>
    //               </td>
    //               <td className="font-bold pt-14">95.3%</td>
    //               <td>
    //                 <img src={art} alt="art" className="absolute pt-10 " />
    //                 <span className="float-right pt-12 pr-7 font-bold artcolor">
    //                   20K
    //                 </span>
    //               </td>
    //               <td>
    //                 <img src={auto} alt="art" className="absolute pt-11 " />
    //                 <span className="float-right pt-12 pl-10 font-bold ">
    //                   20K
    //                 </span>
    //               </td>
    //             </tr>
    //             {/* <tr>
    //                 <th scope="row" className="pt-12 font-bold">
    //                   1
    //                 </th>
    //                 <td>
    //                   {" "}
    //                   <img
    //                     src={johndoe}
    //                     alt="Johndoe"
    //                     className="absolute pt-12"
    //                   />
    //                   <img
    //                     src={badge}
    //                     alt="Johndoe"
    //                     className="absolute pl-9 pt-10"
    //                   />
    //                   <span className="float-right pr-14 pt-14 font-bold">
    //                     John Doe
    //                   </span>
    //                 </td>
    //                 <td className="font-bold pt-14">95.3%</td>
    //                 <td>
    //                   <img src={art} alt="art" className="absolute pt-10 " />
    //                   <span className="float-right pt-12 pr-7 font-bold artcolor">
    //                     20K
    //                   </span>
    //                 </td>
    //                 <td>
    //                   <img src={auto} alt="art" className="absolute pt-11 " />
    //                   <span className="float-right pt-12 pl-10 font-bold ">
    //                     20K
    //                   </span>
    //                 </td>
    //               </tr>
    //               <tr>
    //                 <th scope="row" className="pt-12 font-bold">
    //                   1
    //                 </th>
    //                 <td>
    //                   {" "}
    //                   <img
    //                     src={johndoe}
    //                     alt="Johndoe"
    //                     className="absolute pt-12"
    //                   />
    //                   <img
    //                     src={badge}
    //                     alt="Johndoe"
    //                     className="absolute pl-9 pt-10"
    //                   />
    //                   <span className="float-right pr-14 pt-14 font-bold">
    //                     John Doe
    //                   </span>
    //                 </td>
    //                 <td className="font-bold pt-14">95.3%</td>
    //                 <td>
    //                   <img src={art} alt="art" className="absolute pt-10 " />
    //                   <span className="float-right pt-12 pr-7 font-bold artcolor">
    //                     20K
    //                   </span>
    //                 </td>
    //                 <td>
    //                   <img src={auto} alt="art" className="absolute pt-11 " />
    //                   <span className="float-right pt-12 pl-10 font-bold ">
    //                     20K
    //                   </span>
    //                 </td>
    //               </tr>
    //               <tr>
    //                 <th scope="row" className="pt-12 font-bold">
    //                   1
    //                 </th>
    //                 <td>
    //                   {" "}
    //                   <img
    //                     src={johndoe}
    //                     alt="Johndoe"
    //                     className="absolute pt-12"
    //                   />
    //                   <img
    //                     src={badge}
    //                     alt="Johndoe"
    //                     className="absolute pl-9 pt-10"
    //                   />
    //                   <span className="float-right pr-14 pt-14 font-bold">
    //                     John Doe
    //                   </span>
    //                 </td>
    //                 <td className="font-bold pt-14">95.3%</td>
    //                 <td>
    //                   <img src={art} alt="art" className="absolute pt-10 " />
    //                   <span className="float-right pt-12 pr-7 font-bold artcolor">
    //                     20K
    //                   </span>
    //                 </td>
    //                 <td>
    //                   <img src={auto} alt="art" className="absolute pt-11 " />
    //                   <span className="float-right pt-12 pl-10 font-bold ">
    //                     20K
    //                   </span>
    //                 </td>
    //               </tr> */}
    //           </tbody>
    //         </table>
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
