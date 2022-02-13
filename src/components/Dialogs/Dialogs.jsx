import React from 'react';
import module from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const dialogsData = [
  {id: 1, name: 'Igor'},
  {id: 2, name: 'Dima'},
  {id: 3, name: 'Lena'},
  {id: 4, name: 'Maksim'},
  {id: 5, name: 'Sveta'},
];
const messagesData = [
  {id: 1, message: 'Hi, Igor!'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Go for a walk'},
  {id: 4, message: 'Hello world...'},
];

const DialogItem = (props) => {
  return (
    <div>
      <NavLink to={`/dialogs/${props.id}`} className={({isActive}) => isActive ? module.active : "white"}>
        {props.name}
      </NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={module.message}>{props.message}</div>
  );
}

let dialogElement = dialogsData.map(({name, id}) => <DialogItem id={id} name={name} />)
let messageElement = messagesData.map(({message, id}) => <Message id={id} message={message} />)

const Dialogs = () => {
  return (
    <div className={module.dialogs}>
      <div className={module.dialogsItem}>
        { dialogElement }
      </div>
      <div className={module.messages}>
        { messageElement }
      </div>
    </div>
  );
};

export default Dialogs;