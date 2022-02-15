import React from "react";
import styles from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
  return (
    <div>
      <div className={styles.dialogsItem}>
        <NavLink to={`/dialogs/${props.id}`} className={({isActive}) => isActive ? styles.active : "white"}>
          {props.name}
        </NavLink>
      </div>
    </div>
  );
}