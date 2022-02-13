import {NavLink} from "react-router-dom";
import module from "./DialogItem.module.css";
import React from "react";

export const DialogItem = (props) => {
  return (
    <div>
      <div className={module.dialogsItem}>
        <NavLink to={`/dialogs/${props.id}`} className={({isActive}) => isActive ? module.active : "white"}>
          {props.name}
        </NavLink>
      </div>
    </div>
  );
}