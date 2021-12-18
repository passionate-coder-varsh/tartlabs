import React from "react";
import bendera from "../media/bendera.png"

const Home = () => {
    return (
    <section>  
        <section>
            <div className="time col-span-4">
                <img  src={bendera} alt="bendera" className="im absolute  -top-1 left-36"/>

                <div className="counter">
                    Count Every Second Until The <br/>Compitition Start.
                
                </div>

                <div>
                    <ul>
                        <li className="text-center pl-56 pr-14 -pt-24 text-white">Days</li>
                        <li className="text-center pr-40 pt-6 text-white">Hours</li>
                        <li className="text-center pr-48 pt-6 text-white">Minutes</li>
                        <li className="text-center pr-52 pt-6 text-white">Seconds</li>
                    </ul>
                </div>
            
                <h1 className="days">2</h1>
            </div>
        </section>
    </section>
    )
}
  
export default Home