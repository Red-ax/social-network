import React from 'react';
import styles from './Friends.module.css'
import SidebarFrend from "./SidebarFriend/SidebarFrend";

const Friends = (props) => {
  let sidebar = props.sidebar.sidebar;
  let sidebarElement = sidebar.map(({ avatar, name }) => <SidebarFrend avatar={avatar} name={name}/>)

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>Friends</p>
        <div className={styles.friends}>
          { sidebarElement }
        </div>
      </div>
    </div>
  );
};

export default Friends;