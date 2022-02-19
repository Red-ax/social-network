import React from "react";
import styles from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
  return (
    <div>
      <div className={styles.dialogsItem}>
        <img className={styles.userAvatar} src="https://mpng.subpng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg" alt="avatar"/>
        <NavLink to={`/dialogs/${props.id}`} className={({isActive}) => isActive ? styles.active : styles.notActive}>
          {props.name}
        </NavLink>
      </div>
    </div>
  );
}