import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";



const NavBar = () => {
  return (
    <div >
      <nav id="nav-bar">
        <Link to='./Home' className="nav">  </Link>
        <button className="button1">
          <Link to='./Stores' className="nav"> Stores </Link>
        </button>
        <button className="button2">
          <Link to='./Users' className="nav"> Users </Link>
        </button>
        <button className="button3">
          <Link to='./Login' className="nav"> Login </Link>
        </button>
      </nav>
    </div>
  )
}


export default NavBar

/*
    <Switch>
        <Route path="/StoreDetails">
          <StoreDetails />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

      </Switch>
*/ 