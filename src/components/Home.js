import React from "react";
import Header from "./Header";
import john from "../media/john.png";

const Home = () => {
  return (
    <section className="bg-center bg-cover absolute top-0 left-0 w-full homebg">
      <Header />
      
      <h1 class="mt-4 text-2xl  md:mt-20 font-bold text-center lg:pt-28 text-orange-500 xs:text-sm sm:mt-8 sm:text-xs md:text-lg lg:text-3xl xl:text-4xl">
            Evaluate your singing quality with our <br />state-of-the-art AI judge!
      </h1>

      <p class="lg:px-96 text-2xl font-light text-center xs:mt-4 text-white 
      sm:mt-8 xs:text-xs sm:text-xs 
      md:text-lg lg:text-xl md:mt-12 
      sm:px-4 md:px-6">
        Leverage agile frameworks to provide a robust synopsis for high level  overviews. Iterative approaches to 
        corporate strategy foster collaborative thinking to further the overall value proposition.  Organically grow 
        the holistic world view of disruptive innovation via workplace diversity and empowerment.
      </p>

      <div class="inline-block text-sm px-4 py-2 
                  lg:ml-96 lg:mt-16
                  md:ml-20 md:mt-10
                  sm:ml-20 sm:mt-10
                  xs:ml-6 xs:mt-4
                  leading-none bg-orange-500 text-white hover:text-orange-500 font-bold text-white-300 rounded transition duration-300 hover:bg-white mt-4">
        Our Best Singer
      </div>

      <div className="homefront">
        <div className="container top-10 left-20">
          <img src={john} alt="John" className="absolute inset-6" />
        </div>
      </div>

      {/*

        <div>
          <AudioPlayer
            autoPlay
            src="../cham.mp3"
            // other props here
          />
        </div>
      </div>

      <div className="">Jonathan James</div> */}
    </section>
  );
};

export default Home;
