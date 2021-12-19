import React from "react";
import bendera from "../media/bendera.png";

const Home = () => {
  return (
    <div className="LinearBg">
      <div class="grid ml-20 mt-8 mr-20 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 md:gap-2">
        <div class="col-span-1 md:row-span-2">
          <img
            src={bendera}
            alt="bendera"
            className="w-36  absolute  -top-1 md:left-8 lg:left-72"
          />
        </div>
        <div class="col-span-2"><h1 className="lg:text-2xl lg:pl-32 font-bold gap-44 text-white not-itali">
        Count Every Second Until The Compitition Start.
      </h1></div>
        <div class="col-span-2"><pre className="lg:text-2xl font-bold gap-44 text-white not-itali">
        2 Days : 3 Hours : 56 Minutes : 48 Seconds
      </pre></div>
      </div>
      {/* <img
        src={bendera}
        alt="bendera"
        className="ImageSize absolute  -top-1 left-36"
      />

      <div className="CounterText">
        Count Every Second Until The <br />
        Compitition Start.
      </div> */}
    </div>
  );
};

export default Home;
