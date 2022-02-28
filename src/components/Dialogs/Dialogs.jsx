import React from 'react';
import styles from './Dialogs.module.css'

//Components
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
//

const Dialogs = (props) => {

  let dialogElement = props.dialogsPage.dialogs.map(({name, id}) => <DialogItem id={id} name={name}/>)
  let messageElement = props.dialogsPage.messages.map(({message, id}) => <Message id={id} message={message}/>)

  return (
    <div className={styles.container}>
      <div className={styles.dialogs}>
        <div>
          {dialogElement}
        </div>
        <div>
          {messageElement}
        </div>
      </div>
      <div>
        <textarea className={styles.messageArea} placeholder='Hello...'/>
      </div>
    </div>
  );
};

export default Dialogs;