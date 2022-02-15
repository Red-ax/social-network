import React from 'react';
import styles from './Dialogs.module.css'

//Components
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

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
  {id: 5, message: 'Blabla bla'},
];

let dialogElement = dialogsData.map(({name, id}) => <DialogItem id={id} name={name} />)
let messageElement = messagesData.map(({message, id}) => <Message id={id} message={message} />)

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div>
        { dialogElement }
      </div>
      <div>
        { messageElement }
      </div>
    </div>
  );
};

export default Dialogs;