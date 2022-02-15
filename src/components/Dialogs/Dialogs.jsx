import React from 'react';
import styles from './Dialogs.module.css'

//Components
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
//

const Dialogs = ({ dialogs, messages }) => {

  let dialogElement = dialogs.map(({name, id}) => <DialogItem id={id} name={name} />)
  let messageElement = messages.map(({message, id}) => <Message id={id} message={message} />)

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