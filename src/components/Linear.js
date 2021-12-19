import React from "react";
import girl1 from "../media/girl1.png";
import girl2 from "../media/girl2.png";
import right from "../media/right.png";
import wrong from "../media/wrong.png";
import medal from "../media/medal.png";

const Linear = () => {
  return (
    <div className="linear">
      <div className="doyouwanttovote"> Do you want to vote Our singers song </div>
      <div className="doyouwanttovotesent">
        Leverage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy foster
        collaborative thinking to further the overall value proposition.
        Organically grow the holistic{" "}
      </div>
      <div className="clicktovote">Click to vote your decision</div>
      <div>
        <img src={right} alt="John" className="tickbox w-134 h-134" />
      </div>

      <div>
        <img src={wrong} alt="John" className="crossbox w-134 h-134" />
      </div>

      <div className="whitebox1">
        <img src={girl1} alt="John" className="absolute  top-12 left-32" />
        <div className="text-center font-bold text-gray-800 pl-8 pt-48 mb-3">Jonathan James<br/></div>
        <img src={medal} alt="medal" className=" pl-11 float-left"/><span className="text-normal pl-5">Just the way you are the way yo...</span>
        
        
      </div>
      

      <div className="whitebox2">
        <img src={girl2} alt="John" className="absolute  top-12 left-32" />
        <div className="text-center font-bold text-gray-800 pl-8 pt-48 mb-3">Albert Flores<br/></div>
        <img src={medal} alt="medal" className=" pl-11 float-left"/><span className="text-normal pl-5">Just the way you are the way yo...</span>
      </div>
    </div>
  );
};
export default Linear;
