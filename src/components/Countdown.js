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

      <div id="countdown">
    <ul>
      <li><span id="days"></span>days</li>
      <li><span id="hours"></span>Hours</li>
      <li><span id="minutes"></span>Minutes</li>
      <li><span id="seconds"></span>Seconds</li>
    </ul>
  </div>
    </div>
  )
};

export default Home;
