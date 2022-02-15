import React from 'react';
import styles from './MyPosts.module.css'

//Components
import Post from "./Post/Post";

const MyPosts = ({ posts }) => {

  let postElement = posts.map(({likes, message}) => <Post likes={likes} message={message} />)

  return (
    <div className={styles.postsBlock}>
      <div>
        <h3>New post</h3>
        <div>
          <textarea name="" id="" cols="80" rows="5">Hello</textarea>
        </div>
        <div>
          <button>Add post</button>
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