import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Navigate,
    Link 
  } from "react-router-dom";
  

//api help https://www.geeksforgeeks.org/different-ways-to-fetch-data-using-api-in-react/

const NavBar = () => {
    return (
        <>
        <nav>
        <ul class="topnav">
        
                    <li><NavLink to='/Home'>Home</NavLink></li>
                    <li><NavLink to='/Inventory'>Inventory</NavLink></li>
                    <li><NavLink to='/About'>About</NavLink></li>
                    <li><NavLink to='/News'>News</NavLink></li>
                    <li class="center"><NavLink to='/Contact'>Contact</NavLink></li>
                    <li class="right"><NavLink to='/LoginForm'>Sign-In</NavLink></li>
            </ul>
        </nav>
        </>
    )
};

  export default NavBar;
