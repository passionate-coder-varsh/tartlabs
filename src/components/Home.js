import React from "react";
import Header from "./Header";
import john from "../john.png"

const Home = () => {
    return (
    <section>  
        <section className="home homebg">
        <Header/>
            <hr className="horizontal" />
            <span className="contenthome">
                Evaluate your singing quality with <br /> our state-of-the-art AI judge!
            </span>
             <br />
            <span className="explain">Leverage agile frameworks to provide a robust synopsis for high level overviews. 
                  Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. 
                  Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</span>

            <div className="singer">Our Best Singer</div>

                  
            <div className="homefront">
                <div className="container top-10 left-20">
                    <img  src={john} alt="John"/>
                </div> 
            </div>
                
                
                <div className = "jonathan">Jonathan James</div>
        
           

        </section>

            <div className="time col-span-4">
            
            <p className="counter">Count Every Second Until The Compitition Start.</p>
            <h1 className="days">2</h1>
        </div>
    </section>
    )
  }
  
  export default Home

  const styles = StyleSheet.create({
  container: {
    position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
  },
    img: {
      width: '50%',
      position: 'absolute',
      left: 0,
    },
    imgr: {
      width: '50%',
      position: 'absolute',
      right: 0,
    }
});