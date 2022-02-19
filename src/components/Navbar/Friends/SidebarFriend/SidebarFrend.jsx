import React from 'react';
import styles from './SidebarFrend.module.css'

const SidebarFrend = ({ avatar, name }) => {
  return (
    <div className={styles.friend}>
      <img src={avatar} alt="avatar"/>
      <p className={styles.userName}>
        {name}
      </p>
    </div>
  );
};

export default SidebarFrend;