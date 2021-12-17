import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (  
     <header className="header">
       <div className="logo">
         <h2>
         <Link to="/">Musigpro</Link>
         </h2>
       </div>
       <nav>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/about">About us</Link>
           </li>
           <li>
             <Link to="/oursinger">Our Singers</Link>
           </li>
           <li>
             <Link to="/contact">Contact Us</Link>
           </li>
         </ul>
       </nav>
     </header>
      
    )
  }
  
  export default Header