import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <div >
          <nav className="nav-bar">
            <Link to='/' id="nav-e"> Where to Buy discounted liquors </Link>
            <Link to='/bills' id="nav-e"> Stores </Link>
            <Link to='/profile/:id' id="nav-e"> Profile </Link>
          </nav>
      </div>
    )
}
import React from 'react';

const SearchResults= (props) => {

    return (
        <div className='searchdiv'>
          <input
            type="text"
            name="Search"
            value={props.value}
            placeholder="Search Restaurants"
            onChange={props.onChange}
          ></input>
          <button className='searchbtn' type="submit">Search</button>
        </div>
      )
    
}

export default SearchResults;

export default NavBar