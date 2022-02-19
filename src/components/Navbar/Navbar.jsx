import React from 'react';
import styles from './Navbar.module.css'

////Components
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
//

const Navbar = ({ sidebar }) => {
  return (
    <nav className={styles.nav}>
      <div>
        <div>
          <NavLink to="/profile" className={({isActive}) => isActive ? styles.active : styles.notActive}>Profile</NavLink>
        </div>
        <div>
          <NavLink to="/dialogs" className={({isActive}) => isActive ? styles.active : styles.notActive}>Messages</NavLink>
        </div>
        <div>
          <a className={styles.notActive} href="">News</a>
        </div>
        <div>
          <a className={styles.notActive} href="">Music</a>
        </div>
        <div>
          <a className={styles.notActive} href="">Settings</a>
        </div>
      </div>
      <div>
        <Friends sidebar={sidebar}/>
      </div>
    </nav>
  );
};

export default Navbar;