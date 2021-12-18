import React from "react";
import bendera from "../media/bendera.png";

const Home = () => {
  return (
    <div className="LinearBg col-span-4">
      <img
        src={bendera}
        alt="bendera"
        className="ImageSize absolute  -top-1 left-36"
      />

      <div className="CounterText">
        Count Every Second Until The <br />
        Compitition Start.
      </div>

      <h1 className="days">2</h1>
    </div>
  );
};

export default Home;
