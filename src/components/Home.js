import React from "react";
import Header from "./Header";
const Home = () => {
    return (
    <section>  
        <section className="home homebg">
        <Header/>

            <span className="contenthome">
                Evaluate your singing quality with <br /> our state-of-the-art AI judge!
            </span>
             
            <span className="explain">Leverage agile frameworks to provide a robust synopsis for high level overviews. 
                  Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. 
                  Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</span>

            <p className="singer">Our Best Singer</p>
                  
            <div className="audio">
        
            </div>

        </section>

            <div className="time col-span-4">
            
            <p className="counter">Count Every Second Until The Compitition Start.</p>
            <h1 className="days">2</h1>
        </div>
    </section>
    )
  }
  
  export default Home