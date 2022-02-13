import module from "./Message.module.css";
import React from "react";

export const Message = (props) => {
  return (
    <div className={module.message}>
      {props.message}
    </div>
  );
}