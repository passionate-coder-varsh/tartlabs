import React from "react";
import johndoe from "../media/johndoe.png";
import badge from "../media/badge.png";
import art from "../media/art.png";
import auto from "../media/auto.png";
import cups from "../media/cups.png";
import iwanttosing from "../media/iwanttosing.png";

const Leaderboard = () => {
  return (
    
    <section>
      <div className="largeblack1 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <div className="CompBox">
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











        <div className="LeadBox">
          <div className="leaderboard_heading">
            <table className="table table-bordered">
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
                  <th scope="row" className="pt-12 font-bold">
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
                  <th scope="row" className="pt-12 font-bold">
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
                  <th scope="row" className="pt-12 font-bold">
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
                  <th scope="row" className="pt-12 font-bold">
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
                  <th scope="row" className="pt-12 font-bold">
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
                  <th scope="row" className="pt-12 font-bold">
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
                  <th scope="row" className="pt-12 font-bold">
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
                  <th scope="row" className="pt-12 font-bold">
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
                {/* <tr>
                    <th scope="row" className="pt-12 font-bold">
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
                    <th scope="row" className="pt-12 font-bold">
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
                    <th scope="row" className="pt-12 font-bold">
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
                  </tr> */}
              </tbody>
            </table>
            <div className="iwanttosing"></div>
            <img
              src={iwanttosing}
              alt="iwanttosing"
              className="absolute pt-12 h-20 left-64 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Leaderboard;
