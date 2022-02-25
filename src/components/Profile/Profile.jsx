import React from 'react';
// import styles from './Profile.module.css'

//Components
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
//

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
               addPostText={props.profilePage.newPostText}
               addPostMessage={props.addPostMessage}
               updatePost={props.updatePost}/>
    </div>
  );
};

export default Profile;