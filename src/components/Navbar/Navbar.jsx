import React from 'react';
import module from './Navbar.module.css'
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={module.nav}>
      <div>
        <NavLink to="/profile" className={({isActive}) => isActive ? module.isActive : "white"}>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={({isActive}) => isActive ? module.isActive : "white"}>Messages</NavLink>
      </div>
      <div>
        <a href="">News</a>
      </div>
      <div>
        <a href="">Music</a>
      </div>
      <div>
        <a href="">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;