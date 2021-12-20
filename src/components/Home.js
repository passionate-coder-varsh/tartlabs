import React from "react";
import Header from "./Header";
import john from "../media/john.png";
import playbutton from "../media/playbutton.png";
import path from "../media/path.png"

const Home = () => {
  return (
    <section className="bg-center bg-cover absolute top-0 left-0 w-full homebg">
      <Header />
      <hr class="horizontal w-full" />
      <h1
        class="text-2xl xs:pt-28 md:pt-0 lg:pt-28
      lg:mt-8 md:mt-32 font-bold text-center text-orange-500 xs:text-sm sm:text-xs md:text-xl lg:text-3xl xl:text-4xl"
      >
        Evaluate your singing quality with our <br />
        state-of-the-art AI judge!
      </h1>

      <p
        class="lg:px-96 text-2xl font-light text-center xs:mt-4 text-white xs:pl-24
      sm:mt-8 xs:text-xs sm:text-xs 
      md:text-lg lg:text-xl md:mt-12 
      sm:px-4 md:px-6"
      >
        Leverage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy foster
        collaborative thinking to further the overall value proposition.
        Organically grow the holistic world view of disruptive innovation via
        workplace diversity and empowerment.
      </p>

      <a href="/home"><div
        class="inline-block text-sm px-4 py-2 
                  lg:ml-96 lg:mt-16
                  md:ml-20 md:mt-20
                  sm:ml-20 sm:mt-10
                  xs:ml-12 xs:mt-12 
                  leading-none bg-orange-500 text-white hover:text-orange-500 font-bold text-white-300 rounded transition duration-300 hover:bg-white mt-4"
      >
        Our Best Singer
      </div></a>

      <div
        class="absolute lg:w-192 md:w-96 sm:w-10 xs:w-10 lg:-mt-8 h-32 homefront left-96  lg:ml-80
                  md:left-16 md:px-80 "
      >
        <img src={john} alt="John" className="absolute inset-6" />
      </div>
      <div class="name">Jonathan James</div>
      <img src={playbutton} alt="play" className="playbutton"></img>
      <img src={path} alt="play" className="path"></img>
      <hr class="hrorange"></hr>
      <hr class="hrwhite"></hr>
      <div class="timeslot">1:56:00</div>
    </section>
  );
};

export default Home;
