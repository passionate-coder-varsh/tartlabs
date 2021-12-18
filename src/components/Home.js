import React from "react";
import Header from "./Header";
import john from "../media/john.png";
import AudioPlayer from "react-h5-audio-player";

const Home = () => {
  return (
    <section className="home homebg">
      <Header />
      <hr class="horizontal" />
      <span class="contenthome">
        Evaluate your singing quality with <br /> our state-of-the-art AI judge!
      </span>
      <br />
      <span className="explain">
        Leverage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy foster
        collaborative thinking to further the overall value proposition.
        Organically grow the holistic world view of disruptive innovation via
        workplace diversity and empowerment.
      </span>

      <div className="singer">Our Best Singer</div>

      <div className="homefront">
        <div className="container top-10 left-20">
          <img src={john} alt="John" className="absolute inset-6" />
        </div>

        <div>
          <AudioPlayer
            autoPlay
            src="../cham.mp3"
            // other props here
          />
        </div>
      </div>

      <div className="">Jonathan James</div>
    </section>
  );
};

export default Home;
