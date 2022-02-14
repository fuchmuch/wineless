import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";



const NavBar = () => {
    return (
        <Router>
      <div >
          <nav className="nav-bar">
              
            <Link to='./Home' id="nav">  </Link>
            <button className="button1"> 
            <Link to='./Stores' id="nav"> Stores </Link>
            </button>
            <button className="button2">
            <Link to='./Users' id="nav"> Users </Link>
            </button>
            <button className="button3">
            <Link to='./Login' id="nav"> Login </Link>
            </button>
          </nav>
          
      </div>
      </Router>
    )
}


export default NavBar