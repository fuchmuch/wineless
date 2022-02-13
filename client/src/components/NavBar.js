import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const NavBar = () => {
    return (
        <Router>
      <div >
          <nav className="nav-bar">
            <Link to='/Home' id="nav-e">  </Link>
            <Link to='/Stores' id="nav-e"> Stores </Link>
            <Link to='/Users' id="nav-e"> Users </Link>
           
          </nav>
          
      </div>
      </Router>
    )
}


export default NavBar