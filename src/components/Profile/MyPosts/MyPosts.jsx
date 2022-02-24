import React from 'react';
import styles from './MyPosts.module.css'

//Components
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElement = props.posts.map(({likes, message}) => <Post likes={likes} message={message} />)

  let newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
    props.addPostMessage(text);

    newPostElement.current.value = '';
  }

  return (
    <div className={styles.postsBlock}>
      <div>
        <h3>New post</h3>
        <div>
          <textarea ref={newPostElement} className={styles.postArea} cols="80" rows="5">Hello</textarea>
        </div>
        <div>
          <button onClick={addPost} className={styles.addPostButton}>Add post</button>
        </div>
        <h3>My post</h3>
      </div>

      <div className={styles.posts}>
        { postElement }
      </div>
    </div>
  );
};

export default MyPosts;