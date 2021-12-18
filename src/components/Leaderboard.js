import React from "react";
import johndoe from "../media/johndoe.png";
import badge from "../media/badge.png";
import art from "../media/art.png";
import auto from "../media/auto.png";
import cups from "../media/cups.png";

const Leaderboard = () => {
  return (
    <section>
      <div className="largeblack1">
        <div className="ongoing">Ongoing Competitions</div>

        <h1 className="text-white mx-120 my-4392">Competitions</h1>
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th
                  scope="col-4"
                  className="text-center pl-16 pr-14 text-white"
                >
                  Rank
                </th>
                <th scope="col-4" className="text-center pr-20 text-white">
                  Singer Name
                </th>
                <th scope="col-4" className="text-center pr-14 text-white">
                  AI Score
                </th>
              </tr>
            </thead>
            <tbody className="tbody">
              <tr>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-12" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-12" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-12" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-20" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-20" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-20" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-12" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-12" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-12" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-12" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-12" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-12" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-12" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-12" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-12" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-12" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-12" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
                <td>
                  {" "}
                  <img src={cups} alt="Johndoe" className="absolute pt-12" />
                  <img
                    src={badge}
                    alt="Johndoe"
                    className="absolute pl-9 pt-10"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="leaderboard">
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
                </tbody>
              </table>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Leaderboard;
