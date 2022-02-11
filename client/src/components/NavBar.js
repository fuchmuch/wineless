import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const NavBar = () => {
    return (
        <Router>
      <div >
          <nav className="nav-bar">
            <Link to='/' id="nav-e"> Where to Buy discounted liquors </Link>
            <Link to='/stores' id="nav-e"> Stores </Link>
           
          </nav>
          
      </div>
      </Router>
    )
}


export default NavBar