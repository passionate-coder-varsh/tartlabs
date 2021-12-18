import React from "react";
import step1 from "../media/step1.png";
import step2 from "../media/step2.png";
import step3 from "../media/step3.png";
import step4 from "../media/step4.png";

const Sing = () => {
  return (
    <div className="sing">
    <div className="rectanglebox">
      <h1 className="rectboxtext">MusigPro works like this....!</h1>
    </div>
    <div className="singergirl"></div>

    <div className="box1">
      <div className="steps">Step - 1</div>
      <img src={step1} alt="John" className="absolute top-12 left-36" />
      <div className="stepstext">
        Users sing along to their favourite song
      </div>
    </div>

    <div className="box2">
      <div className="steps">Step - 2</div>
      <img src={step4} alt="John" className="absolute  top-12 left-36" />
      <div className="stepstext">
        Analysis - Our Patent pending algorithm rates the performance for
        Pitch, Rhythm, Timbre & Vibrato
      </div>
    </div>

    <div className="box3">
      <div className="steps">Step - 3</div>
      <img src={step3} alt="John" className="absolute  top-16 left-36" />
      <div className="stepstext">
        The AI judge provides the singing quality score out of 100, along
        with graphical feedback, and position on the leaderboard.
      </div>
    </div>

    <div className="box4">
      <div className="steps">Step - 4</div>
      <img src={step2} alt="John" className="absolute  top-16 left-32" />
      <div className="stepstext">
        The user can share their performance to gather likes and rise up the
        leaderboard through popularity
      </div>
    </div>
    </div>

  );
};
export default Sing;
