import React from "react";
import box1 from "../media/box1.png";
import box2 from "../media/box2.png";
import box3 from "../media/box3.png";
import box4 from "../media/box4.png";
import box5 from "../media/box5.png";
import box6 from "../media/box6.png";
import share from "../media/share.png";

const TopSingers = () => {
  return (
    <section>


      <div className="largeblack">
        <div>
          <h1 className="text-white font-extrabold ourtopsinger text-center pt-20">Our top singers</h1>
          <span className="explain1">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches
           to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic</span>
          <div className="largebox1-1">
          <img  src={share} alt="Share" className="absolute shares"/>
            <img  src={box1} alt="John" className="absolute  top-12 left-32"/>
            <div className="innerbox1 text-white font-bold text-center text-lg pt-5">
              Average score<br/><span className="text-white font-extrabold text-center text-3xl">94.9%</span>
            </div>
          </div>

          <div className="largebox1-2">
          <img  src={share} alt="Share" className="absolute shares"/>
            <img  src={box2} alt="John" className="absolute  top-12 left-32 fill-transparent"/>
            <div className="innerbox2 text-white font-bold text-center text-lg pt-5">
              Average score<br/><span className="text-white font-extrabold text-center text-3xl">94.9%</span></div>
          </div>

          <div className="largebox1-3">
          <img  src={share} alt="Share" className="absolute shares"/>
            <img  src={box3} alt="John" className="absolute  top-12 left-32"/>
            <div className="innerbox3 text-white font-bold text-center text-lg pt-5">
              Average score<br/><span className="text-white font-extrabold text-center text-3xl">94.9%</span></div>
          </div>


          <div className="largebox2-2">
          <img  src={share} alt="Share" className="absolute shares"/>
            <img  src={box4} alt="John" className="absolute  top-12 left-32"/>
            <div className="innerbox4 text-white font-bold text-center text-lg pt-5">
              Average score<br/><span className="text-white font-extrabold text-center text-3xl">94.9%</span></div>
          </div>


          <div className="largebox2-1">
          <img  src={share} alt="Share" className="absolute shares"/>
            <img  src={box5} alt="John" className="absolute  top-12 left-32"/>
            <div className="innerbox5 text-white font-bold text-center text-lg pt-5">
              Average score<br/><span className="text-white font-extrabold text-center text-3xl">94.9%</span></div>
          </div>


          <div className="largebox2-3">
          <img  src={share} alt="Share" className="absolute shares"/>
            <img  src={box6} alt="John" className="absolute  top-12 left-32"/>
            <div className="innerbox6 text-white font-bold text-center text-lg pt-5">
              Average score<br/><span className="text-white font-extrabold text-center text-3xl">94.9%</span></div>
          </div>


        </div>
        <div className="viewmore"> View More </div>
        </div>

      </section>

  )
}
export default TopSingers