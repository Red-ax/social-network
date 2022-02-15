import React from 'react';
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://html5css.ru/howto/img_avatar.png" alt="avatar"/>
      {props.message}
      <div>
        <span>👍 {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;