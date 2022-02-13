import React from 'react';
import module from './MyPosts.module.css'

//Components
import Post from "./Post/Post";

let postsData = [
  {likes: 12, message: 'Hi, i am Igor'},
  {likes: 4, message: 'I go walk!'},
  {likes: 31, message: 'Hello, world...'},
]

let postElement = postsData.map(({likes, message}) => <Post likes={likes} message={message} />)

const MyPosts = () => {
  return (
    <div className={module.postsBlock}>
      <div>
        <h3>New post</h3>
        <div>
          <textarea name="" id="" cols="80" rows="5"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <h3>My post</h3>
      </div>

      <div className={module.posts}>
        { postElement }
      </div>
    </div>
  );
};

export default MyPosts;