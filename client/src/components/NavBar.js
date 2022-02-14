import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";



const NavBar = () => {
    return (
        <Router>
      <div >
          <nav className="nav-bar">
            <Link to='./Home' id="nav">  </Link>
            <button>
            <Link to='./Stores' id="nav"> Stores </Link>
            </button>
            <button>
            <Link to='./Users' id="nav"> Users </Link>
            </button>
            <button>
            <Link to='./Login' id="nav"> Login </Link>
            </button>
          </nav>
          
      </div>
      </Router>
    )
}


export default NavBar