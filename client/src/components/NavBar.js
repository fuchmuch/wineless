import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";



const NavBar = () => {
    return (
        <Router>
      <div >
          <nav className="nav-bar">
            <Link to='./Home' id="nav">  </Link>
            <Link to='./Stores' id="nav"> Stores </Link>
            <Link to='./Users' id="nav"> Users </Link>
           
          </nav>
          
      </div>
      </Router>
    )
}


export default NavBar